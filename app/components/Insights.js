"use client";

import React from "react";
import IncreaseIcon from "../Icons/IncreaseIcon";
import DecreaseIcon from "../Icons/DecreaseIcon";
import ConsultationIcon from "../Icons/ConsultationIcon";
import Icon2 from "../Icons/Icon2";
import Icon3 from "../Icons/Icon3";
import Icon4 from "../Icons/Icon4";
import Icon5 from "../Icons/Icon5";
import Icon6 from "../Icons/Icon6";
const Insights = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex gap-2 items-center">
            <ConsultationIcon />
            <h3 className="text-gray-500 font-[12px] uppercase">Consultations</h3>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">24</span>
          </div>
          <div className="flex gap-2 items-center">
            <IncreaseIcon />
            <span className="text-green-500 font-medium">15% increase</span>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex gap-2 items-center">
            <Icon2 />
            <h3 className="text-gray-500 font-[12px] uppercase">Orders Placed</h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">12</span>
          </div>
          <div className="flex gap-2 items-center">
            <DecreaseIcon />
            <span className="text-red-500 font-medium">15% decrease</span>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex gap-2 items-center">
            <Icon3 />
            <h3 className="text-gray-500 font-[12px] uppercase">Conversion</h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">50%</span>
          </div>
          <div className="flex gap-2 items-center">
            <DecreaseIcon />
            <span className="text-red-500 font-medium">15% decrease</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex gap-2 items-center">
            <Icon4 />
            <h3 className="text-gray-500 font-[12px] uppercase">Consultations</h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">24</span>
          </div>
          <div className="flex gap-2 items-center">
            <IncreaseIcon />
            <span className="text-green-500 font-medium">15% increase</span>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex gap-2 items-center">
            <Icon5 />
            <h3 className="text-gray-500 font-[12px] uppercase">Orders Placed</h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">12</span>
          </div>
          <div className="flex gap-2 items-center">
            <DecreaseIcon />
            <span className="text-red-500 font-medium">15% decrease</span>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex gap-2 items-center">
            <Icon6 />
            <h3 className="text-gray-500 font-[12px] uppercase">Conversion</h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">50%</span>
          </div>
          <div className="flex gap-2 items-center">
            <DecreaseIcon />
            <span className="text-red-500 font-medium">15% decrease</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
