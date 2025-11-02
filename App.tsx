import React, { useState, useCallback } from 'react';
import FilterButtons from './components/FilterButtons';
import StockList from './components/StockList';
import BottomNav from './components/BottomNav';
import PortfolioPage from './components/pages/PortfolioPage';
import SettingsPage from './components/pages/SettingsPage';

export interface Stock {
  symbol: string;
  name: string;
  logoUrl: string;
  price: string;
  change: string;
  isUp: boolean;
  marketStatus: 'open' | 'closed';
}

const initialStocks: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', logoUrl: 'https://logo.clearbit.com/apple.com', price: '172.45', change: '+1.23 (0.71%)', isUp: true, marketStatus: 'open' },
  { symbol: 'TSLA', name: 'Tesla, Inc.', logoUrl: 'https://logo.clearbit.com/tesla.com', price: '180.01', change: '-2.56 (1.40%)', isUp: false, marketStatus: 'open' },
  { symbol: 'AMZN', name: 'Amazon.com', logoUrl: 'https://logo.clearbit.com/amazon.com', price: '183.54', change: '+0.45 (0.25%)', isUp: true, marketStatus: 'closed' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', logoUrl: 'https://logo.clearbit.com/google.com', price: '173.55', change: '-1.80 (1.03%)', isUp: false, marketStatus: 'open' },
];

export type Page = 'home' | 'portfolio' | 'settings';

const App: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>(initialStocks);
  const [activePage, setActivePage] = useState<Page>('home');

  const removeStock = useCallback((symbolToRemove: string) => {
    setStocks(prevStocks => prevStocks.filter(stock => stock.symbol !== symbolToRemove));
  }, []);

  const renderPage = () => {
    switch (activePage) {
        case 'home':
            return (
                <>
                    {/* Greeting */}
                    <div className="pt-8 pb-4">
                        <p className="text-slate-400">Good Morning, Sri</p>
                        <h1 className="text-4xl font-bold text-white tracking-tight">Your Watchlist</h1>
                    </div>

                    {/* Filters */}
                    <FilterButtons />

                    {/* Stock List */}
                    <div className="mt-6">
                        <StockList stocks={stocks} onRemoveStock={removeStock} />
                    </div>
                </>
            );
        case 'portfolio':
            return <PortfolioPage />;
        case 'settings':
            return <SettingsPage />;
        default:
            return null;
    }
  }
  
  return (
    <div className="min-h-screen bg-transparent text-slate-200 flex flex-col items-center">
      <div className="w-full max-w-md mx-auto relative flex-grow">
        <main className="p-4 pb-28">
          {renderPage()}
        </main>
        
        {/* Bottom Navigation */}
        <BottomNav activePage={activePage} onNavigate={setActivePage} />
      </div>
    </div>
  );
};

export default App;