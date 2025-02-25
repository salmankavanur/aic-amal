// src/app/(admin)/donations/status/page.tsx
"use client";
import React, { useState } from "react";

export default function UpdateStatusPage() {
  const [status, setStatus] = useState("Pending");

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Update Donation Status</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Donor Name</h4>
            <p className="text-lg font-bold text-brand-600 dark:text-white">John Doe</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Amount</h4>
            <p className="text-lg font-bold text-brand-600 dark:text-white">₹5,000</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Current Status</h4>
            <p className="text-lg font-bold text-brand-600 dark:text-white">{status}</p>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Update Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-white/10 backdrop-blur-md rounded-lg p-2 text-gray-800 dark:text-gray-200 border border-white/20 w-full"
            >
              <option>Pending</option>
              <option>Completed</option>
              <option>Failed</option>
            </select>
          </div>
          <button className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-all">
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
}