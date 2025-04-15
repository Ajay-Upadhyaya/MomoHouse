import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartContext } from "../Context/CartProvider";

function ProductDetails() {
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const { productID } = useParams();

  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  let totalPrice = singleProduct.caloriesPerServing * quantity;

  const getSingleProduct = async () => {
    let data = await fetch(`https://dummyjson.com/recipes/${productID}`);
    data = await data.json();
    console.log(data);
    setSingleProduct(data);
    console.log("ingredients", data.ingredients);
    setIngredients(data.ingredients);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      {singleProduct && (
        <div>
          <div className=" md:w-[70%] w-fit mx-auto flex lg:flex-row flex-col gap-16 items-center lg:justify-start justify center  rounded-xl  p-10 my-20 shadow-lg shadow-gray-300 ">
            <div>
              <img
                src={singleProduct.image}
                alt="Item's Image"
                className="w-[250px] rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-500"
              />
            </div>

            <div className="space-y-5 px-6">
              {" "}
              <h1 className=" font-bold lg:text-2xl text-xl ">
                <span className="font-bold">Name :</span> {singleProduct.name}
              </h1>
              <p className="lg:text-base text-sm font-bold">
                {" "}
                <span className="text-black">Ratings :</span>
                {singleProduct.rating}
              </p>
              <p className="lg:text-base text-sm font-bold">
                Price : Rs {singleProduct.caloriesPerServing}
              </p>
              <div className="flex gap-3">
                <h1 className="font-bold">Quantity :</h1>
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="w-8 h-8 rounded-sm  font-bold text-center bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                >
                  -
                </button>
                <span className="font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-sm  font-bold text-center bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                >
                  +
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        totalPrice: totalPrice,
                        quantity: quantity,
                      },
                    })
                  }
                  className="bg-[#1571eac7] text-white w-[150px] py-3 cursor-pointer hover:shadow-md hover:shadow-gray-300 hover:outline-2 hover:outline-[#1571eac7]"
                >
                  Buy Now
                </button>
                <button
                  className="bg-red-600 text-white w-[150px] py-3 cursor-pointer hover:shadow-md hover:shadow-gray-300 hover:outline-2 hover:outline-red-600"
                  onClick={() => {
                    dispatch({ type: "AddToCart", payload: singleProduct });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className=" w-[70%] mx-auto flex  flex-col gap-y-5 justify center  rounded-xl px-10 py-10 mb-10 shadow-lg shadow-gray-300 ">
            <h1 className="font-bold lg:text-2xl text-lg">Ingredients Used</h1>
            <ol className="text-gray-600 list-disc lg:text-base text-sm">
              {ingredients.length > 0 ? (
                <div>
                  {ingredients.map((item, index) => {
                    return (
                      <li key={index} className="leading-7">
                        {item}
                      </li>
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center">Not data</div>
              )}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
