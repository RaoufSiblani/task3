const Section3 = () => {
  return (
    <div className="lg:px-16 px-8 lg:my-48 my-10 flex flex-col lg:flex-row items-center justify-center">
      <img src="/images/placeholder.png" className="w-full rounded-xl lg:w-[650px] lg:h-[490px]" alt="Placeholder" />
      <div className="flex flex-col items-center lg:items-start lg:ml-20 lg:mr-32">
        <h2 className="font-bold text-2xl lg:text-5xl mt-10 leading-tight text-center lg:text-left">We will help you to become an employee in your dream company</h2>
        <div className="my-10">
          <p className="text-xl lg:text-3xl text-textgray text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
            orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
            auctor sit amet at turpis.
          </p>
        </div>
        <div className="flex flex-grow">
          <button className="bg-white text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-xl lg:text-2xl items-center">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
