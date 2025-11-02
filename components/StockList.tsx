import React from 'react';
import StockCard from './StockCard';
import { Stock } from '../App';

interface StockListProps {
  stocks: Stock[];
  onRemoveStock: (symbol: string) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onRemoveStock }) => {
  if (stocks.length === 0) {
    return (
      <div className="text-center py-16 px-6 bg-slate-900/40 rounded-2xl border border-slate-700/50">
        <h3 className="text-lg font-semibold text-slate-300">Your watchlist is empty.</h3>
        <p className="text-slate-400 mt-2">Add stocks to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
        {stocks.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} onRemove={onRemoveStock} />
        ))}
    </div>
  );
};

export default StockList;
