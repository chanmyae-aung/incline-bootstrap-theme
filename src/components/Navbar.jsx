import React from "react";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <main className="flex w-screen items-center justify-around py-8 border-b border-b-gray-300 absolute z-10">
      <div className="flex items-center gap-10">
        <div>
          <h2 className="font-condensed font-bold text-xl">incline.</h2>
        </div>
        <span className="hover-effect">|</span>
        <div className="flex gap-5">
          <BsGithub className="hover-effect cursor-pointer" />
          <BsTwitter className="hover-effect cursor-pointer" />
          <BsInstagram className="hover-effect cursor-pointer" />
        </div>
      </div>
      <ul className="flex gap-5 text-sm">
        <li className="hover-effect ">
          <a className="flex items-center gap-1" href="#">
            WELCOME <MdOutlineArrowDropDown />
          </a>
        </li>
        <li className="hover-effect">
          <a className="flex items-center gap-1" href="#">
            LANDINGS <MdOutlineArrowDropDown />
          </a>
        </li>
        <li className="hover-effect">
          <a className="flex items-center gap-1" href="#">
            PAGES <MdOutlineArrowDropDown />
          </a>
        </li>
        <li className="hover-effect">
          <a className="flex items-center gap-1" href="#">
            COMPONENTS <MdOutlineArrowDropDown />
          </a>
        </li>
        <li className="hover-effect">
          <a className="flex items-center gap-1" href="#">
            DOCUMENTATION <MdOutlineArrowDropDown />
          </a>
        </li>
        <li className="hover-effect">|</li>
        <li className="hover-effect">
          <a className="flex items-center gap-1" href="#">
            PURCHASE NOW
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
