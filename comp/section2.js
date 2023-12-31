import Wid1 from "./widget1";

const Section2 = () => {
  const data = [
    {
      imageSrc: "/images/how1.png",
      heading: "Register",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    },
    {
      imageSrc: "/images/how2.png",
      heading: "Create a Reume",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    },
    {
      imageSrc: "/images/how3.png",
      heading: "Find Job",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    },
    {
      imageSrc: "/images/how4.png",
      heading: "Apply Job",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    },
  ];

  return (
    <div className="lg:mt-20 mt-5 w-full lg:px-16 px-5 2xl:container 2xl:mx-auto">
      <h2 className="font-bold text-2xl lg:text-4xl mt-10">How it works</h2>

      <div className="flex items-center ">
        <div className="w-full lg:my-14 lg:w-7/12">
          <p className="text-left text-xl lg:text-2xl text-textgray py-6 lg:py-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
            orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
            auctor sit amet at turpis.
          </p>
        </div>
        <div className="hidden justify-end flex-grow lg:flex">
        <button className="bg-white text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-2xl lg:text-3xl items-center hover:bg-maingreen hover:text-white hover:border-white transition-colors">
            <span>Learn More</span>
          </button>
        </div>
      </div>

      <div className="grid gap-9 lg:grid-cols-4 grid-cols-2">
        {data.map((item, index) => (
          <Wid1
            key={index}
            imageSrc={item.imageSrc}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>

      <div className="flex justify-center flex-grow py-5 lg:hidden">
      <button className="bg-white text-maingreen border border-maingreen px-7 py-4 rounded-xl font-bold text-2xl lg:text-3xl items-center hover:bg-maingreen hover:text-white hover:border-white transition-colors">
          <span>Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default Section2;
