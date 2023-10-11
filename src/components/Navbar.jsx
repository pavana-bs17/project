import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { navs } from "../utils/constant";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md hidden md:block fixed w-[100%] top-0 z-40">
        <div className="px-8 w-[100%]">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center w-[100%] ">
              <div className="flex items-center w-72 justify-between">
                <img
                  src="/jfh_logo.png"
                  alt="Forever Logo"
                  className="w-[130px] h-[35px] mr-4"
                  loading="lazy"
                />
                <Hamburger />
              </div>
              <div className="hidden md:flex justify-between items-center w-full">
                <div className="flex space-x-9 pl-10">
                  {navs.map((nav, index) => (
                    <Link
                      key={index}
                      to={`${nav.link}`}
                      className="text-black rounded-md font-sans font-normal text-base"
                    >
                      <div>{nav.title}</div>
                    </Link>
                  ))}
                </div>
                <div className="">
                  <img
                    src="/forever_logo.png"
                    alt="Forever Logo"
                    className="h-[34px] w-[34px] rounded-full ml-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow-md md:hidden flex justify-between items-center p-4 top-0 z-40 fixed w-full">
        <Hamburger />
        <div className="flex items-center flex-1 justify-center">
          <img
            src="/jfh_logo.png"
            alt="Forever Logo"
            className="w-[120px] h-[36px] mx-auto"
            loading="lazy"
          />
        </div>
        <div className="flex items-center">
          <img
            src="/forever_logo.png"
            alt="Forever Logo"
            className="h-[34px] w-[34px] rounded-full"
            loading="lazy"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
