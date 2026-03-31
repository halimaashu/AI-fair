import React, { useState } from "react";

import { IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const MainCart = ({ tool, card, setCard }) => {
  // console.log(tool)

  const [add, setAdd] = useState(false);
  const handelAddToCart = () => {

    const isFind = card.find((c) => c.id === tool.id);
    if (isFind) {
      toast.error(`${tool.name} is already in the cart!`);
      return;
    }
    setCard([...card, tool]);
    setAdd(true);

    toast.success(`${tool.name} is added to cart!!`);
  };
  return (
    <div className="shadow-md rounded-xl p-5 w-full space-y-6 hover:shadow-2xl hover:scale-105 duration-200">
      <div className="flex justify-between items-center ">
        <div className="p-6 mt-7 w-[100px]">
          {" "}
          <img src={tool.image} alt="" />
        </div>

        <div className="badge badge-primary">{tool.tag}</div>
      </div>
      <h1 className="text-2xl font-bold">{tool.name}</h1>
      <p className="text-gray-500">{tool.description}</p>
      <h1 className="text-3xl font-bold">
        ${tool.price}{" "}
        <span className="text-xl text-gray-500 font-semibold">
          /{tool.period}
        </span>
      </h1>

      <ul className="space-y-3">
        {tool.features.map((feature, index) => (
          <li
            key={index}
            className="flex  items-center gap-1 font-semibold text-gray-500"
          >
            <span className="text-green-500 ">
              <IoMdCheckmark />{" "}
            </span>{" "}
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => handelAddToCart()}
        className="btn bg-gradient-to-r from-amber-400 to-green-500 w-full rounded-full text-white"
      >
        {add ? "Card is added" : "Add to card"}
      </button>
    </div>
  );
};

export default MainCart;
