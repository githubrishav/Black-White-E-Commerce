import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./strTwo/cartSlice";
import al from "./../../Assets/al.png";

const Cart = () => {
  const counter = useSelector((state) => state.cart);

  const productData = useSelector((state) => state.cart);

  const dis = useDispatch();
  const handleRemove = (product) => {
    dis(remove(product));
  };

  return (
    <div>
      <div className=" w-full h-12 ml-12  mt-6 flex items-center ">
        <div className="flex text-center gap-12">
          <img className="w-[1rem]" src={al} alt="backarrow" />
          <p className="text-gray-300 hover:text-black hover:cursor-pointer">
            Continue Shopping
          </p>
        </div>
      </div>
      <div className="border 1px border-gray-300 ml-12 mr-12 mt-1"></div>
      <div className="ml-12 mt-8">
        <p> {`You have ${counter.cart} Items in Cart`}</p>
      </div>
      {productData.map((product) => (
        <div className="w-full  py-12 px-12">
          <div className="flex items-center border justify-between border-black gap-3">
            <img className="w-[4rem]" src={product.image} alt="" />
            <h5 className="pr-6 w-full">{product.title}</h5>
            <h5 className="pr-6  w-full">$ {product.price}</h5>
            <div className="pr-12">
              <button
                className="bg-black text-white  px-4 py-2 rounded-lg "
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
