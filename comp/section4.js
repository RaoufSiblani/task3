import React from "react";
import Swiper1 from "./swiper1";

const Section4 = () => {
  
  return (
    <div className="items-center py-28  bg-maingreen bg-opacity-5">
      <h2 className="font-bold text-5xl mt-10 leading-tight text-center mx-16 lg:mx-32">Popular Job Categories</h2>
      <p className="text-3xl text-textgray text-center mt-10 mx-16 lg:mx-32">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
        orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
        auctor sit amet at turpis.
      </p>
      <div className="w-11/12 lg:mx-auto ml-36">
      <Swiper1/>
      </div>
      <div className="flex justify-center mx-16 lg:mx-32">
        <button className="bg-maingreen bg-opacity-5 text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-2xl">
          <span>View More</span>
        </button>
      </div>
    </div>
  );
};

export default Section4;
