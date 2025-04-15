import React from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import { useLocation, NavLink } from "react-router-dom";

function Payment() {
  let transaction_uuid = uuidv4();
  console.log(transaction_uuid);

  const location = useLocation();
  console.log(location.state.totalPrice);

  let total_amount = location.state.totalPrice;

  let Items = location.state.quantity;

  console.log(location.state.quantity);

  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;

  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="py-20">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="flex flex-col items-center shadow-lg shadow-gray-400 py-10 gap-y-5 w-80 mx-auto rounded-lg"
      >
        <input
          type="hidden"
          id="amount"
          name="amount"
          value={total_amount}
          required
        />
        <input
          type="hidden"
          id="tax_amount"
          name="tax_amount"
          value="0"
          required
        />
        <input
          type="hidden"
          id="total_amount"
          name="total_amount"
          value={total_amount}
          required
        />
        <input
          type="hidden"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transaction_uuid}
          required
        />
        <input
          type="hidden"
          id="product_code"
          name="product_code"
          value="EPAYTEST"
          required
        />
        <input
          type="hidden"
          id="product_service_charge"
          name="product_service_charge"
          value="0"
          required
        />
        <input
          type="hidden"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value="0"
          required
        />
        <input
          type="hidden"
          id="success_url"
          name="success_url"
          value="https://momo-house-six.vercel.app/success"
          required
        />
        <input
          type="hidden"
          id="failure_url"
          name="failure_url"
          value="https://momo-house-six.vercel.app/failure"
          required
        />
        <input
          type="hidden"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />
        <input
          type="hidden"
          id="signature"
          name="signature"
          value={hashInBase64}
          required
        />
        <div className="space-y-2">
          <p className="text-xl font-semibold">
            Total Amount : Rs.<span className="text-2xl"> {total_amount}</span>
          </p>
          <p className="text-xl font-semibold">Total Quantity : {Items}</p>
        </div>

        <input
          value="Pay Now"
          type="submit"
          className="bg-[#0C6967] w-36 py-3 px-7 text-white hover:bg-orange-500 cursor-pointer hover:scale-105 ease-in-out duration-600"
        />
        <NavLink to="/cart">
          <input
            value="Cancel"
            type="submit"
            className="bg-red-500 w-36 py-3 px-7 text-white  hover:bg-red-600 cursor-pointer hover:scale-105 ease-in-out duration-600"
          />
        </NavLink>
      </form>
    </div>
  );
}

export default Payment;
