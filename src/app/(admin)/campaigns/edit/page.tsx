"use client";
import React, { useState } from "react";

export default function EditCampaignPage() {
  const [selectedCampaign, setSelectedCampaign] = useState("CMP-001");
  const [updatedName, setUpdatedName] = useState("");

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Edit Campaign</h2>
      <select onChange={(e) => setSelectedCampaign(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option value="CMP-001">Masjid Construction</option>
        <option value="CMP-002">Ramadan Food Drive</option>
      </select>
      <input
        type="text"
        placeholder="New Name"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button className="px-4 py-2 bg-indigo-500 text-white rounded">Update</button>
    </div>
  );
}
