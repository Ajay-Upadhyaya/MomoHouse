import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

function Login() {
  const { loginWithRedirect } = useAuth0();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = { username: username, password: password };

    setAllData([...allData, newdata]);
    setUserName("");
    setPassword("");
    console.log(allData);
    console.log(newdata);
  };
  return (
    <>
      <div className="flex  justify-center  ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-y-5 px-20 py-10   shadow-lg  shadow-gray-200 rounded-lg my-20"
        >
          <h1 className="font-bold text-2xl cursor-pointer mb-8 ">
            Login to your account
          </h1>
          <label htmlFor="name">
            <h1 className="font-semibold">Username/Email</h1>
            <input
              type="text"
              placeholder="Username"
              id="name"
              className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-80"
              autoComplete="off"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            <h1 className="font-semibold">Password</h1>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-80"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <div className="flex justify-between  w-80">
            <div className="text-gray-500">
              <input type="checkbox" className="cursor-pointer " /> Remember me
            </div>

            <p className=" text-blue-600 font-semibold text-md cursor-pointer hover:underline ">
              Forgot Password?
            </p>
          </div>
          <div className="-mb-2 flex gap-4">
            <input type="checkbox" className="cursor-pointer -ml-10" />
            <p className="text-gray-500 font-serif">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer underline">
                terms and conditions.
              </span>
            </p>
          </div>
          <button className=" px-6 py-2 text-md font-semibold rounded-md cursor-pointer hover:bg-orange-500 hover:text-white mt-4 w-full  text-white bg-[#0c6967]">
            Login
          </button>
          <button
            onClick={() => loginWithRedirect()}
            className=" outline-1 outline-gray-300 cursor-pointer  flex gap-3 w-full  px-6 py-2 text-md font-semibold rounded-md  hover:bg-orange-500 hover:text-white justify-center items-center "
          >
            <FcGoogle size={30} /> Login with Google
          </button>
          <h2 className="text-lg text-gray-500">Don't have an account? </h2>
          <NavLink
            to="/signup "
            className={"text-blue-700 -mt-3 text-md font-semibold underline"}
          >
            Signup
          </NavLink>
        </form>
      </div>
    </>
  );
}

export default Login;
