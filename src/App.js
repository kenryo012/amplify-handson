import './App.css';

import { NavBarHeader2, MarketingPricing, MarketingFooter } from './ui-components'


function App() {
  return (
    <div className="App">
      <NavBarHeader2 width={"100vw"}/>
      <MarketingPricing width={"100vw"}/>
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;
