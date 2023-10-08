import React from "react";

const Account = () => {
  return (
    <div className="flex flex-col ml-[30px]">
      <div className="bg-[#F1F2F7] mt-6 w-max text-[#999999] font-normal text-xs font-sans">
        Dashboard | <span className="text-[#2680EB]">My Account</span>
      </div>
      <div className="mt-4 w-[100%] bg-white rounded-sm">
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
        {/* place a div where it takes the full width of the parent and padding x 24px padding y 4px */}
        <div className="main">
          <div className="mt-4 mb-2 mx-6 md:w-[780px] lg:w-[1120px]">
            <div className="bg-[#F8F8F8]">
              <div className="flex justify-between w-full px-6 py-5">
                <div className="font-sans font-semibold text-base text-[#484848]">
                  My Profile
                </div>
                <img
                  src="/edit.png"
                  alt="edit icon"
                  className="w-[18px] h-[18px]"
                ></img>
              </div>
            </div>

            {/* Add your new div here */}
            <div className="bg-white md:w-[780px] lg:w-[1120px] border border-[#EBEDF2] border-t-0 rounded border-3 pt-5 pl-5">
              <div className="flex items-center">
                {/* Image on the left */}
                <div className="w-32 h-32 rounded-full p-1 border border-[#F8F8F8] flex-shrink-0 mr-9">
                  <img
                    src="/image.png"
                    alt="Image"
                    className="w-full h-full rounded-full"
                  />
                </div>

                {/* Details on the right */}
                <div className="w-2/3">
                  {/* Add your details here */}
                  <div className="font-sans font-semibold text-2xl text-[#404040] mb-[10px]">
                    Divya Chatterjee
                  </div>
                  <div className="mb-[10px]">
                    <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-[2px]">
                      Designation
                    </div>
                    <div className="text-[#404040] font-sans font-normal text-sm">
                      Assistant Manager - HR
                    </div>
                  </div>
                  <div className="mb-[10px]">
                    <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-[2px]">
                      Company Name
                    </div>
                    <div className="text-[#404040] font-sans font-normal text-sm">
                      XXY Company Name
                    </div>
                  </div>
                  {/* Add more details as needed */}
                </div>
              </div>
              <div className="">
                <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-[2px]">
                  About Me
                </div>
                <div className="text-[#404040] font-sans font-normal text-sm pr-8 pb-5">
                  Microsoft enables digital transformation for the era of an
                  intelligent cloud and an intelligent edge. Its mission is to
                  empower every person and every organization on the planet to
                  achieve more. Microsoft set up its India operations in 1990.
                  Microsoft in India offers its global cloud services from local
                  data centers to accelerate digital transformation across
                  Indian start-ups, businesses, and government agencies.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:w-[780px] lg:w-[1120px] justify-between mt-2 mb-5">
          <div className="md:w-[550px] ">
            <div className="mb-2 mx-6 md:w-[550px]">
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

              {/* Add your new div here */}
              <div className="bg-white md:w-[550px] border border-[#EBEDF2] border-t-0 rounded border-3 py-8 pl-5">
                <div className="flex items-center">
                  {/* Left side */}
                  <div className="w-52">
                    <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-1">
                      Full Name*
                    </div>
                    <div className="text-[#404040] font-sans font-normal text-sm mb-10">
                      Divya Chatterjee
                    </div>
                    <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-1">
                      Phone / Landline*
                    </div>
                    <div className="text-[#404040] font-sans font-normal text-sm">
                      7012248563
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="w-52">
                    {/* Add pl-4 for left padding */}
                    <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-[2px]">
                      Designation
                    </div>
                    <div className="text-[#404040] font-sans font-normal text-sm mb-[57px]">
                      Assistant Manager - HR
                    </div>
                    <div className="text-[#2680EB] font-sans font-normal text-sm mt-2">
                      Change Password
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[550px] ">
            <div className="mb-2 mx-6 md:w-[550px]">
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

              {/* Add your new div here */}
              <div className="bg-white md:w-[550px] border border-[#EBEDF2] border-t-0 rounded border-3 py-8 pl-5">
                <div className="flex items-center">
                  {/* Left side */}
                  <div className="">
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
                    *Please note, this setting will not impact your old job postings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
