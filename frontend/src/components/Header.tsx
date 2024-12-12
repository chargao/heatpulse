import React from 'react';
import { Menu, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Thermometer className="w-8 h-8" />
            <h1 className="text-2xl font-bold">HeatPulse</h1>
          </div>
          
          <div className="w-10" /> {/* Spacer for symmetry */}
        </div>
      </div>
    </header>
  );
}