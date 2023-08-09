import React from "react";
import Swiper1 from "./swiper1";

const Section4 = () => {
  
  return (
    <div className="bg-maingreen bg-opacity-5">
      <div className="items-center py-10 2xl:container 2xl:mx-auto">
      <h2 className="font-bold text-3xl lg:text-5xl mt-10 leading-tight text-center mx-16 lg:mx-32">Popular Job Categories</h2>
      <p className="lg:text-3xl text-lg text-textgray text-center mt-10 mx-16 lg:mx-32">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
        orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
        auctor sit amet at turpis.
      </p>
      <div className="lg:w-11/12 w-8/12 mx-auto">
      <Swiper1/>
      </div>
      <div className="flex justify-center mx-16 lg:mx-32">
      <button className="bg-maingreen bg-opacity-5 text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-2xl hover:bg-maingreen hover:text-white transition-colors">
          <span>View More</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Section4;
