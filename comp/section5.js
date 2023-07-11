import Wid3 from "./widget3";
import { useRef, useState } from "react";

const Section5 = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleSwipeStart = (clientX) => {
    setStartX(clientX);
    setIsSwiping(true);
  };

  const handleSwipeMove = (clientX) => {
    if (!isSwiping) return;

    const delta = clientX - startX;
    setScrollPosition(scrollPosition + delta);
    setStartX(clientX);
  };

  const handleSwipeEnd = () => {
    setIsSwiping(false);
  };

  const handleMouseDown = (event) => {
    if (event.target === containerRef.current) {
      setStartX(event.clientX);
      setIsSwiping(true);
    }
  };

  const handleMouseMove = (event) => {
    handleSwipeMove(event.clientX);
  };

  const handleMouseUp = () => {
    handleSwipeEnd();
  };

  const handleMouseLeave = () => {
    handleSwipeEnd();
  };

  const widgetData = [
    { imageSrc: "/images/job1.png", heading: "UI/UX Designer", company: "Dimension Studio" },
    { imageSrc: "/images/job2.png", heading: "Full Stact Developer", company: "Alpander"  },
    { imageSrc: "/images/job3.png", heading: "Product Designes", company: "XReact Tech" }
  ];

  return (
    <div className="items-center pl-16 py-28 lg:pl-32">
      <h2 className="font-bold text-5xl mt-10 leading-tight text-center pr-16 lg:pr-32">Recently Added Jobs</h2>
        <p className="text-3xl text-textgray text-center mt-10 pr-16 lg:pr-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
          orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
          auctor sit amet at turpis.
        </p>
      
      <div
        className="overflow-x-scroll overflow-y-hidden flex-none scrolling-wrapper"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={(event) => handleSwipeStart(event.touches[0].clientX)}
        onTouchMove={(event) => handleSwipeMove(event.touches[0].clientX)}
        onTouchEnd={handleSwipeEnd}
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        <div className="flex flex-nowrap py-16">
          {widgetData.map((data, index) => (
            <div className="flex-none" key={index}>
              <Wid3 imageSrc={data.imageSrc} heading={data.heading} company={data.company} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pr-16 lg:pr-32">
        <button className="text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-2xl">
          <span>View More</span>
        </button>
      </div>
      
    </div>
  );
};

export default Section5;
