import React from "react";
import hero_image from "./../../Assets/hero_image.png";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-pink-400  ">
        <div className=" flex flex-row justify-evenly pt-[8rem] ">
          <div className="flex w-full flex-col gap-2 justify-center pl-[12rem] ">
            <h1 className="text-2xl font-bold">NEW ARRIVALS ONLY</h1>
            <div className="text-7xl font-bold flex flex-col gap-6">
              <p>new collections</p>
              <p>for everyone</p>
            </div>
          </div>
          <div className="mr-[16rem] pt-8">
            <img src={hero_image} alt="" />
          </div>
        </div>
        <div className="w-full flex items-center pl-[12rem] ">
          <button className="px-[6rem] py-[1rem] bg-red-600 rounded-3xl text-white font-semibold text-xl ">
            New Collections
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
