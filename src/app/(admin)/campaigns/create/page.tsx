"use client";
import React, { useState } from "react";

export default function CreateCampaignPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = () => {
    alert(`Campaign Created: ${name}`);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Create Campaign</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Campaign Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          placeholder="Campaign Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
          Create
        </button>
      </div>
    </div>
  );
}
