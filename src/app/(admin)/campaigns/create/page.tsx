"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function CreateCampaignPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = () => {
    if (!name || !startDate) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`Campaign Created: ${name}`);
    setShowPreview(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create Campaign</h2>

      {/* Form Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Campaign Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Campaign Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 flex items-center justify-center gap-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Plus className="h-5 w-5" /> Create Campaign
          </button>
        </div>
      </div>

      {/* Campaign Preview (Visible after Submission) */}
      {showPreview && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Preview</h3>
          <p className="text-gray-600 dark:text-gray-400">{description || "No description provided."}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <span className="font-semibold">Start Date:</span> {startDate}
          </p>
        </div>
      )}
    </div>
  );
}
