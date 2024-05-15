import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../store/productSlice";
import { addToCart } from "../store/productSlice";
const Mens = () => {
  const [udata, setUdata] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
      axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
      setUdata(response.data);
      dispatch(addToProduct(response.data));
    });
  }, []);

  const AddToCart = (id)=>{
    dispatch(addToCart(id));
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {udata 
        ?udata.map((item) => {
        return (
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
              <button className="bg-black text-white  px-4 py-2 rounded-lg"
              onClick={()=>AddToCart(item.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })
      :null
    }
    </div>
  );
};
export default Mens;
