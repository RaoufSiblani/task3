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
  const [isMidScreen, setIsMidScreen] = useState(false);
  useEffect(() => {
    const checkWindowSize = () => {
      setIsLargeScreen(window.innerWidth >= 1840);
      setIsMidScreen(window.innerWidth >= 1560);
      setIsSmallScreen(window.innerWidth >= 1020);
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const slidesPerView = isLargeScreen ? 2.7 : 2.3;
  const SlidesOnScreen = isMidScreen ? slidesPerView :1.7;
  const slidesToShow = isSmallScreen ? SlidesOnScreen : 1;


  return (
    <div  className="lg:py-5">
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
    </div>
  );
};

export default Swiper2;
