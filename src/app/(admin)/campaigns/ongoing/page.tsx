"use client";
import React, { useState } from "react";
import { Edit, Trash2, Plus, X } from "lucide-react";

const mockCampaigns = [
  { id: "CMP-001", name: "Masjid Construction", progress: 75, status: "Active" },
  { id: "CMP-002", name: "Ramadan Food Drive", progress: 50, status: "Active" },
];

export default function OngoingCampaignsPage() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    description: "",
    startDate: "",
    progress: 0,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCampaign({ ...newCampaign, [name]: value });
  };

  // Handle form submission
  const handleAddCampaign = () => {
    if (!newCampaign.name || !newCampaign.startDate) {
      alert("Please fill in all required fields.");
      return;
    }

    const newEntry = {
      id: `CMP-${Math.floor(Math.random() * 1000)}`,
      name: newCampaign.name,
      progress: parseInt(newCampaign.progress.toString(), 10) || 0,
      status: "Active",
    };

    setCampaigns([...campaigns, newEntry]);
    setIsModalOpen(false);
    setNewCampaign({ name: "", description: "", startDate: "", progress: 0 });
  };

  // Handle delete
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this campaign?")) {
      setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ongoing Campaigns</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <Plus className="h-5 w-5" /> Add Campaign
        </button>
      </div>

      {/* Campaigns List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition hover:shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{campaign.name}</h3>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400">
                Progress: <span className="font-medium">{campaign.progress}%</span>
              </p>
              <p
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  campaign.status === "Active"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                }`}
              >
                {campaign.status}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-3">
              <div
                className="bg-green-500 h-2.5 rounded-full transition-all"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-between">
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <Edit className="h-4 w-4" /> Edit
              </button>
              <button
                onClick={() => handleDelete(campaign.id)}
                className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                <Trash2 className="h-4 w-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Campaign Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add New Campaign</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Form Fields */}
            <input
              type="text"
              name="name"
              placeholder="Campaign Name *"
              value={newCampaign.name}
              onChange={handleChange}
              className="w-full p-3 mb-3 bg-gray-100 dark:bg-gray-800 border rounded-lg focus:ring focus:ring-green-400 text-gray-900 dark:text-white"
            />
            <textarea
              name="description"
              placeholder="Campaign Description"
              value={newCampaign.description}
              onChange={handleChange}
              className="w-full p-3 mb-3 bg-gray-100 dark:bg-gray-800 border rounded-lg focus:ring focus:ring-green-400 text-gray-900 dark:text-white"
            />
            <input
              type="date"
              name="startDate"
              value={newCampaign.startDate}
              onChange={handleChange}
              className="w-full p-3 mb-3 bg-gray-100 dark:bg-gray-800 border rounded-lg focus:ring focus:ring-green-400 text-gray-900 dark:text-white"
            />
            <input
              type="number"
              name="progress"
              placeholder="Progress (%)"
              value={newCampaign.progress}
              onChange={handleChange}
              className="w-full p-3 mb-3 bg-gray-100 dark:bg-gray-800 border rounded-lg focus:ring focus:ring-green-400 text-gray-900 dark:text-white"
            />

            {/* Submit Button */}
            <button
              onClick={handleAddCampaign}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Add Campaign
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
