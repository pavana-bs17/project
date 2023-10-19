import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { HamburgerContext } from "../context/HamburgerContext";
import { menus } from "../utils/constant";
import { menuItems } from "../utils/constant";

const Sidebar = () => {
  const { hamburger, selectedMenu, setSelectedMenu } =
    useContext(HamburgerContext);

  const { selectedItem, setSelectedItem } = useState("My Account");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div
        className={`${
          hamburger
            ? "md:w-72 w-[100%]"
            : "md:w-20 md:block hidden overflow-y-scroll"
        } bg-black fixed top-[65px] h-[100vh] z-10 overflow-y-scroll`}
      >
        <div className="flex flex-col gap-x-6 p-5">
          <div className="flex items-center gap-x-1">
            <img
              src="/hp.png"
              alt="company logo"
              className="w-12 h-12 mr-2"
              loading="lazy"
            />
            <span
              className={`${
                hamburger
                  ? "block font-sans font-light text-4xl w-[105px] text-white"
                  : "hidden"
              }`}
            >
              Hello,
            </span>
          </div>
          <div className={`flex flex-row items-center`}>
            <div
              className={`${
                !hamburger
                  ? "hidden"
                  : "font-sans font-light text-2xl truncate md:w-60 w-[100%] h-auto text-[#A2A3B7]"
              }`}
            >
              Hewlett Packard Enterprises
            </div>
            <span className="mr-2 md:mr-0">
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`${!hamburger ? "hidden" : "text-[#99CA3B]"}`}
              />
            </span>
          </div>
        </div>

        <div
          className={`flex justify-start text-white flex-col absolute top-[130px] w-[100%]`}
        >
          {menus.map((menu) => (
            <Link to={`${menu.link}`} key={menu.title}>
              <div
                className={`p-5 md:py-4 py-2 font-sans font-normal md:text-base text-sm text-gray-300 cursor-pointer flex items-center hover.bg-[#59595c]${
                  menu.title === selectedMenu && hamburger
                    ? "border-l-4 border-green-500 bg-[#313136]"
                    : ""
                }`}
                onClick={() => {
                  setSelectedMenu(menu.title);
                }}
              >
                <div className="h-4 w-4 md:w-6 md:h-6 mr-4">
                  <img
                    src={`${menu.src}`}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <span
                  className={`${
                    !hamburger
                      ? "hidden"
                      : "font-sans font-normal md:text-base text-sm text-gray-300"
                  }`}
                >
                  {menu.title}
                </span>
              </div>
            </Link>
          ))}

          <div
            className={` ${
              !hamburger ? "hidden" : "flex flex-col justify-start p-5"
            }`}
          >
            <div
              className={`text-[#99CA3B] mt-11 font-sans font-semibold text-xs`}
            >
              Contact Us -
            </div>

            <div
              className={`text-[#99CA3B] font-sans font-normal text-xs mt-2`}
            >
              Email: admin@jobsforher.com
            </div>
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
