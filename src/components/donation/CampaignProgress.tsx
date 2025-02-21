"use client";
import React from "react";

const CampaignProgress = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Campaign Progress</h3>
      <div className="space-y-4">
        
        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Dates Challenge</h4>
          <p className="text-lg font-bold text-brand-600 dark:text-white">₹20,000 / ₹50,000</p>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-2">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">She-Fine Campus Masjid Construction</h4>
          <p className="text-lg font-bold text-brand-600 dark:text-white">₹30,000 / ₹100,000</p>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-2">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CampaignProgress;
