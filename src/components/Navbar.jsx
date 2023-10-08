// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="bg-white shadow-md">
//         <div className="container">
//           <div className="flex items-center justify-between h-16">
//             {/* <div className="flex items-center"> */}
//               <div className="flex items-center">
//                 <div className="flex">
//                   <img
//                     src="/jfh_logo.png"
//                     alt="Forever Logo"
//                     className="w-[130px] h-[35px] mr-20"
//                   />
//                 </div>

//                 <div className="hidden md:flex flex-col space-y-1 transform rotate-180 w-[18px] h-[14px] ">
//                   <div className="w-3 h-[2px] bg-[#484848] "></div>
//                   <div className="w-[18px] h-[2px] bg-[#484848]"></div>
//                   <div className="w-3 h-[2px] bg-[#484848]"></div>
//                 </div>
//               </div>
//               <div className="hidden md:block mr-[370px] w-[]">
//                 <div className="flex space-x-9">
//                   <Link
//                     to="/dashboard"
//                     className="text-black rounded-md font-sans font-normal text-base"
//                   >
//                     DASHBOARD
//                   </Link>
//                   <Link
//                     to="/packages"
//                     className="text-black rounded-md font-sans font-normal text-base"
//                   >
//                     PACKAGES
//                   </Link>
//                   <Link
//                     to="/events"
//                     className="text-black rounded-md font-sans font-normal text-base"
//                   >
//                     EVENTS
//                   </Link>
//                   <Link
//                     to="/blogs"
//                     className="text-black rounded-md font-sans font-normal text-base"
//                   >
//                     BLOGS
//                   </Link>
//                 </div>
//               </div>
//             {/* </div> */}
//             <div className="flex items-center">
//               <img
//                 src="/forever_logo.png"
//                 alt="Forever Logo"
//                 className="h-[34px] w-[34px] rounded-full ml-4"
//               />
//             </div>
//           </div>
//         </div>
//       </nav>

//     </>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container px-8"> {/* Adjusted padding to 30px */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex items-center mr-40">
                <div className="flex">
                  <img
                    src="/jfh_logo.png"
                    alt="Forever Logo"
                    className="w-[130px] h-[35px] mr-4"
                  />
                </div>

                <div className="hidden md:flex flex-col space-y-1 transform rotate-180 w-[18px] h-[14px] ">
                  <div className="w-3 h-[2px] bg-[#484848] "></div>
                  <div className="w-[18px] h-[2px] bg-[#484848]"></div>
                  <div className="w-3 h-[2px] bg-[#484848]"></div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex space-x-9">
                  <Link
                    to="/dashboard"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    DASHBOARD
                  </Link>
                  <Link
                    to="/packages"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    PACKAGES
                  </Link>
                  <Link
                    to="/events"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    EVENTS
                  </Link>
                  <Link
                    to="/blogs"
                    className="text-black rounded-md font-sans font-normal text-base"
                  >
                    BLOGS
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/forever_logo.png"
                alt="Forever Logo"
                className="h-[34px] w-[34px] rounded-full ml-4"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
