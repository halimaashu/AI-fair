import React from "react";

const Transform = () => {
  return (
    <div className=" bg-gradient-to-r from-[#4f39f6] to-violet-500 py-20 px-3 text-white text-center space-y-4">
      <h1 className="text-4xl font-bold">Ready to Transform Your Workflow?</h1>
      <p className="text-md ">
        Join thousands of professionals who are already using Digitools to work
        smarter. <br /> Start your free trial today.
      </p>
      <div className="flex justify-center items-center gap-5">
        <button className="btn rounded-full text-violet-500 hover:scale-105">
          Explore products
        </button>
        <button className=" rounded-full text-violet-500 bg-none border-2  text-white py-2 px-4 hover:scale-105">
          Get started
        </button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Transform;
