import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex xl:px-5 font-poppins items-center xl:py-20 py-8 bg-backgray xl:justify-between xl:bg-transparent 2xl:container ">
      <div className="items-center flex justify-center w-full xl:w-7/12 xl:justify-between">
      <a href="/">
  <img src="/images/logo.png" alt="Logo" className="xl:h-16 h-7" />
</a>
        <a href="#" className="text-black font-semibold text-xl hidden xl:block">Home</a>
        <a href="#" className="text-black font-semibold text-xl hidden xl:block">Job</a>
        <a href="#" className="text-black font-semibold text-xl hidden xl:block">About Us</a>
        <a href="#" className="text-black font-semibold text-xl hidden xl:block pr-4">Contact</a>
      </div>
      
      <div className="items-center hidden xl:flex">
        <a href="#" className="text-white font-semibold text-xl mr-16">Sign In</a>
        <button className="bg-white text-black px-7 py-4 rounded-xl font-bold text-xl inline-flex items-center border border-maingreen hover:bg-maingreen hover:text-white hover:border-white transition-colors">
          <img src="/images/signup.png" className="mr-4 h-8" alt="Sign Up" />
          <span>Create Account</span>
        </button>
        
      </div>
      <div className="absolute right-16 items-center w-[45px] h-[35px] xl:hidden">
      <button onClick={handleToggleMenu} className="flex items-center left-full">
          <img src="/images/bar.png" alt="Menu Icon"/>
        </button>
        </div>
      {isOpen && (
        <div className="absolute top-20 w-full bg-backgray xl:hidden">
          <ul class="flex flex-col items-center space-y-4">
  <li><a href="#" class="text-black font-semibold text-2xl">Home</a></li>
  <li><a href="#" class="text-black font-semibold text-2xl">Job</a></li>
  <li><a href="#" class="text-black font-semibold text-2xl">About Us</a></li>
  <li><a href="#" class="text-black font-semibold text-2xl">Contact</a></li>
  <li><a href="#" class="text-black font-semibold text-2xl">Sign In</a></li>
  <li>
    <button class="bg-white text-black px-7 py-4 rounded-xl font-bold text-xl inline-flex items-center mb-4">
      <img src="/images/signup.png" class="mr-4 h-8" alt="Sign Up" />
      <span>Create Account</span>
    </button>
  </li>
</ul>

        </div>
      )}
    </nav>
  );
};

export default NavBar;
