import React from "react";
import circle from "../assets/images/circle.png";
import dot from "../assets/images/dot.png";
import momoplate from "../assets/images/momoplate.png";
import onebg from "../assets/images/onebg.png";
import dot2 from "../assets/images/dot2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function HomeMenu() {
  return (
    <div className="flex justify-between    ">
      <div className="lg:mt-28 mt-5 lg:ml-28 ml-5 space-y-7 box-border px-10 md:w-[35%] w-full flex flex-col md:justify-start md:items-start justify-center items-center ">
        <p className="text-[#6B788E] lg:text-md text-sm">RESTAURANT</p>
        <h1 className="lg:text-4xl text-2xl font-bold font-sans ">
          The{" "}
          <span
            style={{
              backgroundImage: `url(${onebg})`,
              backgroundSize: "cover",
            }}
            className="text-white"
          >
            #One
          </span>
          <br />
          Momo <span className="text-[#D95103]">Restaurant</span>
        </h1>
        <p className="text-[#6B788E] lg:text-md text-sm font-medium">
          More than{" "}
          <span className="font-semibold text-orange-600">20+ Varieties</span>{" "}
          of momo available for you
        </p>
        <NavLink to="/menu">
          {" "}
          <button className="bg-[#0C6967] lg:text-base md:text-sm text-xs text-white hover:bg-[#D95103] cursor-pointer py-4 px-8 flex items-center gap-2 rounded-4xl">
            Explore Food Menu <FaArrowRightLong size={20} />
          </button>
        </NavLink>
      </div>
      <div className="md:block hidden relative overflow-hidden box-border pt-10 lg:px-20 px-10   right-0">
        <img
          src={momoplate}
          alt="Momo plate"
          className="lg:w-[500px] w-[400px] lg:h-[380px] h-[340px] mt-12 relative right-8 z-20 "
        />
        <img
          src={dot}
          alt="Image "
          className=" relative lg:size-32 size-24 lg:-top-[420px] -top-[390px] right-16  -z-20 "
        />
        <img
          src={dot2}
          alt="Image "
          className=" relative  lg:size-32 size-24 lg:left-[380px] left-[300px]  lg:-top-[210px] -top-[180px] z-12 "
        />
        <img
          src={circle}
          alt="Circle"
          className=" absolute  -top-16 right-0  w-[400px] lg:h-[700px] h-[550px] z-10"
        />
      </div>
    </div>
  );
}

export default HomeMenu;
