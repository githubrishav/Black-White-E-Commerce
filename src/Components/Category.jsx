import React from "react";
import { useNavigate } from "react-router";
import product from "./../../Assets/product_14.png";

const Category = () => {
  const Navigate = useNavigate();
  const NavigateToMen = () => {
    Navigate("/men");
  };
  return (
    <div className=" w-full flex flex-col gap-56 px-16 py-12">
      <div className="w-full flex items-center justify-between">
        <div
          className="flex flex-col gap-1 w-[16rem] h-[30vh] "
          onClick={NavigateToMen}>
          <div className="flex flex-col items-center">
            <img className="object-cover" src={product} alt="img" />
            <p>MEN TOP-WEAR</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-[16rem] h-[30vh] " onClick={NavigateToMen}>
          <div className="flex flex-col items-center">
            <img className="object-cover" src={product} alt="img" />
            <p>MEN BOTTOM-WEAR</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-[16rem] h-[30vh] ">
          <img className="object-cover" src={product} alt="img" />
          <p>MEN FOOT-WEAR</p>
        </div>
        <div className="flex flex-col gap-1 w-[16rem] h-[30vh] ">
          <img className="object-cover" src={product} alt="img" />
          <p>MEN GROOMING</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between ">
        <div className="flex flex-col gap-1 w-[16rem] h-[30vh] ">
          <img className="object-cover" src={product} alt="img" />
          <p> WOMEN TOP-WEAR</p>
        </div>
        <div className="flex flex-col gap-1 w-[16rem] h-[30vh]">
          <img className="object-cover" src={product} alt="img" />
          <p> WOMEN BOTTOM-WEAR</p>
        </div>
        <div className="flex flex-col gap-1 w-[16rem] h-[30vh] ">
          <img className="object-cover" src={product} alt="img" />
          <p> WOMEN FOOT-WEAR</p>
        </div>
        <div className="flex flex-col gap-1 w-[16rem] h-[30vh]">
          <img className="object-cover" src={product} alt="img" />
          <p> WOMEN MAKE-UP</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
