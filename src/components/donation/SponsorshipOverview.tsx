"use client";
import React from "react";

const SponsorshipOverview = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sponsorship Overview</h3>
      <div className="space-y-4">

        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Sponsor a Yatheem</h4>
          <p className="text-lg font-bold text-brand-600 dark:text-white">₹15,000 / ₹30,000</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Sponsor a Hafiz</h4>
          <p className="text-lg font-bold text-brand-600 dark:text-white">₹20,000 / ₹50,000</p>
        </div>

      </div>
    </div>
  );
};

export default SponsorshipOverview;
