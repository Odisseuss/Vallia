import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandingWithSVGBackground from "../section_presets/LandingWithSVGBackground";
import AboutCards from "../section_presets/AboutCards";
import Testimonial from "../components/Testimonial";
import OurClients from "../section_presets/OurClients";
import GetInTouchWithOneButton from "../section_presets/GetInTouchWithOneButton";

function SaaSCompany() {
  return (
    <div>
      <Navbar />
      <LandingWithSVGBackground />
      <AboutCards />
      <Testimonial />
      <OurClients />
      <GetInTouchWithOneButton />
      <Footer />
    </div>
  );
}

export default SaaSCompany;
