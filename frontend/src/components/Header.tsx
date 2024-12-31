import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b fixed top-0 right-0 left-64 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search invoices, vendors, cities..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;