import React from "react";

import party from "../assets/images/party.png";
import qr from "../assets/images/qr.png";
import people from "../assets/images/people.png";
import catering from "../assets/images/catering.png";

function Servicehero2() {
  return (
    <>
      <div className="w-[80%] mx-auto  ">
        <div className="flex items-center py-7 px-4 box-border gap-32 ">
          <div className=" w-[50%] shadow-lg shadow-gray-200 px-5 py-5 rounded-lg">
            <div className="space-y-3 ">
              <img src={party} alt="Party image" className="size-10" />
              <h1 className="lg:text-xl text-base font-bold">Private Party </h1>
              <p className="text-[#6B788E] lg:text-sm text-xs leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
                adipiscing. Leo odio tincidunt ipsum magna lacus viverra
                tincidunt.
              </p>
            </div>
            <div className="flex py-5 gap-10">
              <div>
                <h1 className="lg:text-lg text-md font-bold text-[#0C6967]">
                  Scan the QR code{" "}
                </h1>
                <p className="text-[#6B788E] lg:text-sm text-xs ">
                  You can also check about the service
                </p>
              </div>
              <div>
                <img src={qr} alt="Qr code" className="size-[100px]" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={people}
              alt="People enjoying meal"
              className="size-[380px] hover:scale-105 ease-in-out duration-500 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-32   py-7 px-4 box-border  ">
          <div>
            <img
              src={people}
              alt="People enjoying meal"
              className="size-[370px] hover:scale-105 ease-in-out duration-500 cursor-pointer"
            />
          </div>
          <div className="flex items-center ml-10">
            <div className=" ] shadow-lg shadow-gray-200 px-5 py-5 rounded-lg">
              <div className="space-y-3 ">
                <img src={catering} alt="Party image" className="size-10" />
                <h1 className="lg:text-xl text-base font-bold">Catering </h1>
                <p className="text-[#6B788E] lg:text-sm text-xs leading-relaxed ">
                  Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem
                  ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra
                  tincidunt.
                </p>
              </div>
              <div className="flex py-5 gap-10 ">
                <div className="">
                  <h1 className="lg:text-lg text-md font-bold text-[#0C6967]">
                    Scan the QR code{" "}
                  </h1>
                  <p className="text-[#6B788E] lg:text-sm text-xs ">
                    You can also check about the service
                  </p>
                </div>
                <div>
                  <img src={qr} alt="Qr code" className="size-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicehero2;
