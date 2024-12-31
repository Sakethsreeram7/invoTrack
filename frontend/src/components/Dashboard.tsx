import React from 'react';
import DepartmentCard from './DepartmentCard';
import { Building2, Store, FileText } from 'lucide-react';

const Dashboard = () => {
  const departments = [
    { name: 'Readymade', itemCount: 24 },
    { name: 'Textiles', itemCount: 18 },
    { name: 'Household', itemCount: 12 },
  ];

  return (
    <div className="ml-64 pt-16 min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your Tax Invoice Management System</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Cities</p>
                <h3 className="text-2xl font-bold text-gray-900">12</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Store className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Vendors</p>
                <h3 className="text-2xl font-bold text-gray-900">48</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Invoices</p>
                <h3 className="text-2xl font-bold text-gray-900">156</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <DepartmentCard key={dept.name} {...dept} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;