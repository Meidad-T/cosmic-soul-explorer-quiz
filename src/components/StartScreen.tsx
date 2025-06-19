
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Stars, Globe } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Rocket className="w-20 h-20 text-white animate-bounce" />
              <div className="absolute -top-2 -right-2">
                <Stars className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-scale-in">
            What Planet Are You?
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Discover your cosmic personality through the mysteries of space
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="text-blue-300">8 Questions • 2 Minutes • Pure Magic</span>
            <Globe className="w-6 h-6 text-purple-400" />
          </div>
        </div>

        <Button 
          onClick={onStart}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '1.5s' }}
        >
          <Rocket className="w-6 h-6 mr-3" />
          Begin Your Journey
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
