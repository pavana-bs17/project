import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useHamburger } from "../context/HamburgerContext"; 

const Sidebar = () => {
  const { hamburger } = useHamburger();
  const Menus = [
    { title: "Dashboard", src: "/dashboard.png", link: "/dashboard" },
    { title: "Jobs", src: "/job.png", link: "/job" },
    { title: "Applications", src: "/application.png", link: "/applications" },
    { title: "Followers", src: "/followers.png", link: "/followers" },
    { title: "My Inventory", src: "/enterprise.png", link: "/inventory" },
    { title: "Company Profile", src: "/enterprise.png", link: "/company" },
    { title: "All Users", src: "/users.png", link: "/users" },
    { title: "My Account", src: "/my_account.png", link: "/account" },
  ];
  const [isSelected, setselected] = useState("My Account");
  return (
    <>
      <div
        className={`${
          hamburger ? "md:w-72 w-[100%]" : "md:w-20 w-0"
        } md:block md:h-screen bg-[#404040] pt-8 fixed top-[65px] h-[100vh] z-50`}
      >
        <div className="pl-4 flex items-center gap-x-1">
          <img
            src="/hp.png" 
            alt="company logo"
            className="w-12 h-12 mr-2"
          />
          <span
            className={`${
              !hamburger && "scale-0"
            } font-sans origin-left font-light text-4xl w-[105px] text-white`}
          >
            Hello,
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span
            className={`${
              !hamburger && "scale-0"
            } origin-left pl-6 font-sans font-light text-2xl truncate md:w-60 w-[100%] h-auto text-[#A2A3B7]`}
          >
            Hewlett Packard Enterprises
          </span>
          <span className="px-5">
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ color: "#99CA3B" }}
              className={`${!hamburger && "scale-0"} origin-left px-5`}
            />
          </span>
        </div>

        {/* Sidebar Links */}


        <ul className="md:pt-11 pt-9 bg-[#404040]">
          {Menus.map((menu, index) => (
              <Link
              to={`${menu.link}`}
            >
            <li
              key={index}
              className={`font-sans  font-normal md:text-base text-sm text-gray-300 gap-x-4 cursor-pointer pl-[18px] pr-3 py-5 flex items-center hover:bg-[#59595c] ${
                menu.title === isSelected
                  && "border-l-4 border-green-500 bg-[#313136]"
           
              }`}
              onClick={() => {
                setselected(menu.title); 
              }}
            >
      
              <img src={`${menu.src}`} className="md:w-6 md:h-6 w-4 h-4 mr-4" />
              <span className={`${
                !hamburger && "scale-0"
              } font-sans origin-left font-normal md:text-base text-sm text-gray-300`}> {menu.title}</span>
            </li>
            </Link>
          ))}
        </ul>
        <div
            className={`${
              !hamburger && "scale-0"
            } text-[#99CA3B] md:mt-14 mt-14 pl-6 font-sans origin-left font-semibold text-xs`}
          >
            Contact Us -{" "}
          </div>

          <div
            className={`${
              !hamburger && "scale-0"
            } text-[#99CA3B] font-sans origin-left font-normal text-xs pl-6 mt-2`}
          >
            Email: admin@jobsforher.com{" "}
          </div>
      </div>
      <div className="block md:hidden shadow-md bg-slate-50 w-[100%] px-3 py-3 fixed top-[68px]">
        <div className="flex items-center justify-between">
          <div className="text-[#B2B2B2] font-sans font-medium text-xs">
            {" "}
            My Inventory <span className="text-[#e3e3e4] mx-2">|</span>
          </div>
          <div className="text-[#B2B2B2] font-sans font-medium text-xs">
            Company Profile<span className="text-[#e3e3e4] mx-2">|</span>
          </div>
          <div className="text-[#B2B2B2] font-sans font-medium text-xs">
            All Users<span className="text-[#e3e3e4] mx-2">|</span>
          </div>
          <div className="font-sans font-medium text-xs text-[#99CA3B]">
            My Account
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
