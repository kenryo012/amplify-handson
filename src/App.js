import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { ApplicationCreate } from './ui-components'

function App() {
  return (
    <div className="App">
      <ApplicationCreate width={"100vw"} />
    </div>
  );
}

export default withAuthenticator(App);