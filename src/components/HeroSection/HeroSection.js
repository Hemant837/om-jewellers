import React from "react";
import heroImage from "../../assets/images/heroImage4.jpg";
import HeroMessage from "./HeroMessage";

const HeroSection = () => {
  return (
    <div className="flex bg-orange-200">
      <HeroMessage />
      <img className="w-1/2" src={heroImage} alt="Hero Image" />
    </div>
  );
};

export default HeroSection;
