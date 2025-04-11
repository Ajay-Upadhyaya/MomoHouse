import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import "../Pages/Fonts.css";

function ContactSection1() {
  return (
    <>
      <div className="text-center my-10">
        <h1 className="font-semibold lg:text-2xl text-xl allura text-[#0C6967] my-10">
          Our Contact
        </h1>
        <div className="mb-5 space-y-1">
          <p className="text-sm text-[#6B788E]">GET IN TOUCH</p>
          <h2 className="lg:text-xl text-lg font-bold ">
            <span className="text-[#D95103]">Our Friendly Team</span> would love
            to hear from you
          </h2>
        </div>
        <div className="flex justify-center lg:gap-16 gap-10 lg:my-8 my-5 flex-wrap">
          <div className=" lg:w-[250px] w-auto flex flex-col py-5 gap-y-5 px-5 rounded-lg shadow-lg shadow-gray-200 cursor-pointer hover:scale-105 ease-in-out duration-500">
            <h1 className="font-bold text-base flex gap-x-3 items-center">
              <FaLocationDot size={20} className="text-red-400" /> LOCATION
            </h1>
            <p className="text-sm text-center">
              New Baneshwor -41201,
              <br /> Kathmandu, Bagmati, Nepal
            </p>
          </div>
          <div className="lg:w-[250px] w-auto flex flex-col py-5 gap-y-5 px-5 rounded-lg shadow-lg shadow-gray-200 cursor-pointer hover:scale-105 ease-in-out duration-500">
            <h1 className="font-bold text-base flex gap-x-3 items-center">
              <FaPhoneAlt size={20} className="text-red-400" />
              PHONE
            </h1>
            <table>
              <tbody>
                <tr>
                  <th className="text-[#0C6967] text-sm">Mobile :</th>
                  <td className="text-sm">(+977 9865519853)</td>
                </tr>
                <tr>
                  <th className="text-[#0C6967] text-sm">Tel :</th>
                  <td className="text-sm">057-523655</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lg:w-[250px] w-auto flex flex-col py-5 gap-y-5 px-5 rounded-lg shadow-lg shadow-gray-200 cursor-pointer hover:scale-105 ease-in-out duration-500">
            <h1 className="font-bold text-base flex gap-x-3 items-center">
              <FaClock size={20} className="text-red-400" />
              SERVICE-TIME
            </h1>
            <table>
              <tbody>
                <tr>
                  <th className="text-[#0C6967] text-sm">Mon - Fri :</th>
                  <td className="text-sm text-end"> 8 am - 8 pm</td>
                </tr>
                <tr>
                  <th className="text-[#0C6967] text-sm">Sat - Sun :</th>
                  <td className="text-sm text-end">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection1;
