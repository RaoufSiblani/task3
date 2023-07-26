const Section6 = () => {
    return (
        <div className="lg:px-32 px-4 pb-12 lg:pb-28 items-center"> 
        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 mt-10 ">
            <h2 className="font-bold text-2xl mb-10 leading-tight text-center lg:text-left  lg:text-5xl">People's Feedbck about JobNow!</h2>
            <p className="text-lg lg:text-2xl text-textgray text-center lg:text-left lg:mb-16 mb-8 lg:pr-28">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
          orci euismod vestibulum vitae ut ex.
        </p>
        <p className="text-xl lg:text-3xl  text-center lg:text-left  lg:pr-28">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non
          orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique
          auctor sit amet at turpis."
        </p>
        <div className="hidden lg:block lg:pr-28">
            <h3 className="text-xl font-bold lg:text-3xl  text-center lg:text-left mt-16">Brown Garcia</h3>
            <p className="text-lg lg:text-2xl text-textgray text-center lg:text-left mt-10 ">Full Stack Developer in XReact Tech</p>
            <div class="flex  items-center my-5">
    <img src="/images/arow.png" class="bg-textgray w-10 lg:w-16 rounded-full transform rotate-180 mx-3 hover:bg-maingreen" />
    <img src="/images/arow.png" class="bg-textgray w-10 lg:w-16 rounded-full mx-3 hover:bg-maingreen" />
</div>

            </div>
        </div>
            <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-24">
                <img src="/images/placeholder6.png" className=" w-5/6 mx-auto rounded-xl max-w-xl" />
            </div>
            <div className="col-span-12 lg:hidden">
            <h3 className="text-xl font-bold lg:text-3xl  text-center lg:text-left mt-10">Brown Garcia</h3>
            <p className="text-lg lg:text-2xl text-textgray text-center lg:text-left mt-10 ">Full Stack Developer in XReact Tech</p>
            <div class="flex justify-center items-center my-5">
    <img src="/images/arow.png" class="bg-textgray w-10 lg:w-16 rounded-full transform rotate-180 mx-3 hover:bg-maingreen" />
    <img src="/images/arow.png" class="bg-textgray w-10 lg:w-16 rounded-full mx-3 hover:bg-maingreen" />
</div>

            </div>
        </div>
        </div>
        );
    };
    
    export default Section6;