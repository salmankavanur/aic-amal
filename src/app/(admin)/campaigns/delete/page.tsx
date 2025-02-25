// src/app/(admin)/campaigns/delete/page.tsx
"use client";
import React from "react";

export default function DeleteCampaignPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Delete Campaign</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
        {/* Form to delete a campaign */}
        <p className="text-gray-600 dark:text-gray-300">Form to delete a campaign will be displayed here.</p>
      </div>
    </div>
  );
}