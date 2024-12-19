"use client";

import React, { useState } from "react";
import DataTable from "./components/DataTable";
import Insights from "./components/Insights";
import Chart from "./components/Chart";
import Sidebar from "./components/Sidebar";
import VsPastPeriod from "./components/VsPastPeriod";
import Image from "next/image";
import Forecast from "./Icons/Forecast";

const DashboardPage = () => {
 
  return (
    <div className="flex h-screen">
      <div
        className={`flex-1 p-8 `}
      >
        <Insights />
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="col-span-2 h-[499px]">
            <Chart />
          </div>
          <div className="col-span-1 h-[499px]">
            <VsPastPeriod />
          </div>
          <div className="col-span-1 h-[499px]">
            <Forecast />
          </div>
        </div>
        <DataTable />
      </div>
    </div>
  );
};

export default DashboardPage;
