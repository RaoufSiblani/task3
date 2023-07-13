import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Wid3 from './widget3';

const widgetData = [
    { imageSrc: "/images/job1.png", heading: "UI/UX Designer", company: "Dimension Studio" },
    { imageSrc: "/images/job2.png", heading: "Full Stack Developer", company: "Alpander"  },
    { imageSrc: "/images/job3.png", heading: "Product Designer", company: "XReact Tech" }
  ];

const Swiper2 = () => {
  return (
      <Swiper
        slidesPerView={2.7}
        spaceBetween={40}
        centeredSlides={false}
      >
         {widgetData.map((widget, index) => (
            <SwiperSlide>
          <Wid3
            key={index}
            imageSrc={widget.imageSrc} 
            heading={widget.heading} 
            company={widget.company}
          />
          </SwiperSlide>
         ))}
      </Swiper>
  );
};

export default Swiper2;
