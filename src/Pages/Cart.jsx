import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const ecommerce = useSelector((state) => state.ecommerce);

  const isPresentInCart = (id) => {
    for (let i = 0; i < ecommerce.cart.length; i++) {
      if (ecommerce.cart[i] === id) {
        return true;
      }
    }
    return false;
  };
  console.log(ecommerce);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ecommerce.product ? (
        ecommerce.product.map((item) => {
          return isPresentInCart(item.id) ? (
            <div
              className="item-box px-2 py-1 shadow-lg flex justify-center items-center flex-col"
              key={item.id}
            >
              <div className="img-box h-56 w-52">
                <img
                  src={item.images[0]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="title">{item.title}</p>
              <p className="price">${item.price}</p>
              <div className="flex justify-between gap-4 ">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Wishlist
                </button>
                <button className="bg-black text-white  px-4 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            null
          );
        })
      ) : (
        <div>No product added yet</div>
      )}
    </div>
  );
};

export default Cart;
