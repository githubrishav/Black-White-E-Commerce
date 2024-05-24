import React from "react";
import prodd from "./../../Assets/prodd.png";
import proddd from "./../../Assets/proddd.png";
import Carousel from "../Hero/Carousel";

const slidee = [
  prodd,
  proddd,
  "https://img.freepik.com/premium-vector/raksha-bandhan-big-sale-banner-header-design-with-floral-rakhi-purple-yellow-color_1302-26596.jpg?w=1380",
  "https://img.freepik.com/premium-vector/vector-illustration-happy-dussehra-sale-banner-template_181203-10155.jpg?w=1380",
];

const Slides = () => {
  return (
    <div>
      <Carousel>
        {slidee.map((pic) => (
          <img src={pic} alt="" />
        ))}
      </Carousel>
    </div>
  );
};

export default Slides;
