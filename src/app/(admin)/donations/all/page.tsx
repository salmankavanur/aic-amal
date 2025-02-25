// src/app/(admin)/donations/all/page.tsx
"use client";
import React, { useState } from "react";
import { 
  Search, 
  Download, 
  Filter, 
  Calendar, 
  ArrowUpDown,
  RefreshCw,
  Eye,
  Edit,
  Trash2,
  ChevronDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function AllDonationsPage() {
  // States for filters and search
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Mock data for donations
  const donations = [
    {
      id: "DON-7845",
      donor: "Ahmed Jaleel",
      amount: "₹5,000",
      type: "Yatheem",
      status: "Completed",
      date: "2023-11-22",
      email: "ahmed@example.com",
      phone: "+91 9876543210"
    },
    {
      id: "DON-7844",
      donor: "Fatima Salim",
      amount: "₹3,000",
      type: "General",
      status: "Completed",
      date: "2023-11-20",
      email: "fatima@example.com",
      phone: "+91 9876543211"
    },
    {
      id: "DON-7843",
      donor: "Mohammed Rafi",
      amount: "₹10,000",
      type: "Building",
      status: "Pending",
      date: "2023-11-18",
      email: "rafi@example.com",
      phone: "+91 9876543212"
    },
    {
      id: "DON-7842",
      donor: "Zainab Basheer",
      amount: "₹2,500",
      type: "Hafiz",
      status: "Completed",
      date: "2023-11-15",
      email: "zainab@example.com",
      phone: "+91 9876543213"
    },
    {
      id: "DON-7841",
      donor: "Hamza Kareem",
      amount: "₹7,500",
      type: "Yatheem",
      status: "Failed",
      date: "2023-11-10",
      email: "hamza@example.com",
      phone: "+91 9876543214"
    }
  ];

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    let bgColor = "bg-gray-500/20 text-gray-500";
    let icon = <AlertCircle className="h-3 w-3 mr-1" />;

    if (status === "Completed") {
      bgColor = "bg-green-500/20 text-green-500";
      icon = <CheckCircle className="h-3 w-3 mr-1" />;
    } else if (status === "Pending") {
      bgColor = "bg-amber-500/20 text-amber-500";
      icon = <Clock className="h-3 w-3 mr-1" />;
    } else if (status === "Failed") {
      bgColor = "bg-red-500/20 text-red-500";
      icon = <XCircle className="h-3 w-3 mr-1" />;
    }

    return (
      <span className={`px-2 py-1 rounded-full ${bgColor} flex items-center justify-center w-fit text-xs font-medium`}>
        {icon} {status}
      </span>
    );
  };

  // Type badge component
  const TypeBadge = ({ type }: { type: string }) => {
    let bgColor = "bg-blue-500/20 text-blue-500";

    if (type === "Yatheem") {
      bgColor = "bg-purple-500/20 text-purple-500";
    } else if (type === "Hafiz") {
      bgColor = "bg-indigo-500/20 text-indigo-500";
    } else if (type === "Building") {
      bgColor = "bg-amber-500/20 text-amber-500";
    }

    return (
      <span className={`px-2 py-1 rounded-full ${bgColor} text-xs font-medium`}>
        {type}
      </span>
    );
  };

  // Toggle sort order
  const toggleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">All Donations</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            View and manage all donations across your organization
          </p>
        </div>
        
        <div className="flex gap-2">
          <button className="px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300 flex items-center">
            <Download className="h-4 w-4 mr-2" /> Export
          </button>
          <button className="px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300 flex items-center">
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Main content section */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by donor name or ID..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 dark:text-gray-200"
            >
              <option value="">All Types</option>
              <option value="General">General</option>
              <option value="Yatheem">Yatheem</option>
              <option value="Hafiz">Hafiz</option>
              <option value="Building">Building</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 dark:text-gray-200"
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">To Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
          
          <button className="px-4 py-2 h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300 flex items-center">
            <Filter className="h-4 w-4 mr-2" /> Apply
          </button>
        </div>
        
        {/* Donations Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="sticky top-0 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-md p-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider rounded-tl-lg">
                  <div 
                    className="flex items-center cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={() => toggleSort('id')}
                  >
                    ID
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${sortBy === 'id' ? 'text-emerald-500' : ''}`} />
                  </div>
                </th>
                <th className="sticky top-0 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-md p-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <div 
                    className="flex items-center cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={() => toggleSort('donor')}
                  >
                    Donor Name
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${sortBy === 'donor' ? 'text-emerald-500' : ''}`} />
                  </div>
                </th>
                <th className="sticky top-0 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-md p-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <div 
                    className="flex items-center cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={() => toggleSort('amount')}
                  >
                    Amount
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${sortBy === 'amount' ? 'text-emerald-500' : ''}`} />
                  </div>
                </th>
                <th className="sticky top-0 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-md p-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="sticky top-0 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-md p-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="sticky top-0 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-md p-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <div 
                    className="flex items-center cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={() => toggleSort('date')}
                  >
                    Date
                    <ArrowUpDown className={`ml-1 h-4 w-4 ${sortBy === 'date' ? 'text-emerald-500' : ''}`} />
                  </div>
                </th>
                <th className="sticky top-0 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-md p-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider rounded-tr-lg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr 
                  key={donation.id} 
                  className={`hover:bg-white/5 dark:hover:bg-gray-800/50 backdrop-blur-md transition-all group ${
                    index % 2 === 0 ? 'bg-white/2' : 'bg-white/5 dark:bg-gray-800/20'
                  }`}
                >
                  <td className="p-3 text-sm font-medium text-gray-900 dark:text-white border-b border-white/10">
                    {donation.id}
                  </td>
                  <td className="p-3 border-b border-white/10">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {donation.donor}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {donation.email}
                    </div>
                  </td>
                  <td className="p-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 border-b border-white/10">
                    {donation.amount}
                  </td>
                  <td className="p-3 border-b border-white/10">
                    <TypeBadge type={donation.type} />
                  </td>
                  <td className="p-3 border-b border-white/10">
                    <StatusBadge status={donation.status} />
                  </td>
                  <td className="p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-white/10">
                    {new Date(donation.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="p-3 border-b border-white/10">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                      <Link 
                        href={`/donations/detail?id=${donation.id}`} 
                        className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link 
                        href={`/donations/status?id=${donation.id}`} 
                        className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button className="p-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800/50 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300">
              Previous
            </button>
            <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-all duration-300">
              1
            </button>
            <button className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300">
              2
            </button>
            <button className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300">
              3
            </button>
            <button className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}