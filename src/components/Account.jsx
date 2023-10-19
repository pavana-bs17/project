import React, { useContext } from "react";
import { HamburgerContext } from "../context/HamburgerContext";
import { lazy, Suspense } from 'react';
const Myprofile = lazy(() => import('./Myprofile'));
const AccountSetting = lazy(() => import('./AccountSettings'));
const ApplicationSetting = lazy(() => import('./ApplicationSetting'));

const Account = () => {
  const { hamburger } = useContext(HamburgerContext);
  return (
    <div
    className={`flex flex-col px-3 md:px-[30px] ${
      hamburger
        ? "md:w-[calc(100%-280px)] md:ml-[288px] hidden md:block"
        : "md:w-[calc(100%-80px)] md:ml-[80px]"
    } pb-8 md:pb-0 md:mt-16 mt-[120px] xl:h-[100vh] md:h-full`}
  >
      <div className="bg-[#F1F2F7] mt-6 w-max text-[#999999] font-normal text-xs font-sans hidden md:block">
        Dashboard | <span className="text-[#2680EB]">My Account</span>
      </div>
      <div className="md:mt-4 w-[100%] bg-white rounded-sm shadow-custom md:shadow-none md:mb-[50px]">
        <div className="flex items-center ml-6 py-5">
          <img
            src="/left_arrow.png"
            alt="back arrow Logo"
            className="w-[18px] h-[18px] mr-4"
          />
          <div className="font-sans font-semibold text-base text-[#484848]">
            My Account
          </div>
        </div>
        <div className="border-b border-[#EBEDF2]"></div>
        <Suspense fallback={<div>Loading...</div>}>
          <Myprofile />
          <div className={`flex w-[100%] md:w-auto justify-between mt-2 mb-5 flex-wrap md:mx-6`}>
            <AccountSetting />
            <ApplicationSetting />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Account;
