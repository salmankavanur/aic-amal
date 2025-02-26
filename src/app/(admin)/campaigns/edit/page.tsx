"use client";
import React, { useState } from "react";

const mockCampaigns = [
  { id: "CMP-001", name: "Masjid Construction", description: "Building a mosque in the city." },
  { id: "CMP-002", name: "Ramadan Food Drive", description: "Providing food for the needy during Ramadan." },
];

export default function EditCampaignPage() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [selectedCampaignId, setSelectedCampaignId] = useState("CMP-001");
  const [updatedCampaign, setUpdatedCampaign] = useState({
    name: mockCampaigns[0].name,
    description: mockCampaigns[0].description,
  });

  // Handle selection of a campaign
  const handleSelectCampaign = (e) => {
    const selectedId = e.target.value;
    setSelectedCampaignId(selectedId);
    const selectedCampaign = campaigns.find((campaign) => campaign.id === selectedId);
    setUpdatedCampaign({ name: selectedCampaign?.name || "", description: selectedCampaign?.description || "" });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCampaign({ ...updatedCampaign, [name]: value });
  };

  // Handle update submission
  const handleUpdate = () => {
    if (!updatedCampaign.name.trim()) {
      alert("Campaign name cannot be empty.");
      return;
    }

    setCampaigns(
      campaigns.map((campaign) =>
        campaign.id === selectedCampaignId ? { ...campaign, ...updatedCampaign } : campaign
      )
    );

    alert(`Campaign Updated: ${updatedCampaign.name}`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Campaign</h2>

      {/* Edit Form Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="space-y-4">
          {/* Select Campaign */}
          <select
            onChange={handleSelectCampaign}
            value={selectedCampaignId}
            className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            {campaigns.map((campaign) => (
              <option key={campaign.id} value={campaign.id}>
                {campaign.name}
              </option>
            ))}
          </select>

          {/* Campaign Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Campaign Name *"
            value={updatedCampaign.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          {/* Campaign Description Input */}
          <textarea
            name="description"
            placeholder="Campaign Description"
            value={updatedCampaign.description}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          {/* Update Button */}
          <button
            onClick={handleUpdate}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Update Campaign
          </button>
        </div>
      </div>
    </div>
  );
}
