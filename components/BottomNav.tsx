import React from 'react';
import HomeIcon from './icons/HomeIcon';
import PortfolioIcon from './icons/PortfolioIcon';
import SettingsIcon from './icons/SettingsIcon';
import { Page } from '../App';

interface BottomNavProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
}

const NavButton: React.FC<{
    page: Page;
    activePage: Page;
    onNavigate: (page: Page) => void;
    children: React.ReactNode;
    ariaLabel: string;
}> = ({ page, activePage, onNavigate, children, ariaLabel }) => {
    const isActive = activePage === page;
    return (
        <button
            onClick={() => onNavigate(page)}
            className={`p-3 transition-colors ${
                isActive ? 'text-amber-400' : 'text-slate-400 hover:text-white'
            }`}
            aria-current={isActive ? 'page' : undefined}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-black/0">
        <nav className="absolute bottom-4 left-1/2 -translate-x-1/2 h-16 bg-slate-900/50 backdrop-blur-lg border border-white/10 w-[90%] max-w-sm mx-auto rounded-2xl">
          <div className="flex justify-around items-center h-full">
            <NavButton page="home" activePage={activePage} onNavigate={onNavigate} ariaLabel="Home">
                <HomeIcon className="w-6 h-6" />
            </NavButton>
            <NavButton page="portfolio" activePage={activePage} onNavigate={onNavigate} ariaLabel="Portfolio">
                <PortfolioIcon className="w-6 h-6" />
            </NavButton>
            <NavButton page="settings" activePage={activePage} onNavigate={onNavigate} ariaLabel="Settings">
                <SettingsIcon className="w-6 h-6" />
            </NavButton>
          </div>
        </nav>
    </footer>
  );
};

export default BottomNav;