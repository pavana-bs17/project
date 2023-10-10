import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHamburger } from "../context/HamburgerContext";

const Navbar = () => {
  const { toggleModal, hamburger } = useHamburger();
  const [sel, setSel] = useState("/dashboard");
  const Menus = [
    { title: "DASHBOARD", src: "/dashboard.png", link: "/dashboard" },
    { title: "PACKAGES", src: "/job.png", link: "/package" },
    { title: "EVENTS", src: "/application.png", link: "/event" },
    { title: "BLOGS", src: "/followers.png", link: "/blog" },
  ];
  return (
    <>
      <nav className="bg-white shadow-md hidden md:block fixed w-[100%] top-0 z-40">
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
                {hamburger ? (
                  <button
                    onClick={toggleModal}
                    className="hidden md:flex flex-col space-y-1 transform rotate-180 w-[18px] h-[14px] "
                  >
                    <div className="w-3 h-[2px] bg-[#484848] "></div>
                    <div className="w-[18px] h-[2px] bg-[#484848]"></div>
                    <div className="w-3 h-[2px] bg-[#484848]"></div>
                  </button>
                ) : (
                  <button
                    onClick={toggleModal}
                    className="flex flex-col space-y-1 w-[18px] h-[14px]"
                  >
                    <div className="w-[18px] h-[2px] bg-[#484848] "></div>
                    <div className="w-[18px] h-[2px] bg-[#484848]"></div>
                    <div className="w-[18px] h-[2px] bg-[#484848]"></div>
                  </button>
                )}
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
      <nav className="bg-white shadow-md md:hidden flex justify-between items-center p-4 top-0 z-40 fixed w-full">
        {hamburger ? (
          <button
            onClick={toggleModal}
            className="flex flex-col space-y-1 transform rotate-180 w-[18px] h-[14px] "
          >
            <div className="w-3 h-[2px] bg-[#484848] "></div>
            <div className="w-[18px] h-[2px] bg-[#484848]"></div>
            <div className="w-3 h-[2px] bg-[#484848]"></div>
          </button>
        ) : (
          <button
            onClick={toggleModal}
            className="flex flex-col space-y-1 w-[18px] h-[14px]"
          >
            <div className="w-[18px] h-[2px] bg-[#484848] "></div>
            <div className="w-[18px] h-[2px] bg-[#484848]"></div>
            <div className="w-[18px] h-[2px] bg-[#484848]"></div>
          </button>
        )}
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
