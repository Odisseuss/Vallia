import * as React from "react";
import "./App.css";
import LandingWithSVGBackground from "./layout_presets/LandingWithSVGBackground";
import LandingWithAnimatedText from "./layout_presets/LandingWithAnimatedText";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <LandingWithSVGBackground /> */}
      <Navbar />
      <LandingWithAnimatedText />
    </div>
  );
}

export default App;
