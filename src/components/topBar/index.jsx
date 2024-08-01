import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <section className="flex justify-between items-center px-4 py-2">
      {/* logo */}
      <div className="flex items-center">
        <BsChatSquareDots
          size={20}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-lg md:text-xl font-bold text-gray-700">NATURE NOMAD</h1>
      </div>

      
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700 ">9AM - 5AM</p>
        </div>

        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700 ">1-812-345-7890</p>
        </div>

        <button>Get a Free Quote</button>
      </div>
    </section>
  );
};

export default TopBar;
