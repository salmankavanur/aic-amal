"use client";
import React, { useState } from "react";
import { Edit, Trash2, Plus, X } from "lucide-react";

// Define Campaign Type
type Campaign = {
  id: string;
  name: string;
  description: string;
  startDate: string;
};

// Mock Data
const mockUpcomingCampaigns: Campaign[] = [
  { id: "CMP-003", name: "Quran Distribution", description: "Distribute copies of the Quran worldwide.", startDate: "2024-04-10" },
  { id: "CMP-004", name: "New Orphan Sponsorship Program", description: "Support orphans with education and living needs.", startDate: "2024-05-15" },
];

export default function UpcomingCampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockUpcomingCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [newCampaign, setNewCampaign] = useState<Campaign>({
    id: "",
    name: "",
    description: "",
    startDate: "",
  });

  // Open Add Modal
  const openAddModal = () => {
    setIsModalOpen(true);
    setNewCampaign({ id: "", name: "", description: "", startDate: "" });
  };

  // Open Edit Modal (Fixed Type Issue)
  const openEditModal = (campaign: Campaign) => {
    setIsEditModalOpen(true);
    setSelectedCampaign(campaign);
    setNewCampaign({ ...campaign });
  };

  // Handle Input Change (Fixed Type Issue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCampaign({ ...newCampaign, [name]: value });
  };

  // Add New Campaign
  const handleAddCampaign = () => {
    if (!newCampaign.name || !newCampaign.startDate) {
      alert("Please fill in all required fields.");
      return;
    }

    const newEntry: Campaign = {
      id: `CMP-${Math.floor(Math.random() * 1000)}`,
      name: newCampaign.name,
      description: newCampaign.description,
      startDate: newCampaign.startDate,
    };

    setCampaigns([...campaigns, newEntry]);
    setIsModalOpen(false);
  };

  // Edit Campaign
  const handleEditCampaign = () => {
    if (!selectedCampaign) return;

    setCampaigns(
      campaigns.map((campaign) =>
        campaign.id === selectedCampaign.id ? { ...selectedCampaign, ...newCampaign } : campaign
      )
    );
    setIsEditModalOpen(false);
  };

  // Delete Campaign (Fixed Type Issue)
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this campaign?")) {
      setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Campaigns</h2>
        <button onClick={openAddModal} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          <Plus className="h-5 w-5" /> Add Campaign
        </button>
      </div>

      {/* Campaigns List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition hover:shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{campaign.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{campaign.description}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Start Date:</span> {new Date(campaign.startDate).toLocaleDateString()}
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-between">
              <button onClick={() => openEditModal(campaign)} className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <Edit className="h-4 w-4" /> Edit
              </button>
              <button onClick={() => handleDelete(campaign.id)} className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                <Trash2 className="h-4 w-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add & Edit Modals */}
      {(isModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{isEditModalOpen ? "Edit Campaign" : "Add New Campaign"}</h3>
              <button onClick={() => (isEditModalOpen ? setIsEditModalOpen(false) : setIsModalOpen(false))} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Form Fields */}
            <input type="text" name="name" value={newCampaign.name} onChange={handleChange} className="w-full p-3 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg" placeholder="Campaign Name *" />
            <textarea name="description" value={newCampaign.description} onChange={handleChange} className="w-full p-3 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg" placeholder="Description" />
            <input type="date" name="startDate" value={newCampaign.startDate} onChange={handleChange} className="w-full p-3 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg" />

            <button onClick={isEditModalOpen ? handleEditCampaign : handleAddCampaign} className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              {isEditModalOpen ? "Save Changes" : "Add Campaign"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
