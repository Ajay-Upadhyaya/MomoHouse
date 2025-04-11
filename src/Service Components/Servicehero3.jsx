import React from "react";
import { NavLink } from "react-router-dom";

function Servicehero3() {
  return (
    <>
      <div className="bg-[#F5F6F7] w-[80%] flex flex-col items-center gap-y-5 mx-auto py-8 rounded-lg my-5">
        <h1 className="lg:text-2xl text-xl font-bold">Got Any Queries ?</h1>
        <p className="text-[#6B788E] lg:text-md text-sm">
          If you have any queries, send us a message. Our Friendly team would
          love to hear from you{" "}
        </p>
        <NavLink to="/contact">
          <button className="bg-[#0C6967] text-white hover:bg-[#D95103] lg:text-base text-sm cursor-pointer py-4 px-8 flex items-center gap-2 rounded-4xl">
            Get in Touch
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Servicehero3;
