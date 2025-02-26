"use client";
import React, { useState } from "react";

const mockCampaigns = [
  { id: "CMP-001", name: "Masjid Construction" },
  { id: "CMP-002", name: "Ramadan Food Drive" },
  { id: "CMP-003", name: "Quran Distribution" },
  { id: "CMP-004", name: "New Orphan Sponsorship Program" },
];

export default function DeleteCampaignPage() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [selectedCampaignId, setSelectedCampaignId] = useState(mockCampaigns[0]?.id || "");

  // Handle delete campaign
  const handleDelete = () => {
    if (!selectedCampaignId) {
      alert("Please select a campaign to delete.");
      return;
    }

    const selectedCampaign = campaigns.find((campaign) => campaign.id === selectedCampaignId);
    if (!selectedCampaign) return;

    const confirmDelete = confirm(`Are you sure you want to delete "${selectedCampaign.name}"?`);
    if (!confirmDelete) return;

    setCampaigns(campaigns.filter((campaign) => campaign.id !== selectedCampaignId));
    alert(`Campaign Deleted: ${selectedCampaign.name}`);
    setSelectedCampaignId(campaigns.length > 1 ? campaigns[1].id : "");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Delete Campaign</h2>
      <p className="text-gray-600 dark:text-gray-400">Select a campaign to delete. This action is irreversible.</p>

      {/* Delete Form Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        {campaigns.length > 0 ? (
          <>
            {/* Select Campaign Dropdown */}
            <select
              value={selectedCampaignId}
              onChange={(e) => setSelectedCampaignId(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              {campaigns.map((campaign) => (
                <option key={campaign.id} value={campaign.id}>
                  {campaign.name}
                </option>
              ))}
            </select>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="w-full px-4 py-2 mt-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Delete Selected Campaign
            </button>
          </>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No campaigns available for deletion.</p>
        )}
      </div>
    </div>
  );
}
