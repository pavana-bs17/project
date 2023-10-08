import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md hidden md:block">
        <div className="px-8 w-[100%]">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center w-[100%] ">
              <div className="flex items-center w-72 justify-between">
                <div className="flex">
                  <img
                    src="/jfh_logo.png"
                    alt="Forever Logo"
                    className="w-[130px] h-[35px] mr-4"
                  />
                </div>

                <div className="hidden md:flex flex-col space-y-1 transform rotate-180 w-[18px] h-[14px] ">
                  <div className="w-3 h-[2px] bg-[#484848] "></div>
                  <div className="w-[18px] h-[2px] bg-[#484848]"></div>
                  <div className="w-3 h-[2px] bg-[#484848]"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-between items-center w-full">
                <div className="flex space-x-9 pl-10">
                  <Link
                    to="/dashboard"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    DASHBOARD
                  </Link>
                  <Link
                    to="/packages"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    PACKAGES
                  </Link>
                  <Link
                    to="/events"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    EVENTS
                  </Link>
                  <Link
                    to="/blogs"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    BLOGS
                  </Link>
                </div>
                <div className="">
                  <img
                    src="/forever_logo.png"
                    alt="Forever Logo"
                    className="h-[34px] w-[34px] rounded-full ml-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow-md md:hidden flex justify-between items-center p-4">
        <div className="flex flex-col space-y-1 w-[18px] h-[14px] ">
          <div className="w-[18px] h-[2px] bg-[#484848] "></div>
          <div className="w-[18px] h-[2px] bg-[#484848]"></div>
          <div className="w-[18px] h-[2px] bg-[#484848]"></div>
        </div>
        <div className="flex items-center flex-1 justify-center">
          <img
            src="/jfh_logo.png"
            alt="Forever Logo"
            className="w-[120px] h-[36px] mx-auto"
          />
        </div>
        <div className="flex items-center">
          <img
            src="/forever_logo.png"
            alt="Forever Logo"
            className="h-[34px] w-[34px] rounded-full"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
