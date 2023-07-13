const Wid1 = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="bg-white rounded-xl pl-7 py-12">
      <img src={imageSrc} className="h-14" />
      <h2 className="font-bold text-2xl lg:text-3xl py-5">{heading}</h2>
      <p className="text-left text-sm lg:text-base text-textgray">{paragraph}</p>
    </div>
  );
};

export default Wid1;
