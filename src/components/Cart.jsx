import React from "react";
import { MdCloudUpload } from "react-icons/md";

const Cart = ({ card, setCard }) => {
  const handleDelete=(c)=>{
    // console.log(c)

    const newCart=card.filter(item=> item.id!==c.id)
    console.log(newCart ,"cart")
    setCard(newCart)
    
  }
  const allPrice = card.reduce((total, item) => total + item.price, 0);
  const handleProceed = () => {
    setCard([]);
    
  };
  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-bold">Your cart</h1>

      {card.length === 0 ? (
        <div className="py-20 text-center bg-base-200 flex justify-between items-center flex-col">
          <h1 className="text-4xl text-red-500 ">Your cart is empty please 
            added some items in products tab
          </h1>
          <h1 className="text-center text-9xl font-bold mt-10"><MdCloudUpload /></h1>
        </div>
      ) : (
        card.map((c) => {
          return (
            <div key={c.id} className="space-y-5">
              <div
                
                className="rounded-lg p-5  flex justify-between shadow-md items-center  "
              >
                <div className="flex gap-2">
                  <img
                    src={c.image}
                    className="w-[75px] h-[75px]"
                    alt={c.name}
                  />
                  <div className="">
                    <h1 className="text-2xl font-bold">{c.name}</h1>
                    <h1 className="text-gray-600">{c.description}</h1>
                  </div>
                </div>

                <button
                  onClick={ ()=>handleDelete(c)}
                  className="btn btn-ghost text-red-500 font-bold text-xl"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      )}

      <div className="bg-black py-20 rounded-lg flex justify-between text-white px-5 text-2xl font-bold">
        <h1>All price</h1>
        <h1>$ {allPrice}</h1>
      </div>

      <button
        onClick={handleProceed}
        className="btn bg-red-500 rounded-lg w-full py-15 text-2xl text-white"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
