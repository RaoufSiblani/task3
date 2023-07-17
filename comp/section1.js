import NavBar from "@/comp/nav";

const Section1 = () => {
  return (
    <div className="mb-auto font-poppins">
      <div className="w-full lg:absolute">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-7 bg-backgray lg:min-h-[925px] justify-center flex flex-col lg:pl-32 px-8 items-center lg:items-start">
          <h2 className=" text-center font-bold text-4xl lg:text-5xl mt-10 lg:text-left">Search, Find, & Apply</h2>
          <p className="text-center text-lg lg:text-2xl w-9/12 my-14 lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
            lectus tristique auctor sit amet at turpis.
          </p>
        
          <form className="bg-white rounded-xl w-full lg:w-11/12 flex items-center p-2 lg:p-6 mt-6 mb-6 lg:mb-0 container">
  <div className="flex items-center lg:min-h-[60px] min-h-[30px] bg-lightgray rounded-md flex-grow mr-2 lg:mr-6">
    <div className="p-2 lg:p-0">
      <img
        className="h-5\4 w-4 lg:h-6 lg:w-6 bg-center bg-no-repeat"
        src="/images/search.png"
        alt="Search Icon"
      />
    </div>
    <input
      type="text"
      className="pl-2 lg:pl-3 bg-transparent text-black text-sm lg:text-xl flex-grow outline-none"
      placeholder="Job title or keyword"
    />
  </div>
  <div className="flex items-center lg:min-h-[60px] min-h-[40px] bg-lightgray rounded-md flex-grow ml-2 lg:ml-6">
    <div className="p-2 lg:p-0">
      <img
        className="h-4 w-4 lg:h-6 lg:w-6 bg-center bg-no-repeat"
        src="/images/location.png"
        alt="Location Icon"
      />
    </div>
    <select className="pl-2 lg:pl-3 bg-transparent text-black text-sm lg:text-xl flex-grow focus:outline-none">
      <option value="">Location</option>
      <option value="Beirut">Beirut</option>
      <option value="Baalbeck">Baalbeck</option>
      <option value="Zahlee">Zahlee</option>
      <option value="Tripoli">Tripoli</option>
    </select>
  </div>
  <button
    type="submit"
    className="bg-maingreen text-white font-bold text-sm lg:text-xl ml-2 lg:ml-6 px-4 lg:px-9 py-2 lg:py-3 rounded-xl"
  >
    Search
  </button>
</form>

        </div>
        <div className="col-span-1 lg:col-span-5 bg-backgray lg:min-h-[925px]">
          <div className="bg-maingreen lg:rounded-bl-500 h-full py-10 lg:py-0 flex flex-col justify-center">
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
