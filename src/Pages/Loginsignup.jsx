import React from "react";
import { Link } from "react-router-dom";
import gg from "./../../Assets/gg.svg";
import { useState } from "react";

const Loginsignup = () => {
  const [email, setEmail] = useState("");
  const [passwod, setPasswod] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <div className=" ">
      <div className="flex justify-center items-center h-screen w-full  ">
        <form action="" onSubmit={handleSubmit}>
          <div className=" shadow-2xl w-[56rem]  bg-gradient-to-b from-blue-100 rounded-md ">
            <h3 className=" pt-3 text-center font-bold text-4xl">LOGIN</h3>
            <div className="flex flex-col gap-12 justify-center items-center mt-20">
              <input
                className="rounded-sm border border-gray-400 px-4 py-2  w-[20rem]"
                type="text"
                placeholder="Enter your username"
              />
              <input
                onChange={(e) => {
                  e.target.value;
                }}
                value={""}
                className="rounded-sm border border-gray-400 px-4 py-2  w-[20rem]"
                type="text"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mt-[2rem] w-[20rem] ml-[18rem]">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <div className="h">
                <Link> Forgotten password? </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <button
                type="submit"
                className=" rounded-md mt-8 px-16 py-2  bg-black text-white"
              >
                Log In
              </button>
              <div className="bg-white py-3 px-6 flex gap-8 items-center ">
                <img src={gg} alt="img" />
               <Link>Log In with your Google account </Link> 
              </div>
              <p className=" mb-[4rem]">
                Don't have an Account ? {' '} 
                <Link to={'/signup'} className="text-blue-800">
                   SignUp
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginsignup;
