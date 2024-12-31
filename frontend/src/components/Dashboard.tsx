// src/components/Dashboard.tsx
import React from 'react';
import { Building2, Store, FileText, TrendingUp } from 'lucide-react';
import DepartmentCard from './DepartmentCard';
import { useDataStore } from '../stores/dataStore';

const Dashboard = () => {
  const { departments, fetchDepartments } = useDataStore();

  React.useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  const stats = [
    { 
      title: 'Total Cities',
      value: '12',
      icon: Building2,
      color: 'purple'
    },
    {
      title: 'Total Vendors',
      value: '48',
      icon: Store,
      color: 'blue'
    },
    {
      title: 'Total Invoices',
      value: '156',
      icon: FileText,
      color: 'green'
    },
    {
      title: 'Monthly Growth',
      value: '+12.5%',
      icon: TrendingUp,
      color: 'pink'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your Tax Invoice Management System</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-gray-200 transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Departments</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} {...dept} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
