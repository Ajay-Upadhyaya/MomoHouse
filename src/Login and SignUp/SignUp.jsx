import React from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

function SignUp() {
  return (
    <>
      <div className="flex  justify-center  ">
        <form
          action=""
          className="flex flex-col items-center gap-y-5 px-16 py-12  border-2 border-gray-300 rounded-lg my-20 "
        >
          <h1 className="font-bold text-2xl cursor-pointer ">
            Sign in to your account
          </h1>
          <div className="flex gap-2">
            <label htmlFor="fname">
              <h1 className="font-semibold">First name</h1>
              <input
                type="text"
                id="fname"
                className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-40"
                required
              />
            </label>
            <label htmlFor="lname">
              <h1 className="font-semibold">Last name</h1>
              <input
                type="text"
                id="lname"
                className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-40"
                required
              />
            </label>
          </div>

          <label htmlFor="email">
            <h1 className="font-semibold">Email</h1>
            <input
              type="text"
              id="email"
              className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-80"
              required
            />
          </label>
          <label htmlFor="password">
            <h1 className="font-semibold">Password</h1>
            <input
              type="password"
              id="password"
              className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-80"
              required
            />
          </label>
          <label htmlFor="password">
            <h1 className="font-semibold">Confirm password</h1>
            <input
              type="password"
              id="password"
              className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-80 "
              required
            />
          </label>

          <button
            className=" px-6 py-2 text-md font-semibold rounded-md bg-[#0C6967] text-white hover:bg-orange-500 cursor-pointer mt-4  font-mono"
            onSubmit={(e) => e.preventDefault()}
          >
            Sign in
          </button>

          <h2 className="font-semibold">Or sign in with</h2>
          <div className="flex gap-[10%]">
            <div className=" px-6 py-2 text-md font-semibold rounded-md  cursor-pointer    font-mono border-2 border-gray-300 hover:bg-gray-100 flex gap-2 ">
              <FcGoogle size={20} /> Google
            </div>

            <NavLink to={"https://www.facebook.com"}>
              <div className=" px-6 py-2 text-md font-semibold rounded-md   cursor-pointer   font-mono border-2 border-gray-300 hover:bg-gray-100 flex gap-2">
                <FaFacebook size={20} className="text-blue-500" />
                Facebook
              </div>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
