import React from "react";
import ladychef from "../assets/images/ladychef.png";
import aboutprocess from "../assets/images/aboutprocess.png";
import { FaPlayCircle } from "react-icons/fa";
import "../Pages/Fonts.css";

function Abouthero() {
  return (
    <div>
      <div className="flex items-center py-7 px-4 box-border gap-[20%] ">
        <div className="p-3 box-border ml-[8.5%]">
          <h1 className="font-semibold  lg:text-2xl text-lg allura  text-[#0C6967]">
            About Us
          </h1>
          <p className="text-gray-400 lg:text-sm text-xs py-2">
            WE PRIDE OURSELF ON
          </p>
          <h2 className="lg:text-2xl text-lg  font-bold  ">
            <span className="text-orange-500">Our authentic momo recipes</span>{" "}
            passed down through generations
          </h2>
        </div>
        <div>
          <img
            src={ladychef}
            alt="Lady chef"
            className="size-[45%] hover:scale-105 ease-in-out duration-600 cursor-pointer"
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, rgba(46, 47, 46, 0.6)), url(${aboutprocess})`,
        }}
        className="bg-cover bg-center w-full h-[600px] my-5 linear-gradient   "
      >
        <h1 className=" text-white lg:text-3xl text-xl font-bold leading-relaxed pt-5 relative top-72 -right-32 max-w-[45%] ">
          Process in the making
        </h1>
        <p className="text-white lg:text-md text-sm relative top-72 left-32 font-mono pt-2 mb-5 max-w-[45%]">
          See how we make the momos that you like from only the best ingredients
        </p>
        <button className="  text-white bg-[#0C6967] lg:text-base text-sm px-7 py-4 rounded-full flex items-center gap-3 cursor-pointer hover:bg-orange-500 relative top-72 left-32 font-mono font-bold">
          <FaPlayCircle size={25} /> Watch the video
        </button>
      </div>
    </div>
  );
}

export default Abouthero;
