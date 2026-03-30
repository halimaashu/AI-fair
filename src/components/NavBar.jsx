import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm p-3">
      <div className="navbar-start">
        <h1 className=" text-4xl font-black bg-gradient-to-r from-[#4f39f6] to-[#4f39f6] bg-clip-text text-clip text-transparent">
          DgiTools
        </h1>
      </div>
      <div className="navbar-center ">
        <ul className="hidden lg:flex justify-center items-center gap-5 text-xl font-semibold   ">
          <li className="hover:shadow-2xl hover:text-blue-500">
            <a href="">Products </a>
          </li>
          <li className="hover:shadow-2xl hover:text-blue-500">
            <a href="">Features </a>
          </li>
          <li className="hover:shadow-2xl hover:text-blue-500">
            <a href="">Pricing </a>
          </li>
          <li className="hover:shadow-2xl hover:text-blue-500">
            <a href=""> Testimonials</a>
          </li>
          <li className="hover:shadow-2xl hover:text-blue-500">
            <a href=""> FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3  ">
        <div className="hidden md:block space-x-3">
          <button className="btn btn-ghost btn-circle text-3xl font-bold">
            <CiShoppingCart />
          </button>
          <button className=" btn ">login</button>
          <button className="btn btn-primary rounded-full ">
            <div className="">
              <h1>GetSterd</h1>
            </div>
          </button>
        </div>
        <div className="block lg:hidden">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <IoMdMenu />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content  bg-base-100 rounded-box z-1  p-2 shadow-sm space-y-3 justify-center items-center"
            >
             <li className="block md:hidden">
                 <button className="btn btn-ghost btn-circle text-3xl font-bold space-y-5">
                <CiShoppingCart />
              </button>
              <button className=" btn ">login</button>
              <button className="btn btn-primary rounded-full ">
                <div className="">
                  <h1>GetSterd</h1>
                </div>
              </button>
             </li>
             
                <li className="hover:shadow-2xl hover:text-blue-500">
                  <a href="">Products </a>
                </li>
                <li className="hover:shadow-2xl hover:text-blue-500">
                  <a href="">Features </a>
                </li>
                <li className="hover:shadow-2xl hover:text-blue-500">
                  <a href="">Pricing </a>
                </li>
                <li className="hover:shadow-2xl hover:text-blue-500">
                  <a href=""> Testimonials</a>
                </li>
                <li className="hover:shadow-2xl hover:text-blue-500">
                  <a href=""> FAQ</a>
                </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
