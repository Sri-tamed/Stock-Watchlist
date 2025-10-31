
import React, { useState } from 'react';

interface StockInputProps {
  onAddStock: (symbol: string) => void;
  error: string | null;
  clearError: () => void;
}

const StockInput: React.FC<StockInputProps> = ({ onAddStock, error, clearError }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symbol.trim()) {
      onAddStock(symbol);
      setSymbol(''); // Clear input on successful submission attempt
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      clearError();
    }
    setSymbol(e.target.value);
  }

  return (
    <div className="p-6 bg-slate-800/50 rounded-lg shadow-lg border border-slate-700">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Add Stock to Watchlist</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
            type="text"
            value={symbol}
            onChange={handleInputChange}
            placeholder="e.g., AAPL, GOOG, TSLA"
            className="flex-grow w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors placeholder-slate-500"
            maxLength={5}
        />
        <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500 transition-all transform active:scale-95 disabled:bg-slate-600 disabled:cursor-not-allowed"
            disabled={!symbol.trim()}
        >
            Add Symbol
        </button>
        </form>
        {error && <p className="text-red-400 mt-3 text-sm animate-pulse">{error}</p>}
    </div>
  );
};

export default StockInput;
