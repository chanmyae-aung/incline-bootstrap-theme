import React, { useState } from "react";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  return (
      <div
      className={`${isOpen && "bg-white"} w-full px-10 lg:bg-transparent flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-center py-8 lg:border-b border-b-gray-300 absolute top-0 z-10`}
    >
      <div className="flex lg:flex-row flex-col lg:items-center gap-10">
        <div className="flex justify-between items-center">
          <h2
            className={
              isOpen
                ? "font-condensed lg:text-white font-bold text-xl"
                : "font-condensed text-white font-bold text-xl"
            }
          >
            incline.
          </h2>
          <div className="lg:hidden">
            <Hamburger
              color={!isOpen ? "#FFF" : "#000"}
              size={20}
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>
        <span className="hover-effect lg:block lg:text-white hidden">|</span>
      </div>

      <div className={`${!isOpen && "hidden"} w-full lg:flex items-center flex-col gap-5 lg:flex-row`}>
        <div className=" flex flex-col flex-grow lg:flex-row gap-5 mb-5 lg:mb-0">
          <div className="flex lg:text-white gap-5 cursor-pointer">
            <BsGithub className="hover-effect" />
            <span className="text-xs tracking-widest lg:hidden">GITHUB</span>
          </div>
          <div className="flex gap-5 cursor-pointer">
            <BsTwitter className="hover-effect lg:text-white" />
            <span className="text-xs tracking-widest lg:hidden">TWITTER</span>
          </div>
          <div className="flex gap-5 cursor-pointer">
            <BsInstagram className="hover-effect lg:text-white" />
            <span className="text-xs tracking-widest lg:hidden">INSTAGRAM</span>
          </div>
        </div>
        <ul
          className="flex flex-col lg:flex-row gap-5 text-xs tracking-widest"

        >
          <li className="hover-effect lg:text-white">
            <a onClick={toggle} className="flex items-center gap-1" href="#">
              WELCOME <MdOutlineArrowDropDown />
            </a>
            <ul
              onClick={() => {
                toggle(), setIsOpen(!isOpen);
              }}
              className={
                !show
                  ? " bg-white absolute hidden py-3 px-5 mt-5"
                  : " bg-white lg:absolute flex flex-col py-3 px-5 mt-5"
              }
            >
              <Link to={"image"}>
                <li className="text-gray-800 hover-effect text-xs pb-2">
                  HOME: IMAGE
                </li>
              </Link>
              <Link to={"carousel"}>
                <li className="text-gray-800 hover-effect text-xs py-2 lg:border-y">
                  HOME: CAROUSEL
                </li>
              </Link>
              <Link to={"parallax"}>
                <li className="text-gray-800 hover-effect text-xs pt-2">
                  HOME: PARALLAX
                </li>
              </Link>
            </ul>
          </li>
          <li className="lg:text-white hover-effect">
            <a className="flex items-center gap-1 " href="#">
              LANDINGS <MdOutlineArrowDropDown />
            </a>
          </li>
          <li className="lg:text-white hover-effect">
            <a className="flex items-center gap-1 " href="#">
              PAGES <MdOutlineArrowDropDown />
            </a>
          </li>
          <li className="lg:text-white hover-effect">
            <a className="flex items-center gap-1 " href="#">
              COMPONENTS <MdOutlineArrowDropDown />
            </a>
          </li>
          <li className="lg:text-white hover-effect">
            <a className="flex items-center gap-1 " href="#">
              DOCUMENTATION <MdOutlineArrowDropDown />
            </a>
          </li>
          <li className="lg:text-white hover-effect hidden lg:block ">|</li>
          <li className="lg:text-white hover-effect">
            <a className="flex items-center gap-1 " href="#">
              PURCHASE NOW
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
