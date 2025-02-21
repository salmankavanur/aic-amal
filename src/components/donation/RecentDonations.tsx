"use client";
import React from "react";

const RecentDonations = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Donations</h3>
      <div className="space-y-4">

        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Donor: John Doe</h4>
          <p className="text-lg font-bold text-brand-600 dark:text-white">₹5,000</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Donor: Jane Smith</h4>
          <p className="text-lg font-bold text-brand-600 dark:text-white">₹3,000</p>
        </div>

      </div>
    </div>
  );
};

export default RecentDonations;
