import React from "react";
const ApplicationSetting = () => {
    return(
        <div className="w-[100%] lg:w-[49%] md:min-h-[280px]">
        <div className="mb-2">
          <div className="bg-[#F8F8F8]">
            <div className="flex justify-between w-full px-6 py-5">
              <div className="font-sans font-semibold text-base text-[#484848]">
                Application Settings
              </div>
              <img
                src="/edit.png"
                alt="edit icon"
                className="w-[18px] h-[18px]"
              ></img>
            </div>
          </div>

          <div className="bg-white border border-[#EBEDF2] border-t-0 rounded border-3 pt-8  md:pb-[69px] pb-10 pl-5">
            <div className="flex items-center">
              <div className="w-[100%]">
                <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-4">
                  Receive job applications via
                </div>
                <div className="text-[#484848] font-sans font-normal text-xs mb-3">
                  Only on my dashboard
                </div>
                <div className="text-[#484848] font-sans font-normal text-xs mb-4">
                  Email and on my dashboard
                </div>
                <div className="text-[#B2B2B2] font-sans font-normal text-xs">
                  *Please note, this setting will not impact your old job
                  postings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default ApplicationSetting;