import React from "react";
import boywithdish from "../assets/images/boywithdish.png";
import { FaPlayCircle } from "react-icons/fa";
import quality from "../assets/images/quality.png";
import catering from "../assets/images/catering.png";
import party from "../assets/images/party.png";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function HomeSection4() {
  return (
    <>
      <div className="bg-[#F7F9FC] text-center py-5">
        <h1 className="font-bold lg:text-2xl text-xl py-8 ">
          <span className="text-[#D95103]"> We Offer People </span> The Service
          They Want
        </h1>
        <div
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, rgba(46, 47, 46, 0.6)),url(${boywithdish})`,
          }}
          className="bg-cover bg-center h-[600px] bg-no-repeat text-center text-white flex flex-col items-center justify-center gap-y-4"
        >
          <h1 className="text-white font-bold lg:text-2xl text-xl ">
            Process behind the making
          </h1>
          <p className="lg:text-md text-sm">
            See how only chefs cooks only the best momos
          </p>
          <button className="  text-white bg-[#0C6967] my-4 lg:text-base text-sm px-7 py-4 rounded-full flex items-center gap-3 cursor-pointer hover:bg-orange-500  font-mono font-bold">
            <FaPlayCircle size={25} /> Watch the video
          </button>
        </div>
      </div>

      <div className="flex justify-center w-[80%] mx-auto py-10">
        <div className="flex flex-col items-center gap-y-3 justify-center px-4">
          <img src={quality} alt="Image" className="size-12" />
          <h1 className="text-[#101828] text-base font-bold">Quality Food</h1>
          <p className="text-[#252D43] text-sm text-center">
            Only the best food with top quality products and ingredients
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-3 justify-center px-4">
          <img src={party} alt="Image" className="size-12" />
          <h1 className="text-[#101828] text-base font-bold">Quality Food</h1>
          <p className="text-[#252D43] text-sm text-center">
            Only the best food with top quality products and ingredients
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-3 justify-center px-4">
          <img src={catering} alt="Image" className="size-12" />
          <h1 className="text-[#101828] text-base font-bold">Quality Food</h1>
          <p className="text-[#252D43] text-sm text-center">
            Only the best food with top quality products and ingredients
          </p>
        </div>
      </div>

      <div className="mx-auto w-[80%] pb-8 flex justify-center">
        <NavLink to="/service">
          <button className="bg-[#0C6967] text-white hover:bg-[#D95103] cursor-pointer py-4 px-8 flex items-center gap-2 rounded-4xl">
            {" "}
            Explore Our Services <FaArrowRightLong size={20} />
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default HomeSection4;
