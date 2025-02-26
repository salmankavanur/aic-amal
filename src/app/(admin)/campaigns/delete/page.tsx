"use client";
import React from "react";

export default function DeleteCampaignPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Delete Campaign</h2>
      <p>Select a campaign to delete.</p>
      <button className="px-4 py-2 bg-red-500 text-white rounded">Delete Selected Campaign</button>
    </div>
  );
}
