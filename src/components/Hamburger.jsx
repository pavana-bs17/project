import React,{useContext} from "react";
import { HamburgerContext } from "../context/HamburgerContext";

const Hamburger = () => {
    const { hamburger,toggleModal } = useContext(HamburgerContext);
  return (
    <>
      {hamburger ? (
        <button
          onClick={toggleModal}
          className="flex flex-col space-y-1 transform rotate-180 w-[18px] h-[14px] "
        >
          <div className="w-3 h-[2px] bg-[#484848] "></div>
          <div className="w-[18px] h-[2px] bg-[#484848]"></div>
          <div className="w-3 h-[2px] bg-[#484848]"></div>
        </button>
      ) : (
        <button
          onClick={toggleModal}
          className="flex flex-col space-y-1 w-[18px] h-[14px]"
        >
          <div className="w-[18px] h-[2px] bg-[#484848] "></div>
          <div className="w-[18px] h-[2px] bg-[#484848]"></div>
          <div className="w-[18px] h-[2px] bg-[#484848]"></div>
        </button>
      )}
    </>
  );
};

export default Hamburger;