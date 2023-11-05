import React from "react";
import PearlItem from "./PearlItem";
import Image1 from "../../../assets/images/pearlCollection/image1.jpg";
import Image2 from "../../../assets/images/pearlCollection/image2.jpg";
import PearlHeading from "./PearlHeading";

const PearlCollection = () => {
  return (
    <div className="w-full h-full mt-28 flex flex-col items-center">
      <PearlHeading />
      <div className="flex mt-16 ml-40">
        <div id="div1" className="w-3/4 h-[39.85rem]">
          <img
            className="w-full h-full object-cover"
            src={Image1}
            alt="Pearl Image 1"
          />
        </div>
        <div id="div2" className="flex flex-wrap ml-4">
          <PearlItem imageUrl={Image2} />
          <PearlItem imageUrl={Image2} />
          <PearlItem imageUrl={Image2} />
          <PearlItem imageUrl={Image2} />
        </div>
      </div>
      <button className="mt-14 uppercase border-2 border-black px-8 py-3 text-md font-semibold ">
        See more
      </button>
    </div>
  );
};

export default PearlCollection;
