
import React from 'react';
import { Sparkles, Circle } from 'lucide-react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Sparkles 
              size={Math.random() * 8 + 4} 
              className="text-white opacity-60"
            />
          </div>
        ))}
      </div>

      {/* Floating planets */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '6s' }}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-70 shadow-2xl"></div>
      </div>
      
      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-60 shadow-2xl"></div>
      </div>
      
      <div className="absolute bottom-32 left-1/4 animate-bounce" style={{ animationDuration: '7s', animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 opacity-50 shadow-2xl"></div>
      </div>

      <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDuration: '9s', animationDelay: '0.5s' }}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 opacity-40 shadow-xl"></div>
      </div>

      {/* Shooting stars */}
      <div className="absolute top-20 left-0 w-full">
        <div className="animate-pulse opacity-30">
          <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Cosmic nebula effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-pink-900/10 via-transparent to-indigo-900/10"></div>
    </div>
  );
};

export default SpaceBackground;
