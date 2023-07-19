const Wid2 = ({ imageSrc, heading }) => {
  return (
    <div className="bg-white rounded-xl lg:w-80 w-60 h-60 lg:h-80 px-9 flex flex-col items-center justify-center">
  <img src={imageSrc} className="lg:h-20 lg:w-20 h-10 w-10 flex mt-10 mx-auto" />
  <h2 className="font-bold text-center lg:text-xl text-base flex py-8">{heading}</h2>
  <p className="lg:text-left text-center lg:text-base text-sm text-textgray flex mb-10">350 Job Vacancy</p>
</div>
  );
};

export default Wid2;
