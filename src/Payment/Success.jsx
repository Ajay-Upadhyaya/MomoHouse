import React from "react";
import { useSearchParams } from "react-router-dom";

function Success() {
  const [searchParams] = useSearchParams();
  let val = searchParams.get("data");

  console.log(val);
  let info = atob(val);
  info = JSON.parse(val);
  console.log(info);

  return (
    <div className="py-16">
      <div className="flex justify-center flex-col items-center gap-y-5">
        <img
          src="https://shopogolic.net/ckfinder/userfiles/images/payment%20done.png"
          alt="Payment success image"
          className="w-40"
        />
        <div>
          <h1 className="font-bold text-2xl text-green-600">
            Payment Successful !
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Success;
