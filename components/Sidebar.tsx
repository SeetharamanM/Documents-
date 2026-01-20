
import React from 'react';
import { View } from '../App';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isOpen, toggleSidebar }) => {
  const navItems = [
    { id: View.DASHBOARD, label: 'Analytics', icon: '📊' },
    { id: View.DOCUMENTATION, label: 'Guide & Docs', icon: '📚' },
    { id: View.SETTINGS, label: 'Preferences', icon: '⚙️' },
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 h-full bg-slate-900 text-white transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between p-6 border-b border-slate-800">
        {isOpen && <h1 className="text-xl font-bold tracking-tight text-blue-400">DocuDash</h1>}
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      <nav className="mt-8 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`flex items-center w-full p-3 rounded-xl transition-all ${
              currentView === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl mr-4">{item.icon}</span>
            {isOpen && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 left-0 w-full px-6">
        <div className={`flex items-center ${isOpen ? 'space-x-4' : 'justify-center'}`}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold">
            JD
          </div>
          {isOpen && (
            <div>
              <p className="text-sm font-semibold">Jane Doe</p>
              <p className="text-xs text-slate-500">Pro Account</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
