import { Fragment } from "react";
import HeroSection from "../HeroSection/HeroSection";
import MeetSection from "../MeetSection/MeetSection";
import ImageSection from "../ImageSection/ImageSection";
import Products from "../NewProducts/Products";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <MeetSection />
      <ImageSection />
      <Products />
    </Fragment>
  );
};

export default HomePage;
