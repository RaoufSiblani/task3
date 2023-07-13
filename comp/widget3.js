const Wid3 = ({ imageSrc, heading, company }) => {
  return (
    <div className="bg-white rounded-xl mr-12 w-[580px] h-[670px] pl-10 pr-12 flex flex-col">
      <img src={imageSrc} className="h-20 w-20 flex mt-10" />
      <h2 className="font-bold text-2xl lg:text-3xl flex pt-10">{heading}</h2>
      <h3 className="font-bold text-lg lg:text-xl text-gray-500 flex pt-5 pb-10">{company}</h3>
      <p className="text-left text-sm lg:text-base text-textgray flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
        orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique 
        auctor sit amet at turpis.</p>
      <div className="flex my-10">
        <div className="bg-backgray flex items-center mr-2 p-2 rounded-xl">
          <img src="/images/location.png" className="h-8 w-7 mr-3"/>
          <p className="text-lg lg:text-xl">San Fransisco, CA</p>
        </div>
        <div className="bg-backgray flex items-center mr-2 p-2 rounded-xl">
          <img src="/images/bag.png" className="w-7 h-8 mr-3" />
          <p className="text-lg lg:text-xl">Full Time</p>
        </div>
      </div>
      <p className="text-maingreen text-3xl lg:text-4xl">Apply Now &gt;</p>
    </div>
  );
};

export default Wid3;
