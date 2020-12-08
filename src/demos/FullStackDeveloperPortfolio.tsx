import * as React from "react";
import LandingWithAnimatedText from "../section_presets/LandingWithAnimatedText";
import Navbar from "../components/Navbar";
import AboutPictureText from "../section_presets/AboutPictureText";
import Timeline from "../components/Timeline";
import MySkills from "../section_presets/MySkills";
import GetInTouchWithForm from "../section_presets/GetInTouchWithForm";
import Footer from "../components/Footer";

function FullStackDeveloperPortfolio() {
  return (
    <div>
      <Navbar />
      <LandingWithAnimatedText />
      <AboutPictureText />
      <Timeline />
      <MySkills />
      <GetInTouchWithForm />
      <Footer />
    </div>
  );
}

export default FullStackDeveloperPortfolio;
