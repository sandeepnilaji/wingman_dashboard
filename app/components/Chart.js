'use client'; // This is a client component

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Incoming',
        data: [45, 50, 55, 60, 65, 70, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Answered',
        data: [40, 45, 50, 55, 60, 65, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Experts online',
        data: [35, 40, 45, 50, 55, 60, 65],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 h-full w-full">
      <h3 className="text-xl font-bold mb-4">Insights</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
