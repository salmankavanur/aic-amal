// src/app/(admin)/donations/detail/page.tsx
"use client";
import React from "react";

export default function DetailedViewPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Donation Details</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
        {/* Detailed view of a specific donation */}
        <p className="text-gray-600 dark:text-gray-300">Detailed information about a specific donation will be displayed here.</p>
      </div>
    </div>
  );
}