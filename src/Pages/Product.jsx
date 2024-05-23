import React, { useState } from "react";
import { useEffect } from "react";
import { add } from "./strTwo/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product))
  };

  useEffect(() => {
    const fetchP = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchP();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          className="item-box px-2 py-1 shadow-lg flex justify-center items-center flex-col"
          key={product.id}
        >
          <img className="img-box h-56 w-52" src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h4> $ {product.price}</h4>
          <h4>{product.rating.count.rate}</h4>
          <button
            className="bg-black text-white  px-4 py-2 rounded-lg"
            onClick={() => handleAdd(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
