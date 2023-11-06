import { AmplifyDDBResourceTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyDDBResourceTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    delete(resources.dynamoDBTable.provisionedThroughput) // 既存のプロビジョンド設定を削除
    delete(resources.dynamoDBTable.globalSecondaryIndexes[0].provisionedThroughput); // 既存GSIに設定されているプロビジョンド設定削除
    resources.dynamoDBTable.billingMode = "PAY_PER_REQUEST" // プロビジョンドからオンデマンドに変更
}
