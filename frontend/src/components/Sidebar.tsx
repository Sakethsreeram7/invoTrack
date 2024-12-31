import React from 'react';
import { Home, FileText, Users, Building2, Store, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: FileText, label: 'Invoices' },
    { icon: Users, label: 'Departments' },
    { icon: Building2, label: 'Cities' },
    { icon: Store, label: 'Vendors' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-900">
      <div className="p-6">
        <div className="text-white text-xl font-bold">Tax Invoice</div>
      </div>
      <nav className="px-4 space-y-2">
        {menuItems.map(({ icon: Icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`sidebar-link ${active ? 'active' : ''}`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;