import React, { useState, useCallback } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import StockInput from './components/StockInput';
import StockList from './components/StockList';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [stocks, setStocks] = useLocalStorage<string[]>('stocks', []);
  const [error, setError] = useState<string | null>(null);

  const addStock = useCallback((symbol: string) => {
    const trimmedSymbol = symbol.trim();

    // Validation: Empty string
    if (trimmedSymbol.length === 0) {
      setError('Stock symbol cannot be empty.');
      return;
    }
    
    // Validation: Length
    if (trimmedSymbol.length > 5) {
      setError(`"${trimmedSymbol}" is too long. Symbols must be 1-5 characters.`);
      return;
    }
    
    // Validation: Characters (letters only)
    if (!/^[a-zA-Z]+$/.test(trimmedSymbol)) {
        setError(`"${trimmedSymbol}" contains invalid characters. Use letters only.`);
        return;
    }
    
    const finalSymbol = trimmedSymbol.toUpperCase();

    // Validation: Prevent duplicates
    if (stocks.includes(finalSymbol)) {
      setError(`"${finalSymbol}" is already in your watchlist.`);
      return;
    }

    setStocks(prevStocks => [...prevStocks, finalSymbol].sort());
    setError(null); // Clear error on successful addition
  }, [stocks, setStocks]);

  const removeStock = useCallback((symbolToRemove: string) => {
    setStocks(prevStocks => prevStocks.filter(stock => stock !== symbolToRemove));
  }, [setStocks]);
  
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <StockInput onAddStock={addStock} error={error} clearError={() => setError(null)} />
          <div className="mt-8">
            <StockList stocks={stocks} onRemoveStock={removeStock} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;