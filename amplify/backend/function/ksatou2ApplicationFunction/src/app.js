const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  UpdateCommand,
} = require("@aws-sdk/lib-dynamodb");
const {
  SFNClient,
  SendTaskSuccessCommand,
  SendTaskFailureCommand,
} = require("@aws-sdk/client-sfn");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const bodyParser = require("body-parser");
const express = require("express");

const ddbClient = new DynamoDBClient({ region: process.env.TABLE_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
const sfnClient = new SFNClient({ region: process.env.TABLE_REGION });

// 末尾の環境名はいらないので注意
let tableName = "Application-74ev7jrwvzax3bphq7bzs2yjfi";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const path = "/application";

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get(path, async function (req, res) {
  const id = req.query["id"];
  const kind = req.query["kind"];
  const newStatus = kind === "1" ? "ACCEPTED" : "REJECTED";

  // idに紐づくstatusをkindに従ってupdate
  const updateResult = await ddbDocClient.send(
    new UpdateCommand({
      TableName: tableName,
      Key: {
        id: id,
      },
      UpdateExpression: "SET #st = :newStatus",
      // statusは予約後であるため別名をつける
      ExpressionAttributeNames: {
        "#st": "status",
      },
      ExpressionAttributeValues: {
        ":newStatus": newStatus,
      },
    })
  );

  console.log(updateResult);

  const command = new GetItemCommand({
    TableName: tableName,
    Key: {
      id: { S: id },
    },
  });

  // idに紐づくtaskTokenの取得
  const data = await ddbDocClient.send(command);

  const taskToken = data.Item.taskToken.S;
  let sfnResult;

  // kindの値に従ってtaskTokenをステートマシンに送信
  if (kind === "1") {
    const input = {
      taskToken: taskToken,
      output: JSON.stringify({ result: "success" }),
    };
    sfnResult = await sfnClient.send(new SendTaskSuccessCommand(input));
  } else {
    const input = {
      taskToken: taskToken,
    };
    const command = new SendTaskFailureCommand(input);
    sfnResult = await sfnClient.send(command);
  }
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
