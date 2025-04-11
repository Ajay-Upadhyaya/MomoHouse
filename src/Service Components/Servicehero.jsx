import React from "react";
import mansmiling from "../assets/images/mansmiling.png";
import { FaPlayCircle } from "react-icons/fa";
import servicebg from "../assets/images/servicebg.png";
import "../Pages/Fonts.css";

function Servicehero() {
  return (
    <div>
      <div className="flex items-center py-7 px-4 box-border gap-[15%] ">
        <div className="pl-3 box-border ml-[8.5%] w-[60%]">
          <h1 className="font-semibold  lg:text-2xl text-lg allura text-[#0C6967]">
            Our Services
          </h1>
          <p className="text-gray-400 lg:text-sm text-xs py-2">
            KNOWING OUR CUSTOMERS NEEDS
          </p>
          <h2 className="lg:text-xl text-base font-bold   ">
            <span className="text-orange-500 ">
              We are more than just momos. <br />
            </span>{" "}
            We are a full-service dining experience.
          </h2>
        </div>
        <div>
          <img
            src={mansmiling}
            alt="Chef smiling and posing"
            className="size-[45%] hover:scale-105 ease-in-out duration-500 cursor-pointer"
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: ` linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, rgba(46, 47, 46, 0.6)),  url(${servicebg})`,
        }}
        className="bg-cover bg-no-repeat bg-center h-[600px] relative overflow-hidden box-border  my-5 "
      >
        <h1 className=" text-white lg:text-2xl text-xl font-bold leading-relaxed pt-5 relative top-72 -right-32 max-w-[45%] ">
          Dine With Us
        </h1>
        <p className="text-white lg:text-md text-sm relative top-72 left-32 font-mono pt-2 mb-4 max-w-[45%]">
          Enjoy our momos in the comfort of your own home with our delivery
          services
        </p>
        <button className="  text-white cursor-pointer px-7 py-4 rounded-full bg-[#0C6967] lg:text-md text-sm flex items-center gap-3 hover:bg-orange-500 relative top-72 left-32 font-mono font-bold">
          <FaPlayCircle size={25} /> Watch the video
        </button>
      </div>
    </div>
  );
}

export default Servicehero;
