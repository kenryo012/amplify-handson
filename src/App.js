import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { ApplicationCreate, ApplicationItemCollection } from "./ui-components";
import { Auth, DataStore, API } from "aws-amplify";
import { useEffect, useState } from "react";
import awsconfig from "./aws-exports";

const [{ name: API_NAME }] = awsconfig.aws_cloud_logic_custom;

function App({ signOut }) {
  // コンポーネントで管理者かどうかの状態を管理したいのでuseStateフックを使用する
  const [isAdmin, setAdmin] = useState(false);
  // レンダリング後に指定した関数を実行させる
  useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const checkAdmin = async () => {
      await Auth.currentSession().then((user) => {
        const { payload } = user.getIdToken();
        // ログインしたユーザのセッション情報内にあるペイロードにユーザが属するグループ名がある。
        // それが"Admin"であるかチェックする。
        const result = !!(
          payload &&
          payload["cognito:groups"] &&
          payload["cognito:groups"][0] === "Admin"
        );
        setAdmin(result);
      });
    };
    checkAdmin();
    return () => {
      setAdmin(false);
    };
  }, []);

  // ログアウト関数
  const handleLogout = async (signOut) => {
    // セッションとCookieの削除
    sessionStorage.clear();
    // IndexedDB格納されている変更前のQuery結果を削除
    await DataStore.clear("amplify-datastore");
    await signOut();
  };

  const judge = async (id, kind) => {
    await API.get(API_NAME, "/application", {
      queryStringParameters: {
        id: id,
        kind: kind,
      },
    });
  };

  return (
    <div className="App">
      <ApplicationItemCollection
        alignItems="center"
        overrideItems={({ item }) => ({
          overrides: {
            // 承認ボタン
            ApproveButton: {
              // 表示非表示を所属グループによって切り替える
              display: !isAdmin && "none",
              // ボタンをクリックした時の動作を定義する
              onClick: () => judge(item.id, "1"),
            },
            // 却下ボタン
            RejectButton: {
              display: !isAdmin && "none",
              // ボタンをクリックした時の動作を定義する
              onClick: () => judge(item.id, "2"),
            },
          },
        })}
      />
      {
        // 管理者グループでない場合、申請入力欄を表示する
        !isAdmin && <ApplicationCreate width={"100vw"} />
      }
      <button onClick={() => handleLogout(signOut)}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
