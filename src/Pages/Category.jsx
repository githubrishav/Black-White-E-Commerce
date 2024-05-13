import axios from "axios";
import React, { useEffect, useState } from "react";
import all_product from "../../Assets/all_product";

const Category = () => {
  const [udata, setUdata] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((response) => {
        // console.log(response);
        setUdata(response.data);
      });
  }, []);
  console.log(udata);
  return (
    <div>
      {all_product.map((data) => {
        return (
          <div className="flex flex-row justify-between items-center" key={data.id}>
            <button className="">
              {data.jewelery}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
