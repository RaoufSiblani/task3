import React, { useRef, useState, useEffect } from 'react';
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
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsLargeScreen(window.innerWidth >= 1400);
      setIsSmallScreen(window.innerWidth >= 1020);
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const slidesPerView = isLargeScreen ? 4.2 : 3;
  const slidesToShow = isSmallScreen ? slidesPerView : 1;

  return (
    <div className="py-10">
      <Swiper slidesPerView={slidesToShow} spaceBetween={80} >
        {widgetData.map((widget, index) => (
          <SwiperSlide key={index}>
            <Wid2
              imageSrc={widget.imageSrc}
              heading={widget.heading}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiper1;
