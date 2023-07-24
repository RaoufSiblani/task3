const Wid3 = ({ imageSrc, heading, company }) => {
  return (
    <div className="bg-white rounded-xl lg:w-[580px] lg:min-h-[600px] w-full min-h-[550px] pl-10 lg:pr-12 pr-5 flex flex-col">
      <img src={imageSrc} className="h-20 w-20 flex mt-10" />
      <h2 className="font-bold text-xl lg:text-3xl flex pt-10">{heading}</h2>
      <h3 className="font-bold text-base lg:text-xl text-gray-500 flex pt-5 pb-10">{company}</h3>
      <p className="text-left text-sm lg:text-base text-textgray flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
        orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique 
        auctor sit amet at turpis.</p>
      <div className="flex my-10">
        <div className="bg-backgray flex items-center mr-2 p-2 rounded-xl">
          <img src="/images/location.png" className="h-8 w-7 mr-3"/>
          <p className="text-sm lg:text-base">San Fransisco, CA</p>
        </div>
        <div className="bg-backgray flex items-center mr-2 p-2 rounded-xl">
          <img src="/images/bag.png" className="w-7 h-8 mr-3" />
          <p className="text-sm lg:text-base">Full Time</p>
        </div>
      </div>
      <p className="text-maingreen text-xl lg:text-2xl pb-2">Apply Now &gt;</p>
    </div>
  );
};

export default Wid3;
