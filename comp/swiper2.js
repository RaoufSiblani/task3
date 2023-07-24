import React, { useRef, useState, useEffect } from 'react';
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
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsLargeScreen(window.innerWidth >= 1740);
      setIsSmallScreen(window.innerWidth >= 1020);
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const slidesPerView = isLargeScreen ? 2.7 : 1.4;
  const slidesToShow = isSmallScreen ? slidesPerView : 1;


  return (
    <Swiper slidesPerView={slidesToShow} spaceBetween={40}>
      {widgetData.map((widget, index) => (
        <SwiperSlide key={index}>
          <Wid3
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
