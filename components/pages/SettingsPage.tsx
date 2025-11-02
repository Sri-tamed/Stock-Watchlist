import React from 'react';
import ChevronRightIcon from '../icons/ChevronRightIcon';

// Toggle Switch Component
const ToggleSwitch: React.FC<{ enabled: boolean; onChange: (enabled: boolean) => void }> = ({ enabled, onChange }) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={enabled}
            onClick={() => onChange(!enabled)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-400 ${
                enabled ? 'bg-amber-400' : 'bg-slate-600'
            }`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
        </button>
    );
};


interface SettingsItemProps {
    title: string;
    subtitle?: string;
    control?: 'toggle' | 'navigate';
}

const SettingsItem: React.FC<SettingsItemProps> = ({ title, subtitle, control }) => {
    const [toggleState, setToggleState] = React.useState(false);
    
    const Wrapper = control === 'navigate' ? 'button' : 'div';
    
    return (
        <Wrapper className="flex items-center justify-between w-full text-left p-4 bg-slate-900/40 rounded-xl border border-slate-700/50 transition-colors hover:bg-slate-800/60">
            <div>
                <p className="font-semibold text-white">{title}</p>
                {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
            </div>
            {control === 'navigate' && <ChevronRightIcon className="w-5 h-5 text-slate-500" />}
            {control === 'toggle' && <ToggleSwitch enabled={toggleState} onChange={setToggleState} />}
        </Wrapper>
    );
};

const SettingsPage: React.FC = () => {
  return (
    <div className="p-4 pt-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-8">Settings</h1>
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase text-slate-500 tracking-wider px-2">General</h2>
        <SettingsItem title="Appearance" subtitle="Dark Mode" control="navigate" />
        <SettingsItem title="Notifications" subtitle="Push & Email" control="toggle" />
        
        <h2 className="text-sm font-bold uppercase text-slate-500 tracking-wider px-2 pt-4">Data</h2>
        <SettingsItem title="Sync with Cloud" control="toggle" />
        
        <h2 className="text-sm font-bold uppercase text-slate-500 tracking-wider px-2 pt-4">About</h2>
        <SettingsItem title="Version" subtitle="1.0.0" />
        <SettingsItem title="Privacy Policy" control="navigate" />
        <SettingsItem title="Terms of Service" control="navigate" />
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default SettingsPage;
