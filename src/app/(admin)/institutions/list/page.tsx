"use client";
import React, { useState } from "react";
import { Edit, Trash2, Plus, X, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

const mockInstitutions = [
  { id: "INS-001", name: "Masjidusswabaha", location: "India", students: 450 },
  { id: "INS-002", name: "Oorkadavu Qasim Musliyar Thahfeezul Quran College", location: "India", students: 320 },
  { id: "INS-003", name: "Islamic Da'wa Academy", location: "India", students: 280 },
  { id: "INS-004", name: "Daiya Islamic Academy for Women", location: "India", students: 350 },
  { id: "INS-005", name: "Bright Public Nursery School", location: "India", students: 500 },
  { id: "INS-006", name: "Ayaadi Life Education (Upskill Project for Yatheem)", location: "India", students: 200 },
];

export default function InstitutionsListPage() {
  const [institutions, setInstitutions] = useState(mockInstitutions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState<typeof mockInstitutions[0] | null>(null);
  const [newInstitution, setNewInstitution] = useState({
    name: "",
    location: "",
    students: "",
  });

  const openAddModal = () => {
    setIsModalOpen(true);
    setNewInstitution({ name: "", location: "", students: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewInstitution({ ...newInstitution, [name]: value });
  };

  const handleAddInstitution = () => {
    if (!newInstitution.name || !newInstitution.location) {
      alert("Please fill in all required fields.");
      return;
    }

    const newEntry = {
      id: `INS-${Math.floor(Math.random() * 1000)}`,
      name: newInstitution.name,
      location: newInstitution.location,
      students: parseInt(newInstitution.students.toString(), 10) || 0,
    };

    setInstitutions([...institutions, newEntry]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Institutions</h2>
        <button onClick={openAddModal} className="flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md">
          <Plus className="h-5 w-5" /> Add Institution
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {institutions.map((institution) => (
          <div key={institution.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{institution.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{institution.location}</p>
            <p className="text-gray-600 dark:text-gray-400">Students: {institution.students}</p>
            <div className="mt-4 flex justify-between">
              <Link href={`/institutions/edit?id=${institution.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md flex items-center gap-2">
                <Edit className="h-4 w-4" /> Edit
              </Link>
              <Link href={`/institutions/delete?id=${institution.id}`} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all shadow-md flex items-center gap-2">
                <Trash2 className="h-4 w-4" /> Delete
              </Link>
              <Link href={`/institutions/allocations?id=${institution.id}`} className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all shadow-md flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Allocations
              </Link>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add New Institution</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <input type="text" name="name" value={newInstitution.name} onChange={handleChange} className="w-full p-4 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg shadow-md" placeholder="Institution Name *" />
            <input type="text" name="location" value={newInstitution.location} onChange={handleChange} className="w-full p-4 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg shadow-md" placeholder="Location *" />
            <input type="number" name="students" value={newInstitution.students} onChange={handleChange} className="w-full p-4 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg shadow-md" placeholder="No. of Students" />

            <button onClick={handleAddInstitution} className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md">
              Add Institution
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
