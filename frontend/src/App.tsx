import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;