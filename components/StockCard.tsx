import React from 'react';
import { Stock } from '../App';
import TrashIcon from './icons/TrashIcon';

interface StockCardProps {
  stock: Stock;
  onRemove: (symbol:string) => void;
}

const StockCard: React.FC<StockCardProps> = ({ stock, onRemove }) => {
  const priceColor = stock.isUp ? 'text-green-400' : 'text-red-400';
  const marketStatusColor = stock.marketStatus === 'open' ? 'bg-green-500' : 'bg-slate-500';

  return (
    <div className="
      p-4 rounded-2xl border border-slate-700/50 
      bg-slate-900/40 backdrop-blur-sm
      flex items-center gap-4 
      transition-all duration-300 hover:border-slate-600/80 hover:bg-slate-900/60
      shadow-lg shadow-black/20
    ">
      <img src={stock.logoUrl} alt={`${stock.name} logo`} className="w-10 h-10 rounded-full bg-white p-0.5"/>
      
      <div className="flex-grow">
        <p className="font-bold text-white">{stock.symbol}</p>
        <p className="text-sm text-slate-400 truncate max-w-28">{stock.name}</p>
      </div>

      <div className="text-right flex-shrink-0">
        <p className="font-semibold text-white">{stock.price}</p>
        <p className={`text-sm ${priceColor}`}>{stock.change}</p>
      </div>

      <div className="self-stretch flex flex-col items-center justify-between pl-3 ml-3 border-l border-slate-700/50">
        <div className="relative flex items-center justify-center h-1/2">
            <span className={`w-2.5 h-2.5 rounded-full ${marketStatusColor}`}></span>
            {stock.marketStatus === 'open' && <span className={`absolute w-2.5 h-2.5 rounded-full ${marketStatusColor} animate-ping`}></span>}
        </div>
        <div className="h-1/2 flex items-end">
            <button 
            onClick={() => onRemove(stock.symbol)}
            className="p-1 text-slate-500 hover:text-red-400 hover:bg-slate-700/50 rounded-full transition-colors"
            aria-label={`Remove ${stock.symbol}`}
            >
            <TrashIcon className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
