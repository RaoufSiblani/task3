import NavBar from "@/comp/nav";

const Section1 = () => {
  return (
    <div className="mb-auto">
      <div className="w-full lg:absolute">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-7 bg-backgray lg:min-h-[925px] justify-center flex flex-col lg:pl-32 px-16 items-center lg:items-start">
          <h2 className="font-bold text-4xl sm:text-5xl mt-10">Search, Find, & Apply</h2>
          <p className="text-left text-lg sm:text-2xl w-9/12 my-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
            lectus tristique auctor sit amet at turpis.
          </p>
          <form className="bg-white rounded-xl w-5/6 flex items-center p-6 mt-6 mb-6 lg:mb-0">
            <div className="relative flex items-center flex-grow min-h-[60px]">
              <div
                className="absolute left-2 top-4 h-7 w-7 bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/search.png')`,
                  backgroundSize: "contain",
                  backgroundPosition: "left center",
                }}
              ></div>
              <input
                type="text"
                className="pl-10 bg-lightgray rounded-md w-full h-full placeholder:text-black text-xl sm:text-2xl"
                placeholder="Job title or keyword"
              />
            </div>
            <div className="relative flex items-center flex-grow ml-6 min-h-[60px]">
              <div
                className="absolute left-2 top-4 h-7 w-6 bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/location.png')`,
                  backgroundSize: "contain",
                  backgroundPosition: "left center",
                }}
              ></div>
              <select className="pl-10 bg-lightgray text-black text-xl sm:text-2xl rounded-md w-full h-full">
                <option value="">Location</option>
                <option value="Beirut">Beirut</option>
                <option value="Baalbeck">Baalbeck</option>
                <option value="Zahlee">Zahlee</option>
                <option value="Tripoli">Tripoli</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-maingreen text-white font-bold text-xl sm:text-2xl ml-6 px-9 py-[15px] rounded-xl"
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
