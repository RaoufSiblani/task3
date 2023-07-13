import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Wid2 from './widget2';

const widgetData = [
    { imageSrc: "/images/cata1.png", heading: "Design and Development" },
    { imageSrc: "/images/cata2.png", heading: "Accounting and Finance" },
    { imageSrc: "/images/cata3.png", heading: "Bank Institution" },
    { imageSrc: "/images/cata4.png", heading: "Product Management" },
    { imageSrc: "/images/cata5.png", heading: "Customer Support" },
  ];
  const Swiper1 = () => {
  return (
      <Swiper
        slidesPerView={4.2}
        spaceBetween={40}
        centeredSlides={false}
      >
         {widgetData.map((widget, index) => (
            <SwiperSlide>
          <Wid2
            key={index}
            imageSrc={widget.imageSrc}
            heading={widget.heading}
          />
          </SwiperSlide>
         ))}
      </Swiper>
  );
};

export default Swiper1;