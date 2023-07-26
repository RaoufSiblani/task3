import NavBar from "@/comp/nav";

const Section1 = () => {
  return (
    <div className="font-poppins">
      <div className="w-full xl:absolute">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12">
        <div className="col-span-1 xl:col-span-7 xl:bg-backgray bg-lightgray xl:min-h-[825px] justify-center flex flex-col xl:pl-20 px-8 items-center xl:items-start">
          <h2 className=" text-center font-bold text-4xl xl:text-5xl mt-10 xl:text-left">Search, Find, & Apply</h2>
          <p className="text-center text-lg xl:text-2xl w-9/12 my-14 xl:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
            lectus tristique auctor sit amet at turpis.
          </p>
        
          <form >
            <div className="bg-white rounded-xl inline-flex  items-center p-2 xl:p-6 mt-6 mb-6 justify-between ">
  <div className="flex items-center bg-lightgray rounded-md xl:py-3">
    <div className="p-2 xl:p-0">
      <img
        className="h-3 xl:h-5 pl-1 bg-center bg-no-repeat"
        src="/images/search.png"
        alt="Search Icon"
      />
    </div>
    <input
      type="text"
      className="pl-1 xl:pl-3 bg-transparent text-black text-xs xl:text-lg  outline-none"
      placeholder="Job title or keyword"
    />
  </div>
  <div className="flex items-center justify-start bg-lightgray rounded-md lg:mx-2.5 mx-1 xl:py-3">
    <div className="p-2 xl:p-0">
      <img
        className="h-3 xl:h-6 pl-1 bg-center bg-no-repeat"
        src="/images/location.png"
        alt="Location Icon"
      />
    </div>
    <select className="px-1 xl:px-3  bg-transparent text-black text-xs xl:text-xl focus:outline-none">
      <option value="">Location</option>
      <option value="Beirut">Beirut</option>
      <option value="Baalbeck">Baalbeck</option>
      <option value="Zahlee">Zahlee</option>
      <option value="Tripoli">Tripoli</option>
    </select>
  </div>
  <button
    type="submit"
    className="bg-maingreen text-white font-bold text-xs xl:text-xl py-2  xl:py-3 px-2 xl:px-9 rounded-xl "
  >
    Search
  </button>
  </div>
</form>


        </div>
        <div className="col-span-1 xl:col-span-5 bg-backgray xl:min-h-[825px]">
          <div className="bg-maingreen xl:rounded-bl-500 h-full py-10 xl:py-0 flex flex-col justify-center">
            <div className="flex justify-start pl-24 mb-14">
              <img src="/images/top1.png" alt="Image 1" className="transform -rotate-3" />
            </div>
            <div className="flex justify-end pr-24 mb-20">
              <img src="/images/top2.png" alt="Image 2" className="transform rotate-6" />
            </div>
            <div className="flex justify-start pl-20">
              <img src="/images/top3.png" alt="Image 3" className="transform -rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
