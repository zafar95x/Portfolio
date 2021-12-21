import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";

const Plans = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Plans" text="Choose your package" />
      <Packages />
      <Footer />
    </div>
  );
};

export default Plans;
