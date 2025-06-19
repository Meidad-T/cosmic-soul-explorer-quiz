import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RefreshCw, Share2, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

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
    glowColor: "from-red-500/30 to-orange-600/30",
    shadowColor: "shadow-red-500/20",
    learnMoreUrl: "https://mars.nasa.gov/",
    detailedInfo: {
      overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Known as the Red Planet due to iron oxide on its surface, Mars has fascinated humans for centuries.",
      physicalCharacteristics: "Mars has a diameter of about 4,220 miles (6,792 km), roughly half the size of Earth. It has two small moons, Phobos and Deimos, and the largest volcano in the solar system, Olympus Mons.",
      atmosphere: "Mars has a thin atmosphere composed mostly of carbon dioxide, with temperatures ranging from -195°F to 70°F (-125°C to 20°C).",
      exploration: "Mars has been explored by numerous robotic missions, including rovers like Curiosity, Perseverance, and the historic Ingenuity helicopter.",
      funFacts: [
        "A day on Mars is 24 hours and 37 minutes",
        "Mars has seasons like Earth due to its tilted axis",
        "The largest dust storms in the solar system occur on Mars",
        "Mars likely had liquid water on its surface billions of years ago"
      ]
    }
  },
  {
    name: "Venus",
    title: "The Creative Harmonizer", 
    description: "You bring beauty and creativity wherever you go. Like Venus shining brightest in the sky, your artistic nature illuminates the world around you. Your harmonious spirit creates balance in chaos.",
    traits: ["Creative", "Artistic", "Harmonious", "Inspiring"],
    image: "https://images.unsplash.com/photo-1614728894747-a83421f3afb9?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-pink-400/30 to-purple-600/30",
    shadowColor: "shadow-pink-500/20",
    learnMoreUrl: "https://venus.nasa.gov/",
    detailedInfo: {
      overview: "Venus is the second planet from the Sun and is often called Earth's twin due to similar size. However, it's the hottest planet in our solar system with surface temperatures hot enough to melt lead.",
      physicalCharacteristics: "Venus has a diameter of about 7,521 miles (12,104 km), almost the same as Earth. It rotates backwards compared to most planets and has no moons.",
      atmosphere: "Venus has an extremely thick atmosphere made mostly of carbon dioxide with clouds of sulfuric acid, creating a runaway greenhouse effect.",
      exploration: "Many spacecraft have studied Venus, including the Soviet Venera missions that successfully landed on its surface, and more recently, the Parker Solar Probe and BepiColombo.",
      funFacts: [
        "Venus is the brightest planet in Earth's sky",
        "A day on Venus is longer than a year on Venus",
        "Surface pressure is 90 times greater than Earth's",
        "Venus has over 1,000 volcanoes"
      ]
    }
  },
  {
    name: "Earth",
    title: "The Nurturing Guardian",
    description: "You're grounded, caring, and deeply connected to life around you. Like our beautiful blue planet, you provide stability and support to those in your orbit. Your empathy and wisdom make you a natural protector.",
    traits: ["Nurturing", "Empathetic", "Stable", "Life-giving"],
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-blue-400/30 to-green-500/30",
    shadowColor: "shadow-blue-500/20",
    learnMoreUrl: "https://www.nasa.gov/earth/",
    detailedInfo: {
      overview: "Earth is the third planet from the Sun and the only known planet to harbor life. It's our home world, with diverse ecosystems, vast oceans, and a protective atmosphere that makes life possible.",
      physicalCharacteristics: "Earth has a diameter of about 7,918 miles (12,742 km) and one natural satellite, the Moon. It's composed of 71% water surface and has seven continents.",
      atmosphere: "Earth's atmosphere is 78% nitrogen and 21% oxygen, with trace amounts of other gases. This perfect balance supports all known life forms.",
      exploration: "Earth is constantly studied by satellites, space stations, and ground-based research. The International Space Station orbits Earth every 90 minutes.",
      funFacts: [
        "Earth is the only planet not named after a god",
        "A year on Earth is exactly 365.25 days",
        "Earth's core is as hot as the Sun's surface",
        "The Amazon rainforest produces 20% of the world's oxygen"
      ]
    }
  },
  {
    name: "Jupiter",
    title: "The Mighty Protector",
    description: "You're a natural leader with immense strength and presence. Like the giant of our solar system, you protect those around you and command respect wherever you go. Your wisdom comes from experience and your heart is as vast as your influence.",
    traits: ["Protective", "Wise", "Powerful", "Magnetic"],
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-orange-400/30 to-red-600/30",
    shadowColor: "shadow-orange-500/20",
    learnMoreUrl: "https://www.nasa.gov/jupiter/",
    detailedInfo: {
      overview: "Jupiter is the largest planet in our solar system and the fifth from the Sun. This gas giant has a mass greater than all other planets combined and acts as a cosmic vacuum cleaner, protecting inner planets from asteroids.",
      physicalCharacteristics: "Jupiter has a diameter of about 86,881 miles (139,820 km) and at least 95 moons, including the four large Galilean moons. Its Great Red Spot is a storm larger than Earth.",
      atmosphere: "Jupiter's atmosphere is mostly hydrogen and helium, with colorful bands created by different chemical compounds and extreme winds reaching 400 mph.",
      exploration: "Multiple missions have studied Jupiter, including Voyager, Galileo, and currently Juno, which has provided stunning images and data about the planet's interior.",
      funFacts: [
        "Jupiter has the shortest day of all planets - just 10 hours",
        "Jupiter's moon Europa may have twice as much water as Earth's oceans",
        "The Great Red Spot has been raging for at least 400 years",
        "Jupiter acts as a 'cosmic vacuum cleaner' protecting Earth from asteroids"
      ]
    }
  },
  {
    name: "Saturn",
    title: "The Wise Strategist", 
    description: "Thoughtful and methodical, you approach life with wisdom and patience. Your systematic thinking and reliability make you a natural leader. Like Saturn's magnificent rings, you bring structure and beauty to chaos.",
    traits: ["Wise", "Patient", "Systematic", "Reliable"],
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-yellow-400/30 to-amber-600/30",
    shadowColor: "shadow-yellow-500/20",
    learnMoreUrl: "https://saturn.jpl.nasa.gov/",
    detailedInfo: {
      overview: "Saturn is the sixth planet from the Sun and the second-largest in our solar system. It's best known for its spectacular ring system, making it one of the most beautiful objects in our solar system.",
      physicalCharacteristics: "Saturn is a gas giant with a diameter of about 72,367 miles (116,464 km). It's less dense than water and has at least 146 moons, including Titan, which has a thick atmosphere.",
      atmosphere: "Saturn's atmosphere is composed mainly of hydrogen and helium, with powerful winds reaching speeds of up to 1,100 mph (1,800 km/h).",
      exploration: "The Cassini spacecraft studied Saturn for 13 years, providing incredible insights into the planet and its moons before ending its mission in 2017.",
      funFacts: [
        "Saturn's rings are made mostly of ice particles and rocky debris",
        "A day on Saturn is only 10.7 hours long",
        "Saturn's moon Titan has lakes and rivers of liquid methane",
        "Saturn would float in water due to its low density"
      ]
    }
  },
  {
    name: "Neptune",
    title: "The Mysterious Dreamer",
    description: "Deep and enigmatic, you possess an otherworldly quality that draws people in. Like Neptune's distant beauty, you're complex and fascinating. Your intuition guides you through life's deepest mysteries.",
    traits: ["Mysterious", "Intuitive", "Deep", "Spiritual"],
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-blue-600/30 to-indigo-800/30",
    shadowColor: "shadow-blue-500/20",
    learnMoreUrl: "https://neptune.nasa.gov/",
    detailedInfo: {
      overview: "Neptune is the eighth and outermost planet in our solar system. This ice giant is known for its deep blue color and is the windiest planet, with speeds reaching up to 1,200 mph.",
      physicalCharacteristics: "Neptune has a diameter of about 30,775 miles (49,528 km) and takes 165 Earth years to orbit the Sun. It has 16 known moons, with Triton being the largest.",
      atmosphere: "Neptune's atmosphere consists of hydrogen, helium, and methane. The methane gives Neptune its distinctive blue color by absorbing red light.",
      exploration: "Only one spacecraft, Voyager 2, has visited Neptune, flying by in 1989 and providing most of our detailed knowledge about this distant world.",
      funFacts: [
        "Neptune has the strongest winds in the solar system",
        "A year on Neptune equals 165 Earth years",
        "Neptune radiates more energy than it receives from the Sun",
        "Its largest moon, Triton, orbits backwards"
      ]
    }
  },
  {
    name: "Mercury",
    title: "The Swift Messenger",
    description: "You're quick-thinking, adaptable, and always on the move. Like the planet closest to the Sun, you thrive under pressure and can handle extreme situations. Your agility and communication skills make you an excellent connector of people and ideas.",
    traits: ["Quick-thinking", "Adaptable", "Communicative", "Resilient"],
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-gray-400/30 to-orange-500/30",
    shadowColor: "shadow-gray-500/20",
    learnMoreUrl: "https://www.nasa.gov/mercury/",
    detailedInfo: {
      overview: "Mercury is the smallest planet in our solar system and the closest to the Sun. Despite its proximity to the Sun, it has ice at its poles and experiences extreme temperature variations.",
      physicalCharacteristics: "Mercury has a diameter of about 3,032 miles (4,879 km), making it only slightly larger than Earth's Moon. It has no moons or rings.",
      atmosphere: "Mercury has virtually no atmosphere, which means it can't retain heat, leading to temperature swings from 800°F (427°C) during the day to -290°F (-179°C) at night.",
      exploration: "Mercury has been visited by two spacecraft: Mariner 10 and MESSENGER. The BepiColombo mission is currently en route to study Mercury further.",
      funFacts: [
        "A year on Mercury is only 88 Earth days",
        "Mercury has the most eccentric orbit of all planets",
        "Despite being closest to the Sun, Mercury has ice at its poles",
        "Mercury's core makes up about 75% of the planet's radius"
      ]
    }
  },
  {
    name: "Uranus",
    title: "The Revolutionary Innovator",
    description: "You're unique, innovative, and march to the beat of your own drum. Like Uranus rolling on its side, you approach life from unexpected angles. Your originality and vision inspire others to think differently.",
    traits: ["Innovative", "Unique", "Visionary", "Independent"],
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-cyan-400/30 to-blue-600/30",
    shadowColor: "shadow-cyan-500/20",
    learnMoreUrl: "https://www.nasa.gov/uranus/",
    detailedInfo: {
      overview: "Uranus is the seventh planet from the Sun and is unique for rotating on its side. This ice giant has a distinctive blue-green color due to methane in its atmosphere.",
      physicalCharacteristics: "Uranus has a diameter of about 31,518 miles (50,724 km) and 27 known moons. It has a faint ring system and rotates at a 98-degree angle to its orbit.",
      atmosphere: "Uranus's atmosphere is composed of hydrogen, helium, and methane. The methane gives it its blue-green color and it's the coldest planetary atmosphere in the solar system.",
      exploration: "Only Voyager 2 has visited Uranus, flying by in 1986. Most of our knowledge about this distant world comes from that single encounter and telescope observations.",
      funFacts: [
        "Uranus rotates on its side, possibly due to an ancient collision",
        "A day on Uranus is about 17 hours long",
        "Uranus has the coldest planetary atmosphere in the solar system",
        "Uranus was the first planet discovered with a telescope"
      ]
    }
  }
];

