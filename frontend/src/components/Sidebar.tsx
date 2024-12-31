import React from 'react';
import { FolderTree, Building2, Store, FileText, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Tax Invoice System
        </h1>
      </div>
      
      <nav className="mt-8">
        <div className="px-4 py-2 text-gray-400 text-sm">NAVIGATION</div>
        <a href="#" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
          <FolderTree className="w-5 h-5" />
          Departments
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
          <Building2 className="w-5 h-5" />
          Cities
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
          <Store className="w-5 h-5" />
          Vendors
        </a>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-full">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;