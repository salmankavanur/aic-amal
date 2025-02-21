"use client";
import React from "react";

const DonationMetrics = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Donation Metrics</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg text-center">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Total Donations</h4>
          <p className="text-2xl font-bold text-brand-600 dark:text-white">₹50,000</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg text-center">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Active Campaigns</h4>
          <p className="text-2xl font-bold text-brand-600 dark:text-white">3</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg text-center">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">New Donations</h4>
          <p className="text-2xl font-bold text-brand-600 dark:text-white">5</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg text-center">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Recurring Donors</h4>
          <p className="text-2xl font-bold text-brand-600 dark:text-white">20</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg text-center">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Total Volunteers</h4>
          <p className="text-2xl font-bold text-brand-600 dark:text-white">50</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg text-center">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Donations This Month</h4>
          <p className="text-2xl font-bold text-brand-600 dark:text-white">₹15,000</p>
        </div>
      </div>
    </div>
  );
};

export default DonationMetrics;
