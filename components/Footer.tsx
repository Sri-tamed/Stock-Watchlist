
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/30 border-t border-slate-800/50 py-4">
      <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Stock Watchlist. All data is saved locally in your browser.</p>
      </div>
    </footer>
  );
};

export default Footer;
