import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <>
      <div className="flex lg:gap-[10%] gap-[5%] lg:px-12 px-9 pb-4 pt-10 box-border bg-gray-50 ">
        <div className="w-[40%]">
          <div className="flex mr-5">
            <img
              src={logo}
              alt="momologo"
              className="lg:size-6 lg:mr-5 mr-2 size-5  "
            />
            <NavLink
              to="/"
              className="font-bold font-mono lg:text-xl text-base logo-head mb-2 text-[#0C6967]"
            >
              momos
            </NavLink>
          </div>
          <p className="text-gray-500 max-w-[80%] text-justify lg:text-sm text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus explicabo facilis nostrum hic rem quasi debitis.
            Dignissimos voluptas voluptate est.
          </p>
        </div>
        <div className="flex flex-col text-justify">
          <h1 className="logohead font-bold pb-2">momos</h1>
          <NavLink
            to="/about"
            className="hover:text-orange-500 text-gray-500 lg:text-sm text-xs "
          >
            About Us
          </NavLink>

          <NavLink
            to="/menu"
            className="hover:text-orange-500 text-gray-500 lg:text-sm text-xs "
          >
            Our Menu
          </NavLink>
          <NavLink
            to="/service"
            className="hover:text-orange-500 text-gray-500 lg:text-sm text-xs"
          >
            Our Services
          </NavLink>
          <NavLink
            to="/contact"
            className=" hover:text-orange-500 text-gray-500 lg:text-sm text-xs"
          >
            Contact us
          </NavLink>
        </div>
        <div className="legals flex flex-col text-justify ">
          <h1 className="logohead font-bold pb-2">Legals</h1>
          <p className="text-gray-500 lg:text-sm text-xs">
            {" "}
            Terms & Conditions
          </p>
          <p className="text-gray-500 lg:text-sm text-xs"> Privacy Policy</p>
          <p className="text-gray-500 lg:text-sm text-xs"> Support</p>
        </div>
        <div className="flex flex-col ml-3 ">
          <h1 className="logohead font-bold pb-3">Follow Us</h1>
          <div className="flex gap-3 flex-wrap w-24">
            <NavLink to="https://www.facebook.com/" target="_blank">
              <FaFacebook
                size={20}
                className="text-gray-400 hover:text-blue-500 cursor-pointer"
              />
            </NavLink>
            <NavLink to="https://www.instagram.com/" target="_blank">
              <FaInstagram
                size={20}
                className="text-gray-400 hover:text-pink-500 cursor-pointer"
              />
            </NavLink>

            <NavLink to="https://twitter.com/" target="_blank">
              <FaTwitter
                size={20}
                className="text-gray-400 hover:text-blue-500 cursor-pointer"
              />
            </NavLink>
            <NavLink to="https://www.linkedin.com" target="_blank">
              {" "}
              <FaLinkedin
                size={20}
                className="text-gray-400 hover:text-blue-500 cursor-pointer"
              />
            </NavLink>

            <NavLink to={"https://www.youtube.com/"} target="_blank">
              <FaYoutube
                size={20}
                className="text-gray-400 hover:text-red-600 cursor-pointer"
              />
            </NavLink>
            <NavLink to={"https://www.tiktok.com/"} target="_blank">
              <IoLogoTiktok
                size={20}
                className="text-gray-400 hover:text-black cursor-pointer"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 py-3 text-center">
        <p className="text-gray-400 lg:text-sm text-xs">
          {" "}
          Copyright &copy;2024 Darjeeling Momo Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
