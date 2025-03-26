import React from "react";

const PaymentForm = () => {
  return (
    <div className="mt-1000 flex flex-col items-center p-6 bg-white shadow-lg rounded-xl w-56">
      {/* Digital Wallet Buttons */}
      <button className="w-full bg-black text-white py-2 rounded-md mb-2 flex justify-center items-center gap-2">
        <span className="text-lg"></span> Pay
      </button>
      <button className="w-full bg-white border py-2 rounded-md mb-4 flex justify-center items-center gap-2">
        <span className="text-lg text-red-500">G</span>
        <span className="text-lg text-blue-500">o</span>
        <span className="text-lg text-yellow-500">o</span>
        <span className="text-lg text-green-500">g</span>
        <span className="text-lg text-red-500">l</span>
        <span className="text-lg text-blue-500">e</span> Pay
      </button>

      <div className="flex items-center w-full my-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-2 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Card Payment Fields */}
      <div className="w-full text-gray-600 font-semibold mb-2">PAYMENT DETAILS</div>
      <input
        type="text"
        placeholder="Card number"
        className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="MM / YY"
          className="w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Postal"
          className="w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition">
        Pay with Card
      </button>
    </div>
  );
};

export default PaymentForm;
