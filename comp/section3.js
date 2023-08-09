const Section3 = () => {
  return (
    <div className="px-8 lg:py-20 py-5 grid grid-cols-12 items-center justify-center 2xl:container 2xl:mx-auto">
      <div className=" lg:col-span-5 col-span-12">
      <img src="/images/placeholder.png" className="w-full rounded-xl mx-auto max-w-xl" alt="Placeholder" />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:ml-20 lg:mr-20 lg:col-span-7 col-span-12">
        <h2 className="font-bold text-2xl lg:text-5xl mt-10 leading-tight text-center lg:text-left">We will help you to become an employee in your dream company</h2>
        <div className="my-10">
          <p className="text-xl lg:text-3xl text-textgray text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
            orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
            auctor sit amet at turpis.
          </p>
        </div>
        <div className="flex flex-grow">
        <button className="bg-white text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-xl lg:text-2xl items-center hover:bg-maingreen hover:text-white hover:border-white transition-colors">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
