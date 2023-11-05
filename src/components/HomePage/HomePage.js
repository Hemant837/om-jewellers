import { Fragment } from "react";
import HeroSection from "./HeroSection/HeroSection";
import MeetSection from "./MeetSection/MeetSection";
import ImageSection from "./ImageSection/ImageSection";
import NewProducts from "./NewProducts/NewProducts";
import PearlCollection from "./PearlCollection/PearlCollection";
import Newsletter from "./Newsletter/Newsletter";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <MeetSection />
      <ImageSection />
      <NewProducts />
      <PearlCollection />
      <Newsletter />
    </Fragment>
  );
};

export default HomePage;
