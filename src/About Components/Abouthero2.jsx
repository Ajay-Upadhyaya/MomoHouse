import React from "react";
import tattoo from "../assets/images/tattoo.png";
import ladyplating from "../assets/images/ladyplating.png";
import boywithdish from "../assets/images/boywithdish.png";
import steammomo from "../assets/images/steammomo.png";
import frymomo from "../assets/images/frymomo.png";
import halfplatemomo from "../assets/images/halfplatemomo.png";

function Abouthero2() {
  return (
    <>
      <div className="w-[80%] mx-auto py-7 px-4 box-border my-10 ">
        <div className="flex md:flex-row flex-col  gap-32 relative ">
          <div className="md:w-[50%] w-full space-y-3">
            <h1 className="lg:text-3xl  text-xl font-bold">
              Our momos are{" "}
              <span className="text-[#D95103]">made with love</span>
            </h1>
            <p className="text-[#6B788E] lg:text-base text-sm lg:leading-7 leading-8 mb-5">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div>
            <img
              src={tattoo}
              alt="Man plating"
              className="md:w-[300px] w-full hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />
            <img
              src={halfplatemomo}
              alt="momo"
              className="w-[130px] relative -top-10 -left-16 hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-32 md:flex-row flex-col relative ">
          <div>
            <img
              src={ladyplating}
              alt="Lady plating"
              className="md:w-[300px] w-full hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />
            <img
              src={frymomo}
              alt="Fry momo"
              className="w-[120px] relative right-10 -top-10 hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />
          </div>
          <div className="md:w-[50%] w-full space-y-2">
            <h1 className="lg:text-2xl  text-xl font-bold">
              Taste the difference with
              <span className="text-[#D95103]">
                {" "}
                our handcrafted momos
              </span>{" "}
            </h1>
            <p className="text-[#6B788E] lg:text-base text-sm md:leading-7 leading-8 mb-5">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-32 md:flex-row flex-col relative">
          <div className="md:w-[50%] w-full space-y-2">
            <h1 className="lg:text-2xl  text-xl font-bold">
              Our momos are the{" "}
              <span className="text-[#D95103]">perfect blend of tradition</span>{" "}
              and <span className="text-[#D95103]">innovation</span>
            </h1>
            <p className="text-[#6B788E] lg:text-base text-sm lg:leading-7 leading-8 mb-5">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div>
            <img
              src={boywithdish}
              alt="Boy with plate"
              className="md:w-[300px] w-full hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />
            <img
              src={steammomo}
              alt="steam momo"
              className="w-[130px] relative right-10 -top-10 hover:scale-105 ease-in-out duration-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouthero2;
