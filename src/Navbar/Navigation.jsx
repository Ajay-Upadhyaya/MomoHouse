import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "../Pages/Fonts.css";
import { useAuth0 } from "@auth0/auth0-react";

import { CartContext } from "../Context/CartProvider";

function Navigation() {
  const { user, isAuthenticated, logout } = useAuth0();

  console.log(isAuthenticated && user);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    return setOpen(!open);
  };

  const { state } = useContext(CartContext);

  let totalItems = state.items.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  return (
    <>
      <div className="flex lg:flex-row  lg:items-center lg:justify-around justify-between lg:py-3 pl-5 border-b-[1px] border-gray-300 text-justify ">
        <div className="lg:mb-0 mb-3 ">
          <NavLink
            to="/"
            className="flex items-center lg:gap-3 gap-1 md:text-xl text-md font-semibold text-[#0C6967]  "
          >
            <img src={logo} alt="logo" className="lg:size-8 size-7 pt-1" />
            momos
          </NavLink>
        </div>
        <div className="flex items-center gap-3 ">
          <ul className="lg:flex hidden items-center gap-5 navbar ">
            <NavLink to="/about">
              <li className="md:text-lg text-sm font-semibold text-[#6B788E] hover:text-[#D95103]   active:text-red-500">
                {" "}
                About us
              </li>
            </NavLink>
            <NavLink to="/menu">
              <li className="md:text-lg text-sm font-semibold text-[#6B788E] hover:text-[#D95103]  active:text-red-500">
                {" "}
                Menu
              </li>
            </NavLink>
            <NavLink to="/services">
              <li className="md:text-lg text-sm font-semibold text-[#6B788E] hover:text-[#D95103]  active:text-red-500">
                Our Services
              </li>
            </NavLink>

            <NavLink to="/allergyadvice">
              <li className="md:text-lg text-sm font-semibold text-[#6B788E] hover:text-[#D95103]  active:text-red-500">
                {" "}
                Allergy Advice
              </li>
            </NavLink>

            <NavLink to="/cart">
              <li className="flex md:text-lg text-sm font-semibold  hover:text-red-500  active:text-red-500">
                {" "}
                <p>
                  <IoCartOutline className="text-2xl text-[#6B788E] hover:text-red-500" />{" "}
                </p>
                <span className="text-sm relative bottom-2 right-2 text-orange-600  bg-gray-200 w-5 h-5 rounded-full text-center">
                  {totalItems}
                </span>
              </li>
            </NavLink>
          </ul>

          <ul className="lg:flex hidden items-center gap-5 navbar ">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                }}
                className="md:text-lg text-sm font-semibold cursor-pointer bg-[#0C6967]  text-white py-2 px-4 rounded-xl hover:bg-[#D95103]  active:text-red-500"
              >
                {" "}
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <li className="md:text-lg text-sm font-semibold cursor-pointer bg-[#0C6967]  text-white py-2 px-4 rounded-xl hover:bg-[#D95103]  active:text-red-500">
                  {" "}
                  Login
                </li>
              </NavLink>
            )}
          </ul>
        </div>

        <div className="    lg:hidden relative  ">
          {open ? (
            <div className="flex  gap-5 bg-[#0C6967] opacity-90  text-white h-[100vh]  right-0 py-3 px-4 z-50 fixed">
              <ul className="flex  gap-5 lg:hidden flex-col ">
                <NavLink to="/about">
                  <li className="md:text-lg text-sm font-semibold text-white hover:text-red-500   active:text-red-500">
                    {" "}
                    About us
                  </li>
                </NavLink>
                <NavLink to="/menu">
                  <li className="md:text-lg text-sm font-semibold text-white hover:text-red-500   active:text-red-500">
                    {" "}
                    Menu
                  </li>
                </NavLink>
                <NavLink to="/services">
                  <li className="md:text-lg text-sm font-semibold text-white hover:text-red-500   active:text-red-500">
                    Our Services
                  </li>
                </NavLink>

                <NavLink to="/contact">
                  <li className="md:text-lg text-sm font-semibold text-white hover:text-red-500   active:text-red-500">
                    Contact
                  </li>
                </NavLink>

                <NavLink to="/allergyadvice">
                  <li className="md:text-lg text-sm font-semibold text-white hover:text-red-500   active:text-red-500">
                    {" "}
                    Allergy Advice
                  </li>
                </NavLink>

                {isAuthenticated ? (
                  <NavLink
                    to="/"
                    onClick={() => logout()}
                    className="md:text-lg text-sm font-semibold text-white hover:text-red-500   active:text-red-500"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <li className="md:text-lg text-sm font-semibold text-white hover:text-red-500   active:text-red-500">
                      {" "}
                      Login
                    </li>
                  </NavLink>
                )}

                <NavLink to="/cart">
                  <li className="md:text-lg flex text-sm font-semibold    active:text-red-500">
                    {" "}
                    <p>
                      <IoCartOutline className="text-2xl text-white hover:text-red-500" />{" "}
                    </p>
                    <span className="text-sm relative bottom-2 right-2 text-orange-600  bg-gray-200 w-5 h-5 rounded-full text-center">
                      {totalItems}
                    </span>
                  </li>
                </NavLink>
              </ul>

              <ImCross
                className=" text-white hover:text-[#D95103] mt-1 font-bold cursor-pointer"
                onClick={toggle}
              />
            </div>
          ) : (
            <IoMdMenu
              className="lg:text-2xl text-xl lg:my-0 my-2  text-[#6B788E] hover:text-[#D95103] font-bold cursor-pointer relative right-2"
              onClick={toggle}
            />
          )}
        </div>

        <div className=" items-center gap-5 lg:flex hidden">
          <NavLink to={"www.facebook.com"}>
            <FaFacebook className="text-2xl cursor-pointer text-blue-600 hover:scale-110 ease-in-out duration-500 " />
          </NavLink>
          <NavLink to={"www.instagram.com"}>
            <FaInstagram className="text-2xl  cursor-pointer text-pink-700 hover:scale-110 ease-in-out duration-500 " />
          </NavLink>
          <NavLink to={"www.tiktok.com"}>
            <IoLogoTiktok className="text-2xl  cursor-pointer hover:text-black over:scale-110 ease-in-out duration-500" />
          </NavLink>
          <NavLink
            to="/contact"
            className="md:text-lg text-sm font-semibold text-white bg-[#D95103] rounded-4xl px-6 py-2 hover:bg-[#0C6967]"
          >
            Contact
          </NavLink>
          <NavLink to={"/profile"}>
            {isAuthenticated && (
              <img
                src={user?.picture}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navigation;
