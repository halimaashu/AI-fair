import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] py-20  ">
      {/* text containent */}
      <div className="md:flex justify-between text-center px-3 md:px-15">
        <div className="flex-1 flex flex-col gap-4 text-left p-4">
          <h1 className="text-[#FFFFFF] text-2xl font-bold">DgiTools</h1>
          <p className="text-xl text-gray-500 font-samibold">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="flex-1 flex justify-between text-left p-4">
          <div className="">
            <div className="space-y-3 ">
              <h1 className="text-xl font-bold text-[#FFFFFF]">Product</h1>
              <div className="text-gray-500 space-y-2">
                <p className="hover:text-white font-stretch-semi-condensed">
                  Features
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Pricing
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Templates
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Integrations
                </p>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="">
            <div className="space-y-3 ">
              <h1 className="text-xl font-bold text-[#FFFFFF]">Company</h1>
              <div className="text-gray-500 space-y-2">
                <p className="hover:text-white font-stretch-semi-condensed">
                  About
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Blog
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Careers
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Press
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="space-y-3 ">
              <h1 className="text-xl font-bold text-[#FFFFFF]">Resources</h1>
              <div className="text-gray-500 space-y-2">
                <p className="hover:text-white font-stretch-semi-condensed">
                  Documentation
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Help Center
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Community
                </p>
                <p className="hover:text-white font-stretch-semi-condensed">
                  Contact Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex  flex-col gap-5 text-left p-4 ml-10">
          <h1 className="text-[#FFFFFF] text-xl font-bold">Social Links</h1>
          <div className="flex gap-4 ">
            <p className="bg-white p-2 rounded-full hover:bg-blue-500">
              <FaFacebookF />
            </p>
            <p className="bg-white p-2 rounded-full hover:bg-amber-400">
              <FaTwitter />
            </p>
            <p className="bg-white p-2 rounded-full hover:bg-pink-500">
              <FaInstagram />
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between items-center mt-10 px-5 mb-6 md:px-15">
        <div className="">
          <h1 className="text-white text-xl font-semibold mb-5">
            © 2026 Digitools. All rights reserved.
          </h1>
        </div>
        <div className="text-xl text-gray-500 flex gap-5 ">
          <p>Privacy Policy </p>
          <p> Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
