import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex font-poppins items-center lg:px-32 py-20 bg-backgray lg:justify-between lg:bg-transparent">
      <div className="items-center flex justify-center w-full lg:w-auto lg:justify-normal">
        <img src="/images/logo.png" alt="Logo" className="lg:h-16 h-7" />
        <a href="#" className="text-black ml-8 font-semibold text-2xl hidden lg:block">Home</a>
        <a href="#" className="text-black ml-8 font-semibold text-2xl hidden lg:block">Job</a>
        <a href="#" className="text-black ml-8 font-semibold text-2xl hidden lg:block">About Us</a>
        <a href="#" className="text-black ml-8 font-semibold text-2xl hidden lg:block">Contact</a>
      </div>
      
      <div className="items-center hidden lg:flex">
        <a href="#" className="text-white font-semibold text-xl mr-16">Sign In</a>
        <button className="bg-white text-black px-7 py-4 rounded-xl font-bold text-xl inline-flex items-center">
          <img src="/images/signup.png" className="mr-4 h-8" alt="Sign Up" />
          <span>Create Account</span>
        </button>
        
      </div>
      <div className="absolute right-16 items-center w-[45px] h-[35px] lg:hidden">
      <button onClick={handleToggleMenu} className="flex items-center left-full">
          <img src="/images/bar.png" alt="Menu Icon"/>
        </button>
        </div>
      {isOpen && (
        <div className="absolute top-40 w-full bg-backgray lg:hidden">
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
