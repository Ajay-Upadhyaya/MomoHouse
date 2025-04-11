import React from "react";
import qr from "../assets/images/qr.png";
import { FaMobileAlt } from "react-icons/fa";

function MenuSection() {
  return (
    <>
      <div>
        <div className="space-y-3 text-center px-10">
          <h1 className="font-semibold lg:text-2xl text-xl allura text-[#0C6967] mt-10 mb-5">
            Our Menu
          </h1>
          <p className="lg:text-xl text-base font-bold text-center ">
            <span className="text-[#D95103]">
              Our menu is more than just momos,
            </span>
            with a variety of dishes to cater to all tastes and preferences.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 bg-[#FAFBFB] rounded-md py-5">
          <h1 className="text-[#0C6967] lg:text-xl text-lg font-bold">
            Scan the QR code
          </h1>
          <p className="text-[#6B788E] lg:text-base text-sm mb-5">
            You can also check the allergy advices using your phone as well
          </p>
          <img src={qr} alt="Qr code" className="w-[150px]" />
          <p className=" lg:text-lg text-sm flex items-center font-bold gap-1">
            <span className="text-[#D95103]">SCAN</span>ME!
            <FaMobileAlt size={24} />
          </p>
        </div>
      </div>
    </>
  );
}

export default MenuSection;
