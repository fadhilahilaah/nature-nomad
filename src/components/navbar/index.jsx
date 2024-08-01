import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const menuList = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Gallery",
    link: "#gallery",
  },
  {
    id: 3,
    title: "Deals",
    link: "#deals",
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      {/* menu list */}
      <ul className="hidden sm:flex px-4">
        {menuList.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* social media icons */}
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      {/* hamburger icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>

      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease duration-100 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full"
            : "absolute top-0 h-screen left-[-100%] ease duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          {menuList.map((item) => (
            <li key={item.id} className="text-xl py-8">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
