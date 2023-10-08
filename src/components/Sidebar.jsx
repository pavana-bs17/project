import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return(
        <div className="hidden md:block w-72 h-screen bg-[#404040]">
        <div className="pl-4 flex flex-row items-center pt-6">
          <img
            src="/hp.png" // Replace with your image URL
            alt="company logo"
            className="w-12 h-12 mr-2"
          />
          <span className="font-sans font-light text-4xl w-[105px] text-white">
            Hello,
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="pl-6 font-sans font-light text-2xl truncate w-60 h-auto text-[#A2A3B7]">
            Hewlett Packard Enterprises
          </span>
          <span className="pl-5">
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#99CA3B" }} />
          </span>
        </div>

        {/* Sidebar Links */}
        <div className="mt-11">
          <div className="flex items-center pl-6">
            <img
              src="/dashboard.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4"
            ></img>
            <Link
              to="/dashboard"
              className="font-sans font-normal text-base text-gray-300"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center pl-6 mt-8">
            <img
              src="/job.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4"
            ></img>
            <Link
              to="/job"
              className="font-sans font-normal text-base text-gray-300"
            >
              Jobs
            </Link>
          </div>
          <div className="flex items-center pl-6 mt-8">
            <img
              src="/application.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4"
            ></img>
            <Link
              to="/applications"
              className="font-sans font-normal text-base text-gray-300"
            >
              Applications
            </Link>
          </div>
          <div className="flex items-center pl-6 mt-8">
            <img
              src="/followers.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4"
            ></img>
            <Link
              to="/followers"
              className="font-sans font-normal text-base text-gray-300"
            >
              Followers
            </Link>
          </div>
          <div className="flex items-center pl-6 mt-8">
            <img
              src="/enterprise.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4"
            ></img>
            <Link
              to="/inventory"
              className="font-sans font-normal text-base text-gray-300"
            >
              My Inventory
            </Link>
          </div>
          <div className="flex items-center pl-6 mt-8">
            <img
              src="/enterprise.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4"
            ></img>
            <Link
              to="/dashboard"
              className="font-sans font-normal text-base text-gray-300"
            >
              Company Profile
            </Link>
          </div>
          <div className="flex items-center pl-6 mt-8">
            <img
              src="/users.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4"
            ></img>
            <Link
              to="/users"
              className="font-sans font-normal text-base text-gray-300"
            >
              All Users
            </Link>
          </div>
          <div className="flex items-center mt-8 h-[45px] bg-[#313136]">
            <div className="w-[6px] h-[45px] bg-[#99CA3B] mr-4"></div>
            <img
              src="/my_account.png" // Replace with your image URL
              alt="company logo"
              className="w-6 h-6 mr-4 object-contain"
            ></img>
            <Link
              to="/account"
              className="font-sans font-normal text-base text-gray-300"
            >
              My Account
            </Link>
          </div>
          <div className="mt-20 text-[#99CA3B] pl-6">Contact Us - </div>
          <div className=" text-[#99CA3B] pl-6 mt-1">
            Email: admin@jobsforher.com{" "}
          </div>
        </div>
      </div>
    );
 };
 export default Sidebar;