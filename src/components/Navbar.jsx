import React from "react";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiCaretDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <main className="flex w-screen items-center justify-around py-8 border absolute">
      <div className="flex items-center gap-10">
        <div>
          <h2 className="font-condensed font-bold text-xl">incline.</h2>
        </div>
        <span className="hover:text-[#F5BA4B]">|</span>
        <div className="flex gap-5">
          <BsGithub className="hover:text-[#F5BA4B]" />
          <BsTwitter className="hover:text-[#F5BA4B]" />
          <BsInstagram className="hover:text-[#F5BA4B]" />
        </div>
      </div>
      <ul className="flex gap-5 text-sm">
        <li className="hover:text-[#F5BA4B]">
          <a className="flex items-center gap-2" href="#">
            WELCOME <BiCaretDown />
          </a>{" "}
        </li>
        <li className="hover:text-[#F5BA4B]">
          <a className="flex items-center gap-2" href="#">
            LANDINGS <BiCaretDown />
          </a>{" "}
        </li>
        <li className="hover:text-[#F5BA4B]">
          <a className="flex items-center gap-2" href="#">
            PAGES <BiCaretDown />
          </a>{" "}
        </li>
        <li className="hover:text-[#F5BA4B]">
          <a className="flex items-center gap-2" href="#">
            COMPONENTS <BiCaretDown />
          </a>{" "}
        </li>
        <li className="hover:text-[#F5BA4B]">
          <a className="flex items-center gap-2" href="#">
            DOCUMENTATION <BiCaretDown />
          </a>{" "}
        </li>
        <li className="hover:text-[#F5BA4B]">|</li>
        <li className="hover:text-[#F5BA4B]">
          <a className="flex items-center gap-2" href="#">
            PURCHASE NOW{" "}
          </a>{" "}
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
