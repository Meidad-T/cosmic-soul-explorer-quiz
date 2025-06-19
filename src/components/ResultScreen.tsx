
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RefreshCw, Share2, Download } from 'lucide-react';

interface ResultScreenProps {
  answers: number[];
  onRestart: () => void;
}

const planets = [
  {
    name: "Mars",
    title: "The Adventurous Pioneer",
    description: "You're bold, passionate, and always ready for the next adventure. Like the Red Planet, you have a fiery spirit and aren't afraid to explore uncharted territories.",
    traits: ["Courageous", "Energetic", "Independent", "Pioneering"],
    color: "from-red-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-red-500/20 to-orange-600/20"
  },
  {
    name: "Saturn",
    title: "The Wise Strategist", 
    description: "Thoughtful and methodical, you approach life with wisdom and patience. Your systematic thinking and reliability make you a natural leader.",
    traits: ["Wise", "Patient", "Systematic", "Reliable"],
    color: "from-yellow-400 to-amber-600",
    bgColor: "bg-gradient-to-br from-yellow-400/20 to-amber-600/20"
  },
  {
    name: "Neptune",
    title: "The Mysterious Dreamer",
    description: "Deep and enigmatic, you possess an otherworldly quality that draws people in. Like Neptune's distant beauty, you're complex and fascinating.",
    traits: ["Mysterious", "Intuitive", "Deep", "Spiritual"],
    color: "from-blue-600 to-indigo-800",
    bgColor: "bg-gradient-to-br from-blue-600/20 to-indigo-800/20"
  },
  {
    name: "Venus",
    title: "The Creative Harmonizer",
    description: "You bring beauty and creativity wherever you go. Like Venus shining brightest in the sky, your artistic nature illuminates the world around you.",
    traits: ["Creative", "Artistic", "Harmonious", "Inspiring"],
    color: "from-pink-400 to-purple-600", 
    bgColor: "bg-gradient-to-br from-pink-400/20 to-purple-600/20"
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            You Are...
          </h1>
        </div>

        <Card className={`${planet.bgColor} backdrop-blur-md border-white/20 p-8 mb-8 animate-scale-in`}>
          <div className="text-center mb-8">
            {/* Planet visualization */}
            <div className="flex justify-center mb-6">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${planet.color} shadow-2xl animate-bounce`}
                   style={{ animationDuration: '3s' }}>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
              {planet.name}
            </h2>
            <h3 className="text-2xl text-blue-200 mb-6">
              {planet.title}
            </h3>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              {planet.description}
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {planet.traits.map((trait, index) => (
                <div 
                  key={trait}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-white font-semibold">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button 
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Take Quiz Again
          </Button>
          
          <Button 
            className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
            variant="outline"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Result
          </Button>
        </div>

        <div className="text-center mt-8 text-blue-300 animate-fade-in" style={{ animationDelay: '1s' }}>
          ✨ Your cosmic journey reveals the planet that resonates with your soul ✨
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
