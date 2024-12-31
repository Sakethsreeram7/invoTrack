import React from 'react';
import { Bell, User } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

const Header = () => {
  const { user, logout } = useAuthStore();

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tax Invoice System</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-sm">
              <p className="font-medium">{user?.email}</p>
              <button 
                onClick={logout}
                className="text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;