const ResultScreen = ({ answers, onRestart }: ResultScreenProps) => {
  const { toast } = useToast();
  
  // Enhanced algorithm to determine planet based on most frequent answer type
  const answerCounts = [0, 0, 0, 0, 0, 0, 0, 0];
  answers.forEach(answer => {
    answerCounts[answer]++;
  });
  
  const planetIndex = answerCounts.indexOf(Math.max(...answerCounts));
  const planet = planets[planetIndex % planets.length];

  const handleShare = async () => {
    try {
      const shareText = `I just discovered that I'm planet ${planet.name} - ${planet.title}! 🪐 Find out what planet you are!`;
      const currentUrl = window.location.href;
      const shareUrl = `${currentUrl}?planet=${planet.name.toLowerCase()}`;
      
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      
      toast({
        title: "Link copied to clipboard!",
        description: "Share your cosmic personality with friends",
        duration: 3000,
      });
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      toast({
        title: "Couldn't copy link",
        description: "Please try again",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

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
            <div 
              className="w-1 h-1 bg-white rounded-full opacity-40"
              style={{ 
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`
              }}
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

        {/* Main result card */}
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 animate-scale-in relative overflow-hidden">
          {/* Glow effect behind planet */}
          <div className={`absolute inset-0 bg-gradient-to-br ${planet.glowColor} blur-3xl opacity-50`}></div>
          
          <div className="relative z-10">
            {/* Planet image section - FIXED AND CENTERED */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${planet.glowColor} rounded-full blur-2xl scale-110`}></div>
                <div 
                  className={`w-80 h-80 md:w-96 md:h-96 rounded-full relative z-10 ${planet.shadowColor} shadow-2xl bg-cover bg-center bg-no-repeat`}
                  style={{ 
                    backgroundImage: `url(${planet.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'contrast(1.2) saturate(1.3) brightness(1.2)',
                    mixBlendMode: 'screen'
                  }}
                />
              </div>
            </div>
            
            {/* Planet info */}
            <div className="text-center mb-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {planet.name}
              </h2>
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

            {/* Detailed Information Accordion */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="overview" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                    Planet Overview
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 px-6 pb-4">
                    {planet.detailedInfo.overview}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="physical" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                    Physical Characteristics
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 px-6 pb-4">
                    {planet.detailedInfo.physicalCharacteristics}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="atmosphere" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                    Atmosphere & Climate
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 px-6 pb-4">
                    {planet.detailedInfo.atmosphere}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="exploration" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                    Space Exploration
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 px-6 pb-4">
                    {planet.detailedInfo.exploration}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="facts" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                    Amazing Facts
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 px-6 pb-4">
                    <ul className="space-y-2">
                      {planet.detailedInfo.funFacts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Learn More Link */}
            <div className="text-center mb-8">
              <a 
                href={planet.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Learn More About {planet.name}
              </a>
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
            onClick={handleShare}
            className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            variant="outline"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Your Planet
          </Button>
        </div>

        <div className="text-center mt-8 text-blue-300 animate-fade-in flex items-center justify-center gap-2" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span>Your cosmic journey reveals the planet that resonates with your soul</span>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
