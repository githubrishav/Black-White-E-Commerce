import React from "react";
import { useState } from "react";

const Carousel = ({ children: slidee }) => {

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current)=> (current === 0 ? slidee.length-1 : current-1));
  const next = () => setCurrent((current)=> (current === slidee.length - 1 ? 0 : current + 1));

  return (    <>
      <div className="overflow-hidden relative">
        <div className="flex w-full items-center gap-8 justify-center transition-transform ease-out duration-500 " style={{transform: `translateX(-${current*100}%)`}}>
          {slidee}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <button onClick={prev} >prev</button>
        <button onClick={next} >next</button>
      </div>
    </>
  );
};

export default Carousel;
