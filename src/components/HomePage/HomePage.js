import { Fragment } from "react";
import HeroSection from "../HeroSection/HeroSection";
import MeetSection from "../MeetSection/MeetSection";
import ImageSection from "../ImageSection/ImageSection";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <MeetSection />
      <ImageSection />
    </Fragment>
  );
};

export default HomePage;
