import * as React from "react";
import "./App.css";
import LandingWithAnimatedText from "./section_presets/LandingWithAnimatedText";
import Navbar from "./components/Navbar";
import FullStackDeveloperPortfolio from "./demos/FullStackDeveloperPortfolio";
import SaaSCompany from "./demos/SaaSCompany";

function App() {
  return (
    <div>
      {/* <FullStackDeveloperPortfolio /> */}
      <SaaSCompany />
    </div>
  );
}

export default App;
