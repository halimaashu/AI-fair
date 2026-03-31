import React, { use } from "react";

const PriceIng = ({ price }) => {
  const prices = use(price);
  // console.log(prices);
  return (
    <div className="py-[60px] px-2 space-y-6">
      <h1 className="text-center text-6xl font-bold">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center text-xl text-gray-500 ">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="p-4 max-w-[1280px] mx-auto text-center grid md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center py-20 md:px-10">
        {prices.map((price) => {
          return (
            <div
            key={price.id}
              className={`${
                price.isPopular
                  ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold rounded-xl shadow-2xl p-5 w-full text-left space-y-4 hover:scale-105 transform transition duration-200"
                  : "bg-base-200 font-semibold rounded-xl shadow-md p-5 w-full text-left space-y-4 hover:scale-105 transform transition duration-200"
              }`}
            >
              <h1 className="text-2xl font-bold">{price.plan}</h1>
              <p
                className={`${price.isPopular ? "text-white" : "text-gray-500"}`}
              >
                {price.description}
              </p>
              <h1 className="text-3xl font-bold">
                {price.price === 0 ? (
                  <span className="text-3xl font-bold text-green-500">
                    free
                  </span>
                ) : (
                  <span>
                    ${price.price}{" "}
                    <span
                      className={`${price.isPopular ? "text-lg font-normal text-white" : "text-lg font-normal text-gray-500"}`}
                    >
                      /{price.period}
                    </span>
                  </span>
                )}
              </h1>
              <div className="space-y-1">
                 <ul className="flex items-left flex-col gap-1.5">
                {price.features.map((feature, index) => (
                  
                    <li key={index}
                      className={`${price.isPopular ? "text-white" : "text-gray-500"} `}
                      
                    >
                      {" "}
                      <span className="text-green-500">✓</span> {feature}
                    </li>
                 
                ))}
                 </ul>
              </div>
              <button
                className={`${price.isPopular ? "btn w-full rounded-full" : "btn bg-gradient-to-r from-blue-600 to-violet-600 w-full rounded-full  text-white"} `}
              >
                {price.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceIng;
