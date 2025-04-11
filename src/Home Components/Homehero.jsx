import React from "react";
import manthumbsup from "../assets/images/manthumbsup.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Homehero() {
  return (
    <div className="lg:my-0 my-2">
      <div className="  p-3 box-border flex md:flex-row flex-col items-center gap-[18%] mb-3 ">
        <div className="ml-[8.5%]">
          <img
            src={manthumbsup}
            alt="Man with thumbs up"
            className="w-[280px]   hover:scale-105 ease-in-out duration-600 cursor-pointer"
          />
        </div>
        <div className="lg:mt-0 mt-8">
          <h1 className="lg:text-3xl md:text-xl text-base font-bold ">
            Why Customers <span className="text-[#D95103]">Love Us</span>
          </h1>
          <p className="max-w-96 text-justify lg:my-6  md:my-4 my-3 text-sm text-[#6B788E]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            voluptatem ab, repellendus ratione exercitationem suscipit
            praesentium nobis nam neque obcaecati quas molestiae nihil alias.
            Dolores voluptatum molestias modi, placeat molestiae ipsa corporis
            tempora earum dolore debitis laudantium soluta. Similique, ad!
          </p>
          <NavLink to="/about">
            <button className="bg-[#0C6967] text-white lg:text-base md:text-sm text-xs hover:bg-[#D95103] cursor-pointer py-4 px-8 flex items-center gap-2 rounded-4xl">
              {" "}
              Explore Our Story <FaArrowRightLong size={20} />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Homehero;
