import React from "react";

const News = () => {
  return (
    <div className="bg-gradient-to-r from-[#4f39f6] to-violet-500">
      {/* container */}
      <div className="grid  md:grid-cols-3 gap-9 text-center py-5 text-white">
        <div className="">
          <h1 className="text-6xl font-bold">50K+</h1>
          <p className="text-xl font-semibold mt-2">Active Users</p>
        </div>
        <div className="">
          <h1 className="text-6xl font-bold">100+</h1>
          <p className="text-xl font-semibold mt-2">Products Available</p>
        </div>
        <div className="">
          <h1 className="text-6xl font-bold">4.9</h1>
          <p className="text-xl font-semibold mt-2">Rating</p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default News;
