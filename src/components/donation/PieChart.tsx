"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Yatheem", "Hafiz", "Building", "General"],
    datasets: [
      {
        data: [300, 50, 100, 40],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Ensure the position is one of the allowed values
        labels: {
          color: "#333", // Light mode text color
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;