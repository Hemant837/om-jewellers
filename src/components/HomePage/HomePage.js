import { Fragment } from "react";
import HeroSection from "../HeroSection/HeroSection";
import MeetSection from "../MeetSection/MeetSection";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <MeetSection />
    </Fragment>
  );
};

export default HomePage;
