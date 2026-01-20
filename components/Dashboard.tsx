
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell 
} from 'recharts';

const data = [
  { name: 'Jan', usage: 4000, api: 2400 },
  { name: 'Feb', usage: 3000, api: 1398 },
  { name: 'Mar', usage: 2000, api: 9800 },
  { name: 'Apr', usage: 2780, api: 3908 },
  { name: 'May', usage: 1890, api: 4800 },
  { name: 'Jun', usage: 2390, api: 3800 },
  { name: 'Jul', usage: 3490, api: 4300 },
];

const StatCard: React.FC<{ title: string; value: string; trend: string; isUp: boolean }> = ({ title, value, trend, isUp }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <p className="text-slate-500 text-sm font-medium">{title}</p>
    <div className="flex items-baseline space-x-2 mt-2">
      <h3 className="text-3xl font-bold">{value}</h3>
      <span className={`text-xs font-bold ${isUp ? 'text-green-500' : 'text-red-500'}`}>
        {isUp ? '▲' : '▼'} {trend}
      </span>
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Operational Overview</h2>
        <p className="text-slate-500">Real-time performance metrics and system health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Users" value="24.8k" trend="12%" isUp={true} />
        <StatCard title="Avg. Response" value="142ms" trend="8%" isUp={true} />
        <StatCard title="Error Rate" value="0.04%" trend="2%" isUp={false} />
        <StatCard title="API Requests" value="1.2M" trend="24%" isUp={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-6">Traffic & API Consumption</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Area type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
                <Area type="monotone" dataKey="api" stroke="#8b5cf6" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-6">Device Distribution</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="usage" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h4 className="font-bold text-slate-800">Recent System Logs</h4>
          <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Event ID</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {[
              { id: '#LOG-9281', status: 'Success', source: 'Auth Service', time: '2 mins ago' },
              { id: '#LOG-9280', status: 'Warning', source: 'Database Read', time: '5 mins ago' },
              { id: '#LOG-9279', status: 'Success', source: 'Webhooks', time: '12 mins ago' },
              { id: '#LOG-9278', status: 'Success', source: 'API Proxy', time: '24 mins ago' },
            ].map((log, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-mono font-medium text-slate-700">{log.id}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    log.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-600">{log.source}</td>
                <td className="px-6 py-4 text-slate-400">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
