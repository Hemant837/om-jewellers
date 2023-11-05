import React from "react";
import Image1 from "../../../assets/images/imageSection/image1.jpg";
import Image2 from "../../../assets/images/imageSection/image2.jpg";

const ImageSection = () => {
  return (
    <div className="h-[30git rem] flex">
      <div className="w-1/2 mr-2">
        <img
          src={Image1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 ml-2">
        <img
          src={Image2}
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSection;
