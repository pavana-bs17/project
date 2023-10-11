import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { HamburgerContext } from "../context/HamburgerContext";
import { menus } from "../utils/constant";
import { menuItems } from "../utils/constant";

const Sidebar = () => {
    const { hamburger, selectedMenu, setSelectedMenu } = useContext(HamburgerContext);

    const {selectedItem, setSelectedItem} = useState("My Account");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div
        className={`${
          hamburger
            ? "md:w-72 w-[100%] md:block lg:h-screen bg-[#404040] pt-8 fixed top-[65px] md:h-[100vh] z-50 h-[100%]"
            : "w-20 hidden md:hidden"
        }`}
      >
        <div className="pl-6">
          <div className="flex items-center gap-x-1">
            <img src="/hp.png" alt="company logo" className="w-12 h-12 mr-2" loading="lazy" />
            <span
              className={`font-sans font-light text-4xl w-[105px] text-white`}
            >
              Hello,
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span
              className={`font-sans font-light text-2xl truncate md:w-60 w-[100%] h-auto text-[#A2A3B7]`}
            >
              Hewlett Packard Enterprises
            </span>
            <span className="mr-2 md:mr-0">
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`text-[#99CA3B]`}
              />
            </span>
          </div>
        </div>

        {/* Sidebar Links */}
        <div className=" md:pt-11 pt-6 bg-[#404040] flex flex-col gap-1">
          {menus.map((menu) => (
            <Link to={`${menu.link}`} key={menu.title}>
              <div
                className={`md:py-4 py-2 pl-6 pr-[100px]font-sans font-normal md:text-base text-sm text-gray-300 cursor-pointer flex items-center hover:bg-[#59595c] ${
                  menu.title === selectedMenu && hamburger
                    ? "border-l-4 border-green-500 bg-[#313136]"
                    : ""
                }`}
                onClick={() => {
                  setSelectedMenu(menu.title);
                }}
              >
                <img
                  src={`${menu.src}`}
                  className="md:w-6 md:h-6 w-4 h-4 mr-4"
                  loading="lazy"
                />
                <span
                  className={`font-sans font-normal md:text-base text-sm text-gray-300`}
                >
                  {menu.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="pl-6">
          <div
            className={`text-[#99CA3B] mt-11 font-sans font-semibold text-xs`}
          >
            Contact Us -
          </div>

          <div className={`text-[#99CA3B] font-sans font-normal text-xs mt-2`}>
            Email: admin@jobsforher.com
          </div>
        </div>
      </div>
      <div className="block md:hidden shadow-md bg-slate-50 w-[100%] py-3 fixed top-[68px] px-2">
        <div className="flex items-center justify-between">
          {menuItems.map((item) => (
            <div
              className={`font-sans font-medium text-xs ${
                selectedItem === item ? "text-[#99CA3B]" : "text-[#B2B2B2]"
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
