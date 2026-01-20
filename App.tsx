
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Documentation } from './components/Documentation';
import { Header } from './components/Header';

export enum View {
  DASHBOARD = 'DASHBOARD',
  DOCUMENTATION = 'DOCUMENTATION',
  SETTINGS = 'SETTINGS'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header />
        <main className="p-6 max-w-7xl mx-auto">
          {currentView === View.DASHBOARD && <Dashboard />}
          {currentView === View.DOCUMENTATION && <Documentation />}
          {currentView === View.SETTINGS && (
            <div className="flex items-center justify-center h-96 text-slate-400">
              Settings Configuration - Coming Soon
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
