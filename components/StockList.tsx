
import React from 'react';
import StockItem from './StockItem';

interface StockListProps {
  stocks: string[];
  onRemoveStock: (symbol: string) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onRemoveStock }) => {
  if (stocks.length === 0) {
    return (
      <div className="text-center py-10 px-6 bg-slate-800/50 rounded-lg border border-slate-700">
        <h3 className="text-lg font-medium text-slate-400">Your watchlist is empty.</h3>
        <p className="text-slate-500 mt-1">Add a stock symbol above to get started.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700">
        <ul className="divide-y divide-slate-700">
            {stocks.map((stock) => (
                <StockItem key={stock} symbol={stock} onRemoveStock={onRemoveStock} />
            ))}
        </ul>
    </div>
  );
};

export default StockList;
