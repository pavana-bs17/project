import React from "react";

const MyProfile = () => {
    return(
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
      loading="lazy"
    ></img>
  </div>
</div>

<div className="bg-white w-[100%] border border-[#EBEDF2] border-t-0 rounded border-3 pt-5 pl-5">
  <div className="flex items-center">
    {/* Image on the left */}
    <div className="w-32 h-32 rounded-full p-1 border border-[#F8F8F8] mr-3 md:mr-9">
      <img
        src="/image.png"
        alt="Image"
        className="w-full h-full rounded-full"
        loading="lazy"
      />
    </div>
    <div className="hidden md:block w-[42px] md:w-9 h-9 rounded-full overflow-hidden border border-[#f0eeee] shadow-sm relative md:right-[70px] md:top-[37px]">
      <div className="flex items-center p-2 justify-center bg-white ">
        <img src="/edit.png" alt="Edit" className="bg-white" loading="lazy"/>
      </div>
    </div>

    {/* Details on the right */}
    <div className="w-2/3">
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
    );
};
export default MyProfile;

