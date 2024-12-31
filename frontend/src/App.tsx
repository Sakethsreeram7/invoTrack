// src/App.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoginForm from './components/auth/LoginForm';
import { useAuthStore } from './stores/authStore';

function App() {
  const user = useAuthStore(state => state.user);

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="pt-16">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
