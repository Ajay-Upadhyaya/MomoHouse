import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import cart from "../assets/images/cart.png";
import { NavLink, useNavigate } from "react-router-dom";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  let subTotalPrice = state.items.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);

  let totalItems = state.items.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  let shippingCostPerKm = 5;

  let totalShippingCost = totalItems * shippingCostPerKm;

  const navigate = useNavigate();
  return (
    <>
      <div>
        {state.items.length > 0 ? (
          <div className="flex lg:flex-row flex-col max-gap-[10%] gap-8 px-12 lg:py-24 py-8">
            <div className="flex flex-col gap-y-5">
              <div className="text-end ">
                <button
                  onClick={() => {
                    dispatch({ type: "ClearCart" });
                  }}
                  className=" bg-red-600 font-medium text-white py-2 px-4 rounded-lg cursor-pointer hover:outline-1 hover:outline-red-800"
                >
                  {" "}
                  Clear Cart
                </button>
              </div>
              <div>
                {state.items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex my-3 lg:gap-x-5 gap-x-3 pl-8 pr-4 py-5 shadow-lg shadow-gray-400 rounded-lg"
                    >
                      <div>
                        <img
                          src={item.image}
                          alt="Items image"
                          className="min-w-[50px] w-[150px] rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in-out duration-500"
                        />
                      </div>
                      <div className=" px-6 py-3 w-[400px] space-y-1  ">
                        <h1 className="font-bold lg:text-xl md:text-lg sm:text-md ">
                          {item.name}
                        </h1>
                        <p className="md:text-sm text-xs md:block hidden">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. At veritatis tempora quasi dicta ad, possimus
                          explicabo aperiam consectetur molestiae esse.
                        </p>
                      </div>

                      <div className="px-3 py-3 space-y-1">
                        <p className="md:text-lg text-xs font-medium">
                          {" "}
                          Rs. {item.caloriesPerServing}
                        </p>
                        <button
                          onClick={() => {
                            dispatch({ type: "Delete", payload: item.id });
                          }}
                          className="bg-red-600 text-white py-2 px-4 md:text-lg text-xs rounded-lg cursor-pointer hover:outline-1 hover:outline-red-600  "
                        >
                          Delete{" "}
                        </button>
                      </div>

                      <div className="  lg:gap-3 gap-1.5 py-3 md:flex hidden">
                        <button
                          onClick={() => {
                            dispatch({ type: "Decrement", payload: item.id });
                          }}
                          className="w-8 h-8 rounded-sm  font-bold text-center bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                        >
                          -
                        </button>
                        <p className="font-semibold "> {item.qty} </p>
                        <button
                          onClick={() => {
                            dispatch({ type: "Increment", payload: item.id });
                          }}
                          className="w-8 h-8 rounded-sm font-bold bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" px-8 py-5 flex flex-col gap-y-8 h-auto shadow-lg shadow-gray-400 rounded-lg relative">
              <h1 className="text-center font-bold text-xl ">Order Summary</h1>
              <table className="space-y-2">
                <tbody>
                  <tr>
                    <td className="font-medium text-base ">Subtotal :</td>
                    <td> Rs.{subTotalPrice}</td>
                  </tr>

                  <tr className="border-b-[1px] border-gray-300">
                    <td className="font-medium text-base">Shipping :</td>
                    <td> Rs.{totalShippingCost}</td>
                  </tr>

                  <tr className="my-2">
                    <td className="font-medium text-base">Total :</td>
                    <td className="font-bold">
                      {" "}
                      Rs.{subTotalPrice + totalShippingCost}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-center relative bottom-0">
                <button
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        totalPrice: subTotalPrice + totalShippingCost,
                        quantity: totalItems,
                      },
                    })
                  }
                  className="bg-orange-500 text-white hover:bg-orange-600 lg:text-sm text-base cursor-pointer py-4 px-6  font-bold rounded-lg"
                >
                  Proceed to checkout ({totalItems})
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-y-5 py-20">
            <img src={cart} alt="Empty cart" className="w-96" />
            <h1 className="font-bold lg:text-xl text-base font-serif">
              Your cart is empty.{" "}
              <NavLink to="/menu" className="text-orange-500   underline">
                Shop now
              </NavLink>
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
