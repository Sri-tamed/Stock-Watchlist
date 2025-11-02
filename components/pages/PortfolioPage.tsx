import React from 'react';

const PortfolioPage: React.FC = () => {
  return (
    <div className="p-4 pt-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-8">Portfolio</h1>
      <div className="text-center py-16 px-6 bg-slate-900/40 rounded-2xl border border-slate-700/50">
        <h3 className="text-lg font-semibold text-slate-300">Coming Soon!</h3>
        <p className="text-slate-400 mt-2">Your portfolio summary and analytics will be available here.</p>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
