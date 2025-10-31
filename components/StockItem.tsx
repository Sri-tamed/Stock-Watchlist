
import React from 'react';
import TrashIcon from './icons/TrashIcon';

interface StockItemProps {
  symbol: string;
  onRemoveStock: (symbol: string) => void;
}

const StockItem: React.FC<StockItemProps> = ({ symbol, onRemoveStock }) => {
  return (
    <li className="flex items-center justify-between p-4 hover:bg-slate-700/50 transition-colors duration-200">
      <span className="font-mono text-lg tracking-wider text-slate-100">{symbol}</span>
      <button
        onClick={() => onRemoveStock(symbol)}
        className="p-2 rounded-full text-slate-500 hover:text-red-400 hover:bg-slate-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all"
        aria-label={`Remove ${symbol} from watchlist`}
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </li>
  );
};

export default StockItem;
