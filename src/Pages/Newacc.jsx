import React from "react";
import gg from "./../../Assets/gg.svg";
import { Link } from "react-router-dom";

const Newacc = () => {
  const handleSub = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <div>
      <div className=" ">
        <div className="flex justify-center items-center h-screen w-full  ">
          <form action="" onSubmit={handleSub}>
            <div className=" shadow-2xl w-[56rem]  bg-gradient-to-b from-blue-100 rounded-md ">
              <h3 className=" pt-3 text-center font-bold text-4xl">SIGN-UP</h3>
              <p className="text-xl font-medium ml-[12rem] mt-[2rem]">Create Your Account </p>
              <div className=" flex flex-col gap-12 justify-center items-center mt-4">
                <input
                  className="rounded-sm border border-gray-400 px-4 py-2  w-[20rem]"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="rounded-sm border border-gray-400 px-4 py-2  w-[20rem]"
                  type="text"
                  placeholder="Enter your email / phone"
                />
                <input
                  className="rounded-sm border border-gray-400 px-4 py-2  w-[20rem]"
                  type="text"
                  placeholder="Password"
                />
                <input
                  className="rounded-sm border border-gray-400 px-4 py-2  w-[20rem]"
                  type="text"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center justify-between mt-[2rem] w-[22rem] ml-[18rem]">
                <div className="flex justify-center items-center gap-2">
                  <input  type="checkbox" />
                  <p> I accept the Terms of Service & Privacy Policy </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <button
                  type="submit"
                  className=" rounded-md mt-8 px-16 py-2  bg-black text-white"
                >
                  Sign Up
                </button>
                <div className="bg-white py-3 px-6 flex gap-8 items-center mb-[2rem]">
                <p>
                Already have an Account ? {' '} 
                <Link to={'/login'} className="text-blue-800">
                   Log In
                </Link>
              </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newacc;
