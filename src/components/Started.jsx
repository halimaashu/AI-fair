import React from "react";
import user from "../assets/user.png";
import packageImg  from "../assets/packageimage.png";
import rocket from "../assets/rocket.png";
const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    image:user
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    image:packageImg
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    image:rocket
  }
];
const Started = () => {
  return (
    <div className="py-[60px] px-2 space-y-6">
      <h1 className="text-center text-6xl font-bold">Get Started in 3 Steps</h1>
      <p className="text-center text-xl text-gray-500 ">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="p-4 max-w-[1280px] mx-auto text-center grid md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center py-20 md:px-10">
        {steps.map((step) => ( 
          <div key={step.id} className="bg-white shadow-md p-5 rounded-xl space-y-4 w-full max-w-[300px] flex flex-col items-center text-center relative">
            <h1 className=" bg-violet-600 inline p-2 rounded-full shadow-2xl text-xl font-bold text-white text-center absolute -top-4 -right-4">
              {step.id}
            </h1>

            <img
              src={step.image}
              className="bg-violet-300 rounded-full p-4 w-[130px] text-center"
              alt=""
            />

            <h1 className="text-xl font-bold">{step.title}</h1>
            <p className="text-gray-500">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Started;
