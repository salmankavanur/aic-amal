"use client";
import React from "react";

const mockUpcomingCampaigns = [
  { id: "CMP-003", name: "Quran Distribution", start_date: "2024-04-10" },
  { id: "CMP-004", name: "New Orphan Sponsorship Program", start_date: "2024-05-15" },
];

export default function UpcomingCampaignsPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Upcoming Campaigns</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        {mockUpcomingCampaigns.map((campaign) => (
          <div key={campaign.id} className="border-b pb-4 mb-4">
            <h3 className="text-lg font-semibold">{campaign.name}</h3>
            <p>Start Date: {campaign.start_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
