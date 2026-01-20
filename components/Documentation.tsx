
import React, { useState } from 'react';

const sections = [
  {
    title: 'Getting Started',
    links: ['Introduction', 'Installation', 'Quick Start Guide', 'Project Structure']
  },
  {
    title: 'Components',
    links: ['Alerts', 'Buttons', 'Cards', 'Charts', 'Modals', 'Navigation']
  },
  {
    title: 'API Reference',
    links: ['Authentication', 'Core Hooks', 'Utility Functions', 'Theme Config']
  }
];

export const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Introduction');

  return (
    <div className="flex gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <nav className="w-64 flex-shrink-0 space-y-8 sticky top-24 h-fit">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">{section.title}</h5>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => setActiveTab(link)}
                    className={`block w-full text-left py-1.5 px-3 rounded-lg text-sm transition-all ${
                      activeTab === link 
                        ? 'bg-blue-50 text-blue-600 font-semibold' 
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <article className="flex-1 max-w-3xl prose prose-slate prose-blue">
        <div className="mb-10">
          <div className="text-blue-600 font-bold text-sm mb-2 uppercase tracking-wide">Documentation</div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{activeTab}</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Learn how to integrate the DocuDash engine into your workflow. This guide provides comprehensive 
            references and interactive examples for building modern analytic interfaces.
          </p>
        </div>

        <section className="space-y-12">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex items-center px-4 py-2 bg-slate-800 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-xs text-slate-500 ml-4 font-mono">terminal — zsh</span>
            </div>
            <pre className="p-6 text-sm text-blue-300 font-mono">
              <code>{`$ npx docudash init my-project
$ cd my-project
$ npm install && npm start`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <div className="flex items-center text-blue-800 font-bold mb-2">
              <span className="mr-2">💡</span> Pro Tip
            </div>
            <p className="text-blue-900/70 text-sm italic">
              Use our built-in CLI to scaffold custom visualization components directly into your components folder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Core Philosophy</h2>
            <p className="text-slate-600 mb-6">
              DocuDash is built on the principle of "Data First." Every component is designed to be highly 
              performant, handling datasets of up to 100k points without frame drops by utilizing 
              WebWorkers and efficient Canvas-based rendering where needed.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-bold text-slate-800 mb-1">Ultra Fast</h4>
                <p className="text-sm text-slate-500">Sub-millisecond latency for data mutations and filtering.</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-bold text-slate-800 mb-1">Themable</h4>
                <p className="text-sm text-slate-500">Complete control over aesthetics via CSS variables and Tailwind presets.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-10 border-t border-slate-200 flex justify-between">
          <button className="flex flex-col items-start p-4 hover:bg-slate-50 rounded-xl transition-all">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Previous</span>
            <span className="text-blue-600 font-semibold">Welcome Guide</span>
          </button>
          <button className="flex flex-col items-end p-4 hover:bg-slate-50 rounded-xl transition-all text-right">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Next</span>
            <span className="text-blue-600 font-semibold">Installation Steps</span>
          </button>
        </footer>
      </article>
    </div>
  );
};
