import React from "react";
import first from "./first.svg";
import second from "./second.svg";
import third from "./third.svg";

function Prizes() {
  return (
    <div className="m-[10%] font-bold">
      <h1 className="text-gray-300 align-middle text-center text-5xl mb-[5%]">
        Prizes
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-3 gap-4">
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5 md:col-span-6 lg:col-span-1">
          <img src={first} alt="ar" className="w-[50%] mx-auto" />
          <h1 className="text-2xl font-bold my-5">First Prize</h1>
          <h1 className="text-2xl font-bold my-5">₹1,00,000</h1>
        </div>
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5 md:col-span-6 lg:col-span-1 ">
          <img src={second} alt="ar" className="w-[50%] mx-auto" />
          <h1 className="text-2xl font-bold my-5">Second Prize</h1>
          <h1 className="text-2xl font-bold my-5">₹75,000</h1>
        </div>
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5 md:col-span-6 md:col-start-4 lg:col-span-1">
          <img src={third} alt="ar" className="w-[50%] mx-auto" />
          <h1 className="text-2xl font-bold my-5">Third Prize</h1>
          <h1 className="text-2xl font-bold my-5">₹50,000</h1>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
