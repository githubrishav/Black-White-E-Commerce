import React from "react";
import Orange from "./../../Assets/Orange.png";
import Black from ".//../../Assets/Black.png";
import Category from "../Components/Category";
import pppp from "./../../Assets/pppp.png"
import prodd from "./../../Assets/prodd.png"
import Kids from "../Pages/Kids";
import Slides from "./Slides";
import Footer from "../Pages/Footer";
import categ from "./../../Assets/categ.jpg"

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-full shadow-inner-lg  mt-16"
            src={pppp}
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center">
          {/* <img
            className="w-[84rem] h-[44vh]  mt-16 cover"
            src={prodd}
            alt=""
          /> */}
          <Slides/>
        </div>
        <div className="w-full ">
          <img className="flex items-center justify-center w-full" src={categ} alt="" />
          <Category/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Hero;
