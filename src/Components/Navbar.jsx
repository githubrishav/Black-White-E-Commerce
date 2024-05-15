import React from "react";
import logo from "./../../Assets/logo.png";
import cart from "./../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import wishlist from "./../../Assets/wishlist.png";

const Navbar = () => {
  return (
    // BODY
    <div className="w-full bg-gradient-to-b from-pink-300  ">
      {/* Navbar here */}
      <div className="w-full h-[6rem] flex flex-col justify-center items-center shadow-3xl sticky z-10 ">
        {/* navbar starts */}

        <div className="flex  justify-between w-full">
          {/* Left Side */}
          <div className=" w-[8rem] flex justify-start gap-2  md:w-[24rem] md:pl-24 ">
            <img
              src={logo}
              className=" w-[2rem] h-[2rem] pl-2 md:w-[6rem] md:h-[4.5rem] "
              alt="logo"
            />
            <p className="font-semibold text-xs pt-2 md:font-semibold md:items-center md:text-xl md:pt-5 ">
              BLACK&WHITE
            </p>
          </div>

          <div className="hidden md:block md:w-[24rem] md:flex md:justify-around md:items-center ">
            <Link to="/" onClick={""}>
              HOME
            </Link>
            <Link to="/men">MEN</Link>
            <Link to="/women">WOMEN</Link>
            <Link to="/kids">KID'S</Link>
          </div>

          {/* RIGHT HERE */}

          <div className="flex justify-evenly pt-2 md:pt-0 w-[8rem] md:w-80 md:h-[4.5rem] items-center bg- ">
            <div className="w-[1rem] h-[1rem] md:hidden">
              <img src={cart} alt="" />
            </div>

            <Link to="/login">
              <button className="border hidden md:block border-black text-black px-12 py-2 rounded-3xl items-end hover:bg-gray-100">
                LOGIN
              </button>
            </Link>
            <Link to ="/wishlist">
              <div className="w-[1rem] h-[1rem]  md:w-8 md:h-8">
                <img src={wishlist} alt="" />
              </div>
            </Link>
            <Link to="/cart">
              <div className="w-[1rem] h-[1rem] md:w-8 md:h-8">
                <img src={cart} alt="" />
                <div className=" flex -my-10 justify-end w-12  h-8 pr-2 pt-1 ">
                  <p className=" md:block text-white bg-red-600 md:h-5 md:w-5 flex items-center justify-center rounded-2xl">
                    0
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* SEARCH BAR AND ICONS HERE */}

        <div className=" flex w-full px-2 ">
          <input
            type="text"
            className="flex w-full md:hidden border border-black rounded-xl  px-4"
            placeholder="helloooooo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
