import React from "react";
import { ImCross } from "react-icons/im";

function Failure() {
  return (
    <div>
      <div className="py-16">
        <div className="flex justify-center flex-col items-center gap-y-5">
          <ImCross className="text-red-600 text-2xl size-40 hover:scale-105 ease-in-out duration-500" />
          <h1 className="font-bold text-2xl text-red-600">
            Transaction Failed !
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Failure;
