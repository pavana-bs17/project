import React from "react";
const AccountSetting = () => {
    return(
        <div className="w-[100%] lg:w-[49%] md:min-h-[280px]">
        <div className="mb-2">
          <div className="bg-[#F8F8F8]">
            <div className="flex justify-between w-full px-6 py-5">
              <div className="font-sans font-semibold text-base text-[#484848]">
                My Account Settings
              </div>
              <img
                src="/edit.png"
                alt="edit icon"
                className="w-[18px] h-[18px]"
              ></img>
            </div>
          </div>

          <div className="bg-white border border-[#EBEDF2] border-t-0 rounded border-3 pt-8 md:pb-10 pb-0 pl-5">
            <div className="flex flex-wrap items-center">
              <div className="w-[100%] md:w-[48%]">
                <div className=" mb-6 md:mb-10">
                  <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-2">
                    Full Name*
                  </div>
                  <div className="text-[#404040] font-sans font-normal text-sm">
                    Divya Chatterjee
                  </div>
                </div>
                <div className="mb-6 md:mb-[10px]">
                  <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-2">
                    Phone / Landline*
                  </div>
                  <div className="text-[#404040] font-sans font-normal text-sm">
                    7012248563
                  </div>
                </div>
              </div>

              <div className="w-[100%] md:w-[48%]">
                <div className="mb-8 md:mb-[61px]">
                  <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-2">
                    Designation
                  </div>
                  <div className="text-[#404040] font-sans font-normal text-sm">
                    Assistant Manager - HR
                  </div>
                </div>
                <div className="mb-[30px] md:mb-[12px]">
                  <div className="text-[#2680EB] font-sans font-normal text-sm ml-[190px] md:ml-0">
                    Change Password
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default AccountSetting;