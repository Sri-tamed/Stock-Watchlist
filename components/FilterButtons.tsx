import React from 'react';

const filters = ['My Watchlist', 'Top Gainers', 'Crypto', 'Favorites'];

const FilterButtons: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('My Watchlist');

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {filters.map((filter) => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 border
            ${
              activeFilter === filter
                ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                : 'bg-slate-700/20 border-slate-600/50 text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};

export default FilterButtons;
