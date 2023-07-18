const Wid2 = ({ imageSrc, heading }) => {
  return (
    <div className="bg-white rounded-xl lg:max-w-1/4  h-80 px-9 flex flex-col">
      <img src={imageSrc} className="h-20 w-20 flex mt-10" />
      <h2 className="font-bold text-xl flex py-8 ">{heading}</h2>
      <p className="text-left text-base text-textgray flex">350 Job Vacancy</p>
    </div>
  );
};

export default Wid2;
