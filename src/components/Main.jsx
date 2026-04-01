import React, { use, useState } from "react";
import MainCart from "./MainCart";
import Cart from "./Cart";


const Main = ({ toolsDta, card, setCard }) => {

  const tools = use(toolsDta);
  console.log(tools);

const [tab,setTab]=useState("products");
const handleProductsTabChange = () => {
  console.log("products")
  setTab("products")
};
const handleCartTabChange = () => {
  console.log("cart")
  setTab("cart")
};

  return (
    <div className="py-20 space-y-6 px-5">
      <h1 className="text-5xl font-bold text-center">Premium Digital Tools</h1>
      <p className="text-gray-500 text-center">
        Choose from our curated collection of premium digital products <br />{" "}
        designedto boost your productivity and creativity.
      </p>
      {/* tabs */}
      <div className="flex justify-center items-center mb-15">
        {/* name of each tab group should be unique */}
        <div className="tabs  gap-4">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab px-10 shadow-2xl checked:bg-gradient-to-r from-amber-400 to-green-500 rounded-full"
            aria-label="Products"
            onClick={handleProductsTabChange}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full px-10 shadow-2xl checked:bg-gradient-to-r from-amber-400 to-green-500"
            aria-label={`Cart (${card.length})`}
             onClick={handleCartTabChange}
          />
        </div>
      </div>

      {/* tools cards */}
      
      
      {
        tab==="products"? 
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-[1280px] mx-auto p-5">


       {
        
          tools.map(tool=> <MainCart key={tool.id} tool={tool} card={card} setCard={setCard}  ></MainCart>)
       }
      </div>:<div>
        <Cart card={card} setCard={setCard}></Cart>
      </div>
      }
     
    </div>
  );
};

export default Main;
