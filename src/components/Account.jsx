import React from "react";

const Account = () => {
  return (
    <div className="flex flex-col px-3 md:px-[30px] w-[100%] pb-8 md:pb-0">
      <div className="bg-[#F1F2F7] mt-6 w-max text-[#999999] font-normal text-xs font-sans hidden md:display">
        Dashboard | <span className="text-[#2680EB]">My Account</span>
      </div>
      <div className="mt-4 w-[100%] bg-white rounded-sm shadow-custom md:shadow-none">
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
          <div className="md:mt-4 mb-2 md:mx-6">
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
            <div className="bg-white w-[100%] border border-[#EBEDF2] border-t-0 rounded border-3 pt-5 pl-5">
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
        <div className="flex w-[100%] justify-between mt-2 mb-5 flex-wrap">
          <div className="w-[100%] md:w-[50%] min-h-[280px]">
            <div className="mb-2 md:mx-6">
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
              <div className="bg-white border border-[#EBEDF2] border-t-0 rounded border-3 pt-8 md:pb-16 pb-0 pl-5">
                <div className="flex items-center flex-wrap">
                  {/* Left side */}
                  <div className="w-[100%] md:w-52 md:mb-0 mb-[18px]">
                    <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-1">
                      Full Name*
                    </div>
                    <div className="text-[#404040] font-sans font-normal text-sm mb-[18px] md:mb-10">
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
                  <div className="w-[100%] md:w-52">
                    {/* Add pl-4 for left padding */}
                    <div className="text-[#B2B2B2] font-sans font-normal text-xs mb-[2px]">
                      Designation
                    </div>
                    <div className="text-[#404040] font-sans font-normal text-sm md:mb-[60px]">
                      Assistant Manager - HR
                    </div>
                    <div
                      class="text-[#2680EB] font-sans font-normal text-sm md:mb-0 mb-12 mt-4 md:mt-0 relative top-4 left-48 lg:top-0 lg:left-0 w-[130px]"
                    >
                      Change Password
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] min-h-[280px]">
            <div className="mb-2 md:mx-6">
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
              <div className="bg-white border border-[#EBEDF2] border-t-0 rounded border-3 pt-8  md:pb-[75px] pb-10 pl-5">
                <div className="flex items-center">
                  {/* Left side */}
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
        </div>
      </div>
    </div>
  );
};

export default Account;
