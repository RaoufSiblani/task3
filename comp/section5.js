import React from "react";
import Swiper2 from "./swiper2";

const Section5 = () => {
  
  const widgetData = [
    { imageSrc: "/images/job1.png", heading: "UI/UX Designer", company: "Dimension Studio" },
    { imageSrc: "/images/job2.png", heading: "Full Stack Developer", company: "Alpander"  },
    { imageSrc: "/images/job3.png", heading: "Product Designer", company: "XReact Tech" }
  ];

  return (
    <div className="items-center  lg:py-28 py-12">
      <div className="px-4 ">
      <h2 className="font-bold text-4xl lg:text-5xl mt-10 leading-tight text-center lg:px-32">Recently Added Jobs</h2>
        <p className="text-lg lg:text-3xl text-textgray text-center mt-10 px-16 lg:px-64">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
          orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
          auctor sit amet at turpis.
        </p>
        <div className="w-11/12 lg:mx-auto">
        <Swiper2/>
        </div>
        </div>
      <div className="flex justify-center w-full ">
      <button className="text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-xl lg:text-2xl hover:bg-maingreen hover:text-white hover:border-white transition-colors">
          <span>View More</span>
        </button>
      </div>
      
    </div>
  );
};

export default Section5;
