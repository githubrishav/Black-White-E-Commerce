import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./strTwo/cartSlice";

const Cart = () => {
  const productData = useSelector((state) => state.cart);
  
  const dis = useDispatch();
  const handleRemove = (product) => {
    dis(remove(product));
  };

  return (
    <div>
      {productData.map((product) => (
        <div className="w-full  py-8">
          <div className="flex flex-col gap-8 justify-end">
            <img className="w-[12rem]" src={product.image} alt="" />
            <div className="flex flex-col">
              <h5>{product.title}</h5>
              <h5>$ {product.price}</h5>
            </div>
          </div>
          <div className="flex w-full py-12 pl-4 ">
            <button
              className="bg-black text-white  px-4 py-2 rounded-lg"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
