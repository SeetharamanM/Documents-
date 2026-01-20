
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
      <div className="relative w-96">
        <input 
          type="text" 
          placeholder="Search documentation or metrics..." 
          className="w-full bg-slate-100 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
        />
        <span className="absolute left-4 top-2 text-slate-400">🔍</span>
      </div>
      
      <div className="flex items-center space-x-6 text-slate-500">
        <button className="hover:text-blue-600 transition-colors">Notifications</button>
        <button className="hover:text-blue-600 transition-colors">Help</button>
        <div className="h-6 w-[1px] bg-slate-200"></div>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Export Report
        </button>
      </div>
    </header>
  );
};
