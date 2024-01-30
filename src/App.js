import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { ApplicationCreate, ApplicationItemCollection } from "./ui-components";

function App({ signOut }) {
  return (
    <div className="App">
      <ApplicationItemCollection alignItems="center" />
      <ApplicationCreate width={"100vw"} />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
