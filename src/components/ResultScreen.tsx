
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RefreshCw, Share2, Sparkles, Star } from 'lucide-react';

interface ResultScreenProps {
  answers: number[];
  onRestart: () => void;
}

const planets = [
  {
    name: "Mars",
    title: "The Adventurous Pioneer",
    description: "You're bold, passionate, and always ready for the next adventure. Like the Red Planet, you have a fiery spirit and aren't afraid to explore uncharted territories. Your courage inspires others to push beyond their limits.",
    traits: ["Courageous", "Energetic", "Independent", "Pioneering"],
    image: "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?w=800&h=800&fit=crop&crop=center",
    price: "$47",
    glowColor: "from-red-500/30 to-orange-600/30",
    shadowColor: "shadow-red-500/20"
  },
  {
    name: "Saturn",
    title: "The Wise Strategist", 
    description: "Thoughtful and methodical, you approach life with wisdom and patience. Your systematic thinking and reliability make you a natural leader. Like Saturn's magnificent rings, you bring structure and beauty to chaos.",
    traits: ["Wise", "Patient", "Systematic", "Reliable"],
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=800&fit=crop&crop=center",
    price: "$89",
    glowColor: "from-yellow-400/30 to-amber-600/30",
    shadowColor: "shadow-yellow-500/20"
  },
  {
    name: "Neptune",
    title: "The Mysterious Dreamer",
    description: "Deep and enigmatic, you possess an otherworldly quality that draws people in. Like Neptune's distant beauty, you're complex and fascinating. Your intuition guides you through life's deepest mysteries.",
    traits: ["Mysterious", "Intuitive", "Deep", "Spiritual"],
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=800&fit=crop&crop=center",
    price: "$156",
    glowColor: "from-blue-600/30 to-indigo-800/30",
    shadowColor: "shadow-blue-500/20"
  },
  {
    name: "Venus",
    title: "The Creative Harmonizer",
    description: "You bring beauty and creativity wherever you go. Like Venus shining brightest in the sky, your artistic nature illuminates the world around you. Your harmonious spirit creates balance in chaos.",
    traits: ["Creative", "Artistic", "Harmonious", "Inspiring"],
    image: "https://images.unsplash.com/photo-1614728894747-a83421f3afb9?w=800&h=800&fit=crop&crop=center",
    price: "$73",
    glowColor: "from-pink-400/30 to-purple-600/30",
    shadowColor: "shadow-pink-500/20"
  }
];

const ResultScreen = ({ answers, onRestart }: ResultScreenProps) => {
  // Simple algorithm to determine planet based on most frequent answer type
  const answerCounts = [0, 0, 0, 0];
  answers.forEach(answer => {
    answerCounts[answer]++;
  });
  
  const planetIndex = answerCounts.indexOf(Math.max(...answerCounts));
  const planet = planets[planetIndex];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Enhanced background with floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles 
              size={Math.random() * 6 + 2} 
              className="text-white opacity-40"
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            You Are Planet...
          </h1>
        </div>

        {/* Main result card inspired by your reference */}
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 animate-scale-in relative overflow-hidden">
          {/* Glow effect behind planet */}
          <div className={`absolute inset-0 bg-gradient-to-br ${planet.glowColor} blur-3xl opacity-50`}></div>
          
          <div className="relative z-10">
            {/* Planet image section */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${planet.glowColor} rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500`}></div>
                <img 
                  src={planet.image}
                  alt={planet.name}
                  className={`w-80 h-80 md:w-96 md:h-96 rounded-full object-cover relative z-10 ${planet.shadowColor} shadow-2xl animate-bounce group-hover:scale-105 transition-all duration-500`}
                  style={{ animationDuration: '4s' }}
                />
                {/* Floating stars around planet */}
                <div className="absolute -top-4 -right-4 animate-pulse">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="absolute -bottom-6 -left-6 animate-pulse" style={{ animationDelay: '1s' }}>
                  <Star className="w-6 h-6 text-blue-400 fill-blue-400" />
                </div>
                <div className="absolute top-1/4 -left-8 animate-pulse" style={{ animationDelay: '2s' }}>
                  <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
                </div>
              </div>
            </div>
            
            {/* Planet info */}
            <div className="text-center mb-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">
                {planet.name}
              </h2>
              <div className="text-2xl md:text-3xl text-orange-400 font-semibold mb-4">
                {planet.price}
              </div>
              <h3 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                {planet.title}
              </h3>
            </div>

            {/* Description with better contrast */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
                {planet.description}
              </p>
            </div>

            {/* Traits grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {planet.traits.map((trait, index) => (
                <div 
                  key={trait}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-white font-semibold text-center block group-hover:scale-105 transition-transform">
                    {trait}
                  </span>
                </div>
              ))}
            </div>

            {/* Details button */}
            <div className="text-center mb-8">
              <button className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center mx-auto gap-2 group">
                <span className="text-sm uppercase tracking-wider">DETAILS</span>
                <div className="w-4 h-0.5 bg-gray-400 group-hover:bg-white transition-colors duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button 
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border-0"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Discover Another Planet
          </Button>
          
          <Button 
            className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            variant="outline"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Your Planet
          </Button>
        </div>

        <div className="text-center mt-8 text-blue-300 animate-fade-in flex items-center justify-center gap-2" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-5 h-5" />
          <span>Your cosmic journey reveals the planet that resonates with your soul</span>
          <Sparkles className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
