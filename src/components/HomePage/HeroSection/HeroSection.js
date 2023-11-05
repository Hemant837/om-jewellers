import React from "react";
import HeroMessage from "./HeroMessage";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <div className="flex bg-orange-200">
      <HeroMessage />
      <HeroImage />
    </div>
  );
};

export default HeroSection;
