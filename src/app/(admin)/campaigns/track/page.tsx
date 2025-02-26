"use client";
import React, { useState } from "react";

const mockCampaigns = [
  { id: "CMP-001", name: "Masjid Construction", progress: 75 },
  { id: "CMP-002", name: "Ramadan Food Drive", progress: 50 },
  { id: "CMP-003", name: "Quran Distribution", progress: 90 },
  { id: "CMP-004", name: "New Orphan Sponsorship Program", progress: 30 },
];

export default function TrackProgressPage() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [selectedCampaignId, setSelectedCampaignId] = useState(mockCampaigns[0]?.id || "");

  const selectedCampaign = campaigns.find((campaign) => campaign.id === selectedCampaignId);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Track Campaign Progress</h2>
      <p className="text-gray-600 dark:text-gray-400">Monitor the progress of active campaigns in real time.</p>

      {/* Tracking Form Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Select Campaign Dropdown */}
        <select
          value={selectedCampaignId}
          onChange={(e) => setSelectedCampaignId(e.target.value)}
          className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-purple-500"
        >
          {campaigns.map((campaign) => (
            <option key={campaign.id} value={campaign.id}>
              {campaign.name}
            </option>
          ))}
        </select>

        {/* Campaign Progress */}
        {selectedCampaign && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedCampaign.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Current Progress: {selectedCampaign.progress}%</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-3">
              <div
                className="bg-purple-500 h-3 rounded-full transition-all"
                style={{ width: `${selectedCampaign.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
