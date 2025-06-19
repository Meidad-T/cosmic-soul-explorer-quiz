
import React from 'react';
import { Rocket } from 'lucide-react';

interface NavigationProps {
  currentView: 'quiz' | 'learn';
  onViewChange: (view: 'quiz' | 'learn') => void;
}

const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center space-x-3">
            <Rocket className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">Cosmic Explorer</span>
          </div>
          
          {/* Navigation items */}
          <div className="flex space-x-8">
            <button
              onClick={() => onViewChange('quiz')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentView === 'quiz'
                  ? 'bg-white/20 text-white font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Quiz
            </button>
            <button
              onClick={() => onViewChange('learn')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentView === 'learn'
                  ? 'bg-white/20 text-white font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Learn
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
