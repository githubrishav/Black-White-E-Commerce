import React from "react";
import ig from "./../../Assets/ig.png";
import wt from "./../../Assets/wt.png";
import yt from "./../../Assets/yt.png";
import twt from "./../../Assets/twt.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <hr />
      <div className="">
        <div className="flex justify-evenly my-16 text-base ">
          <div className="flex flex-col gap-8">
            <p className="font-medium">ONLINE SHOPPING</p>
            <Link className="text-gray-500"> Men </Link>
            <Link className="text-gray-500"> Women </Link>
            <Link className="text-gray-500"> Kids </Link>
            <Link className="text-gray-500">Beauty </Link>
            <Link className="text-gray-500"> Gift Cards </Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-medium">OUR COMPANY</p>
            <Link className="text-gray-500"> Blog </Link>
            <Link className="text-gray-500"> Career </Link>
            <Link className="text-gray-500"> Site Map </Link>
            <Link className="text-gray-500">Corporate Information </Link>
            <Link className="text-gray-500"> T&C </Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-medium">CUSTOMER POLICIES</p>
            <Link className="text-gray-500"> Terms of Use </Link>
            <Link className="text-gray-500"> Shipping </Link>
            <Link className="text-gray-500"> Grievance Offers </Link>
            <Link className="text-gray-500">Returns </Link>
            <Link className="text-gray-500"> Cancellations </Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-medium"> KEEP IN TOUCH </p>
            <div className="flex w-6 gap-4 ">
              <img src={ig} alt="" />
              <img src={twt} alt="" />
              <img src={wt} alt="" />
              <img src={yt} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-44 font-medium gap-4">
        <p>POPULAR SEARCHES</p>
        <div className="border 1px border-gray-300 w-[64rem]"></div>
      </div>
      <div className=" mt-6 flex items-center justify-center ml-38 flex-wrap font-medium gap-4 ">
        <Link className="text-gray-500"> | Makeup</Link>
        <Link className="text-gray-500"> | Dresses for Girls </Link>
        <Link className="text-gray-500"> | Mens Grooming </Link>
        <Link className="text-gray-500"> | Kids Collection </Link>
        <Link className="text-gray-500"> | Sandals </Link>
        <Link className="text-gray-500"> | Terms of Use </Link>
        <Link className="text-gray-500"> | T-Shirt for Men </Link>
        <Link className="text-gray-500"> | Punjabi Suits </Link>
        <Link className="text-gray-500"> | Watches </Link>
        <div className="flex w-full ml-60  font-medium gap-8">
          <Link className="text-gray-500"> | Earrings </Link>
          <Link className="text-gray-500"> | Nike </Link>
          <Link className="text-gray-500"> | Goggles </Link>
          <Link className="text-gray-500"> | Chinos </Link>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Footer;
