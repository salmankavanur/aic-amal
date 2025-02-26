"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Save, X } from "lucide-react";
import { useRouter } from "next/navigation";

const mockInstitutions = [
  { id: "INS-001", name: "Masjidusswabaha", location: "India", students: 450 },
  { id: "INS-002", name: "Oorkadavu Qasim Musliyar Thahfeezul Quran College", location: "India", students: 320 },
  { id: "INS-003", name: "Islamic Da'wa Academy", location: "India", students: 280 },
  { id: "INS-004", name: "Daiya Islamic Academy for Women", location: "India", students: 350 },
  { id: "INS-005", name: "Bright Public Nursery School", location: "India", students: 500 },
  { id: "INS-006", name: "Ayaadi Life Education (Upskill Project for Yatheem)", location: "India", students: 200 },
];

export default function EditInstitutionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const institutionId = searchParams.get("id");
  const [institution, setInstitution] = useState({ name: "", location: "", students: "" });

  useEffect(() => {
    if (institutionId) {
      const foundInstitution = mockInstitutions.find(inst => inst.id === institutionId);
      if (foundInstitution) {
        setInstitution(foundInstitution);
      }
    }
  }, [institutionId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInstitution({ ...institution, [name]: value });
  };

  const handleSave = () => {
    alert("Institution details updated successfully!");
    router.push("/admin/institutions/list");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Edit Institution</h2>
          <button onClick={() => router.push("/admin/institutions/list")} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        <input type="text" name="name" value={institution.name} onChange={handleChange} className="w-full p-4 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg shadow-md" placeholder="Institution Name *" />
        <input type="text" name="location" value={institution.location} onChange={handleChange} className="w-full p-4 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg shadow-md" placeholder="Location *" />
        <input type="number" name="students" value={institution.students} onChange={handleChange} className="w-full p-4 mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg shadow-md" placeholder="No. of Students" />

        <button onClick={handleSave} className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md flex items-center justify-center gap-2">
          <Save className="h-5 w-5" /> Save Changes
        </button>
      </div>
    </div>
  );
}
