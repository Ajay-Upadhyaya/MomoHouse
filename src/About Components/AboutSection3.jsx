import React from "react";

import cafe from "../assets/images/cafe.png";
import marcus from "../assets/images/marcus.png";
import headchef from "../assets/images/headchef.png";
import assistant1 from "../assets/images/assistant1.png";
import assistant2 from "../assets/images/assistant2.png";
import quote from "../assets/images/quote.png";

function AboutSection3() {
  return (
    <>
      <div className="flex ">
        <div
          style={{
            backgroundImage: ` linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, rgba(46, 47, 46, 0.6)) ,url(${cafe})`,
          }}
          className="bg-cover bg-center py-16 px-16 box-border space-y-5 "
        >
          <img src={quote} alt="Quote" className="w-[60px] " />
          <p className="text-[#FFFFFF] lg:text-base text-sm leading-7">
            Momo is not just about sustenance, it's about bringing people
            together and creating memories. At our restaurant, we strive to
            create a warm and inviting atmosphere where our guests can enjoy
            delicious momo, great company, and unforgettable experiences
          </p>
          <h1 className="text-[#FFFFFF] lg:text-2xl text-lg font-bold">
            Marcus Schleifer <br />{" "}
            <span className="text-[#FFFFFF] lg:text-lg text-md font-bold font-mono">
              {" "}
              CEO
            </span>
          </h1>
        </div>
        <div>
          <img src={marcus} alt="Marcus Image" className="h-full" />
        </div>
      </div>

      <div className="w-[80%] mx-auto my-10">
        <div className="text-center space-y-2">
          <h1 className="font-bold lg:text-3xl text-lg">
            Meet The <span className="text-[#D95103]">Team</span>
          </h1>
          <p className="text-[#0C6967] font-medium lg:text-base text-sm ">
            Our talented team members who delivers only the best results
          </p>
        </div>
        <div className="flex justify-center gap-5 py-5 relative">
          <li className="list-none">
            <img
              src={headchef}
              alt="Head chef"
              className="w-[250px] h-[350px] rounded-md hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />{" "}
            <span className="text-white font-bold lg:text-lg text-md relative bottom-10 px-4">
              Head chef
            </span>
          </li>
          <li className="list-none">
            <img
              src={assistant1}
              alt="Assistant chef"
              className="w-[250px] h-[350px] rounded-md hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />{" "}
            <span className="text-white font-bold lg:text-lg text-md relative bottom-10 px-4">
              Assistant chef
            </span>
          </li>
          <li className="list-none">
            <img
              src={assistant2}
              alt="Assistant chef"
              className="w-[250px] h-[350px] rounded-md hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />{" "}
            <span className="text-white font-bold lg:text-lg text-md relative bottom-10 px-4">
              Assistant chef
            </span>
          </li>
        </div>
      </div>
    </>
  );
}

export default AboutSection3;
