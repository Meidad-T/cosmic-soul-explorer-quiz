
import React from 'react';
import { Sparkles } from 'lucide-react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Enhanced animated stars with varying sizes */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          >
            <Sparkles 
              size={Math.random() * 12 + 2} 
              className="text-white opacity-60"
            />
          </div>
        ))}
      </div>

      {/* Realistic floating planets with glow effects */}
      <div className="absolute top-20 left-10 animate-bounce group" style={{ animationDuration: '8s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-orange-600/40 rounded-full blur-xl scale-150"></div>
          <div 
            className="w-24 h-24 rounded-full shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 30%, #ff6b35, #ff8e53, #d63031)',
              boxShadow: '0 0 40px rgba(255, 107, 53, 0.3), inset -10px -10px 20px rgba(0,0,0,0.3)'
            }}
          ></div>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-bounce group" style={{ animationDuration: '10s', animationDelay: '1s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-indigo-600/40 rounded-full blur-xl scale-150"></div>
          <div 
            className="w-20 h-20 rounded-full shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, #74b9ff, #0984e3, #2d3436)',
              boxShadow: '0 0 30px rgba(116, 185, 255, 0.4), inset -8px -8px 16px rgba(0,0,0,0.4)'
            }}
          ></div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-1/4 animate-bounce group" style={{ animationDuration: '12s', animationDelay: '2s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-pink-600/40 rounded-full blur-xl scale-150"></div>
          <div 
            className="w-16 h-16 rounded-full shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage: 'radial-gradient(circle at 35% 35%, #a29bfe, #6c5ce7, #2d3436)',
              boxShadow: '0 0 25px rgba(162, 155, 254, 0.4), inset -6px -6px 12px rgba(0,0,0,0.4)'
            }}
          ></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/3 animate-bounce group" style={{ animationDuration: '9s', animationDelay: '0.5s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-emerald-600/40 rounded-full blur-xl scale-150"></div>
          <div 
            className="w-12 h-12 rounded-full shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage: 'radial-gradient(circle at 40% 30%, #00b894, #00a085, #2d3436)',
              boxShadow: '0 0 20px rgba(0, 184, 148, 0.4), inset -4px -4px 8px rgba(0,0,0,0.4)'
            }}
          ></div>
        </div>
      </div>

      <div className="absolute top-10 right-10 animate-bounce group" style={{ animationDuration: '7s', animationDelay: '3s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 to-amber-600/40 rounded-full blur-xl scale-150"></div>
          <div 
            className="w-14 h-14 rounded-full shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 30%, #fdcb6e, #e17055, #2d3436)',
              boxShadow: '0 0 25px rgba(253, 203, 110, 0.4), inset -5px -5px 10px rgba(0,0,0,0.4)'
            }}
          ></div>
        </div>
      </div>

      {/* Shooting stars with trails */}
      <div className="absolute top-20 left-0 w-full">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '4s'
            }}
          >
            <div className="w-2 h-0.5 bg-white rounded-full animate-ping"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full ml-2 -mt-0.5"></div>
          </div>
        ))}
      </div>

      {/* Enhanced cosmic nebula effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-pink-900/20 via-transparent to-indigo-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-800/10 to-transparent"></div>
    </div>
  );
};

export default SpaceBackground;
