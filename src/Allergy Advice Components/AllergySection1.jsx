import React from "react";
import mansmiling from "../assets/images/mansmiling.png";
import "../Pages/Fonts.css";

function AllergySection1() {
  return (
    <div>
      <div className="flex items-center py-7 px-4 box-border gap-32">
        <div className="p-3 box-border ml-[8.5%] w-[45%]">
          <h1 className="font-semibold  lg:text-xl text-lg allura  text-[#0C6967]">
            Allergy Advices
          </h1>
          <p className="text-gray-400 lg:text-sm text-xs py-2">
            AT OUR RESTAURANT
          </p>
          <h2 className="lg:text-2xl text-lg  font-bold  ">
            We use only the freshest and highest quality ingredients in all our
            dishes,
            <span className="text-[#D95103]">
              and offer transparency in our ingredient labeling.
            </span>
          </h2>
        </div>
        <div>
          <img
            src={mansmiling}
            alt="Chef smiling and posing"
            className="w-[300px] hover:scale-105 ease-in-out duration-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AllergySection1;
