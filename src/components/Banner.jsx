import React from "react";
import banner from "../assets/banner.png";
import badge from "../assets/badge.png";
import triangle from "../assets/play.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse py-16">
        <div className="p-6">
          <img src={banner} className="w-full   rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1 space-y-6">
          <div className="max-w-[320px] flex items-center bg-blue-100  gap-2 p-2 rounded-full text-center  ">
            <img src={badge} alt="Badge" />
            <span>New: AI-Powered Tools Available</span>
          </div>
          <h1 className="text-6xl font-black">
            Supercharge Your <br /> <span className="mt-10"> Digital Work flow</span>
          </h1>
          <p className="py-6 text-gray-500">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
         <div className="flex gap-4">
             <button className="btn  bg-[#4F39F6] rounded-full text-white font-bold" >Explore Products</button>
             <button className="btn bg-none  border-violet-500  border-2 rounded-full font-bold"><img src={triangle} alt="" /> <span className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">Watch Demo</span></button>

         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
