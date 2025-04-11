import React from "react";
import line from "../assets/images/line.png";
import allergybg from "../assets/images/allergybg.png";
import "../Pages/Fonts.css";

function Ingredients() {
  return (
    <>
      <div className="w-[80%] mx-auto py-10">
        <div className="flex items-center justify-center gap-5 my-7">
          <img src={line} alt="Line" className="w-[100px]" />
          <h1 className="text-[#D95103] lg:text-2xl text-lg font-bold allergy">
            Ingredient's <span className="text-black">Used</span>
          </h1>
          <img src={line} alt="Line" className="w-[100px]" />
        </div>

        <div
          style={{ backgroundImage: `url(${allergybg})` }}
          className="bg-cover bg-center bg-no-repeat py-10 "
        >
          <div className="flex flex-col items-center gap-y-8">
            <ul className="border-2 border-[#0C6967] rounded-lg px-10 py-5 box-border space-y-3 list-disc bg-white w-[400px]">
              <h1 className="lg:text-lg text-base font-semibold -ml-4">
                For the Dough :{" "}
              </h1>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                120 gms refined flour
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/4 tsp baking powder
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/2 tsp salt water (for kneading)
              </li>
            </ul>

            <ul className="border-2 border-[#0C6967] rounded-lg px-10 py-5 box-border space-y-3 list-disc bg-white  w-[400px]">
              <h1 className="lg:text-lg text-base font-semibold -ml-4">
                For the Chicken Filling :{" "}
              </h1>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1 cup chicken (minced)
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/2 cup onions, finely chopped
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/4 tsp black pepper powder
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/4 tbsp oil
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/2 tsp garlic paste
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/2 tsp soya sauce
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                Salt
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/4 tsp vinegar
              </li>
            </ul>

            <ul className="border-2 border-[#0C6967] rounded-lg px-10 py-5 box-border space-y-3 list-disc bg-white  w-[400px]">
              <h1 className="lg:text-lg text-base font-semibold -ml-4">
                For the Vegetarian Filling :{" "}
              </h1>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1 cup cabbage and carrots, grated
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                2 tbsp onions , finely chopped
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/2 tsp garlic, finely chopped
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1 tbsp oil
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/4 tsp vinegar
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1/2 tsp soya sauce
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                to taste salt
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                to taste pepper
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1 tbsp cornflour
              </li>
            </ul>

            <ul className="border-2 border-[#0C6967] rounded-lg px-10 py-5 box-border space-y-3 list-disc bg-white  w-[400px]">
              <h1 className="lg:text-lg text-base font-semibold -ml-4">
                For Chilli Sauce :{" "}
              </h1>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                25 gram garlic, peeled
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                6 gms whole red chillies
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                3 tbsp vinegar
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                3 tbsp vinegar
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                3 tbsp vinegar
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                1 tbsp oil
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                to taste salt
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                to taste salt
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                to taste salt
              </li>
              <li className="lg:text-base text-sm text-[#101828] border-b-[1px] font-medium border-gray-300 py-[1px]">
                to taste sugar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ingredients;
