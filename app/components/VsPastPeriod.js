import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const VsPastPeriod = () => {
  const data = {
    labels: ['This week', 'Last week', '2 Weeks ago', '3 Weeks ago'],
    datasets: [
      {
        label: 'Consultations',
        data: [22, 15, 18, 20], // Expanded data
        backgroundColor: '#C8F9F3', // Light green
        borderRadius: 4,
        barThickness: 30, // Uniform bar thickness
      },
      {
        label: 'Orders closed',
        data: [16, 13, 14, 17], // Expanded data
        backgroundColor: '#0D474F', // Dark green
        borderRadius: 4,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows dynamic height control
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical gridlines
        },
        ticks: {
          font: {
            size: 12,
            weight: '500',
          },
          color: '#333',
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: 30, // Dynamically adjust max height for the bars
        grid: {
          color: '#E2E8F0', // Subtle gridlines
          drawTicks: false,
        },
        ticks: {
          stepSize: 5, // Better spacing
          font: {
            size: 12,
          },
          color: '#333',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: 0,
    },
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 w-[300px] h-full"
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default VsPastPeriod;
