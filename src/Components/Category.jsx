import React from "react";
import { useNavigate } from "react-router";
import product from "./../../Assets/product_14.png";
import meng from "./../../Assets/meng.png";
import msnea from "./../../Assets/msnea.png";
import mtop from "./../../Assets/mtop.png";
import womg from "./../../Assets/womg.png";
import womt from "./../../Assets/womt.png";
import womb from "./../../Assets/womb.png";
import womsnea from "./../../Assets/womsnea.png";
import mdm from "./../../Assets/mdm.png";

const Category = () => {
  const Navigate = useNavigate();
  const NavigateToMen = () => {
    Navigate("/men");
  };
  const NavigateToWomen = () => {
    Navigate("/women");
  };
  return (
    <div className=" w-full flex flex-col gap-8 px-20 py-12">
      <div className="w-full flex justify-around items-center">
        <div
          className="flex flex-col gap-1 w-[15.188rem] h-[19.25rem] "
          onClick={NavigateToMen}
        >
          <div className="flex flex-col items-center gap-4">
            <img
              className="object-cover hover:scale-105 transition duration-300"
              src={mtop}
              alt="img"
            />
            <p>MEN TOP-WEAR</p>
          </div>
        </div>
        <div
          className="flex flex-col gap-1 w-[15.188rem] h-[19.25rem] px-3"
          onClick={NavigateToMen}
        >
          <div className="flex flex-col items-center gap-4">
            <img
              className="object-cover hover:scale-105 transition duration-300"
              src={mdm}
              alt="img"
            />
            <p>MEN BOTTOM-WEAR</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center w-[15.188rem] h-[19.25rem]  ">
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={msnea}
            alt="img"
          />
          <p>MEN FOOT-WEAR</p>
        </div>
        <div className="flex flex-col gap-6 items-center w-[15.188rem] h-[19.25rem]  ">
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={meng}
            alt="img"
          />
          <p>MEN GROOMING</p>
        </div>
        <div className="flex flex-col gap-6 items-center w-[15.188rem] h-[19.25rem]  ">
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={meng}
            alt="img"
          />
          <p>MEN GROOMING</p>
        </div>
      </div>
      <div className="w-full flex justify-around items-center ">
        <div
          className="flex flex-col  gap-6 items-center w-[15.188rem] h-[19.25rem]  "
          onClick={NavigateToWomen}
        >
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={womt}
            alt="img"
          />
          <p> WOMEN TOP-WEAR</p>
        </div>
        <div className="flex flex-col  gap-6 items-center w-[15.188rem] h-[19.25rem] ">
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={womb}
            alt="img"
          />
          <p> WOMEN BOTTOM-WEAR</p>
        </div>
        <div className="flex flex-col gap-6 items-center w-[15.188rem] h-[19.25rem] ] ">
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={womsnea}
            alt="img"
          />
          <p> WOMEN FOOT-WEAR</p>
        </div>
        <div className="flex flex-col  gap-6 items-center w-[15.188rem] h-[19.25rem] ">
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={womb}
            alt="img"
          />
          <p> WOMEN BOTTOM-WEAR</p>
        </div>
        <div className="flex flex-col  gap-6 items-center w-[15.188rem] h-[19.25rem] ">
          <img
            className="object-cover hover:scale-105 transition duration-300"
            src={womg}
            alt="img"
          />
          <p> WOMEN MAKE-UP</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
