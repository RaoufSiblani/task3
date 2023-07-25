const Section6 = () => {
    return (
        <div className="lg:px-32 px-4 pb-12 lg:pb-28"> 
        <h2 className="font-bold text-2xl mt-10 leading-tight text-center lg:text-left  lg:text-5xl">People's Feedbck about JobNow!</h2>
        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 mt-10 lg:pr-28">
            <p className="text-lg lg:text-2xl text-textgray text-center lg:text-left lg:mb-16 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
          orci euismod vestibulum vitae ut ex.
        </p>
        <p className="text-xl lg:text-3xl  text-center lg:text-left  ">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
          orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
          auctor sit amet at turpis."
        </p>
        <div className="hidden lg:block">
            <h3 className="text-xl font-bold lg:text-3xl  text-center lg:text-left mt-16">Brown Garcia</h3>
            <p className="text-lg lg:text-2xl text-textgray text-center lg:text-left mt-10 ">Full Stack Developer in XReact Tech</p>
            <div className="flex justify-center items-center lg:justify-start my-5">
                <img src="/images/arow.png" className=" bg-textgray rounded-full transform rotate-180 mx-3"/>
                <img src="/images/arow.png" className=" bg-maingreen rounded-full mx-3"/>
            </div>
            </div>
        </div>
            <div className="col-span-12 lg:col-span-5 mt-20 lg:mt-0">
                <img src="/images/placeholder6.png" className=" w-5/6 mx-auto rounded-xl" />
            </div>
            <div className="col-span-12 lg:hidden">
            <h3 className="text-xl font-bold lg:text-3xl  text-center lg:text-left mt-10">Brown Garcia</h3>
            <p className="text-lg lg:text-2xl text-textgray text-center lg:text-left mt-10 ">Full Stack Developer in XReact Tech</p>
            <div className="flex justify-center items-center my-5">
                <img src="/images/arow.png" className=" bg-textgray rounded-full transform rotate-180 mx-3"/>
                <img src="/images/arow.png" className=" bg-maingreen rounded-full mx-3"/>
            </div>
            </div>
        </div>
        </div>
        );
    };
    
    export default Section6;