import React from "react";
import Orange from "./../../Assets/Orange.png";
import Black from ".//../../Assets/Black.png";
import Category from "../Components/Category";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[84rem]  shadow-inherit to-black rounded-xl mt-16"
            src={Orange}
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[84rem] h-[44vh] shadow-xl rounded-xl mt-16 cover"
            src={Black}
            alt=""
          />
        </div>
        <div className="w-full ">
          <div className="w-full h-16 mt-12 mb-12 flex items-center justify-center border border-black">
            <p className="text-6xl font-semibold ">SHOP BY CATEGORY</p>
          </div>
          <Category/>
        </div>
      </div>
    </>
  );
};

export default Hero;
