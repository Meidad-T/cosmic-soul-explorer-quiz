
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const planets = [
  {
    id: 'sun',
    name: 'Sun',
    title: 'The Life Giver',
    description: "The Sun is the star at the center of our solar system. It's a massive ball of hot plasma that provides the light and heat necessary for life on Earth. The Sun contains 99.86% of the mass in our solar system and its core temperature reaches about 15 million degrees Celsius.",
    traits: ["Nuclear fusion powerhouse", "Magnetic field generator", "Life sustainer", "Solar wind creator"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-yellow-400/30 to-orange-500/30",
    shadowColor: "shadow-yellow-500/20",
    learnMoreUrl: "https://www.nasa.gov/sun/",
    size: "w-20 h-20",
    position: "left-[10%]"
  },
  {
    id: 'mercury',
    name: 'Mercury',
    title: 'The Swift Messenger',
    description: "Mercury is the smallest planet in our solar system and the closest to the Sun. It has extreme temperature variations, from 427°C during the day to -173°C at night. Despite being so close to the Sun, Mercury has ice in its polar craters.",
    traits: ["Fastest orbit", "Extreme temperatures", "No atmosphere", "Iron core"],
    image: "https://images.unsplash.com/photo-1614728894747-a83421185d10?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-gray-400/30 to-yellow-600/30",
    shadowColor: "shadow-gray-500/20",
    learnMoreUrl: "https://www.nasa.gov/mercury/",
    size: "w-8 h-8",
    position: "left-[20%]"
  },
  {
    id: 'venus',
    name: 'Venus',
    title: 'The Shining Beauty',
    description: "Venus is the hottest planet in our solar system, even hotter than Mercury, due to its thick atmosphere that traps heat. It's often called Earth's twin because of similar size and mass, but its surface conditions are extremely hostile with crushing pressure and sulfuric acid clouds.",
    traits: ["Hottest planet", "Thick atmosphere", "Retrograde rotation", "Volcanic surface"],
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-yellow-400/30 to-orange-500/30",
    shadowColor: "shadow-yellow-500/20",
    learnMoreUrl: "https://www.nasa.gov/venus/",
    size: "w-10 h-10",
    position: "left-[30%]"
  },
  {
    id: 'earth',
    name: 'Earth',
    title: 'The Blue Marble',
    description: "Earth is the only known planet to harbor life. It has the perfect distance from the Sun, liquid water, and a protective atmosphere. Earth's unique features include plate tectonics, a large moon that stabilizes its tilt, and a magnetic field that protects us from harmful solar radiation.",
    traits: ["Only known life-bearing planet", "Liquid water", "Protective atmosphere", "Active geology"],
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-blue-400/30 to-green-500/30",
    shadowColor: "shadow-blue-500/20",
    learnMoreUrl: "https://www.nasa.gov/earth/",
    size: "w-12 h-12",
    position: "left-[40%]"
  },
  {
    id: 'mars',
    name: 'Mars',
    title: 'The Red Planet',
    description: "Mars is known as the Red Planet due to iron oxide (rust) on its surface. It has the largest volcano in the solar system (Olympus Mons) and evidence suggests it once had liquid water. Mars has polar ice caps and the longest canyon system known (Valles Marineris).",
    traits: ["Iron oxide surface", "Polar ice caps", "Ancient water evidence", "Largest volcano"],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-red-400/30 to-orange-600/30",
    shadowColor: "shadow-red-500/20",
    learnMoreUrl: "https://www.nasa.gov/mars/",
    size: "w-10 h-10",
    position: "left-[50%]"
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    title: 'The Giant Guardian',
    description: "Jupiter is the largest planet in our solar system and acts as a cosmic vacuum cleaner, protecting inner planets from asteroids and comets. It has a Great Red Spot storm that's been raging for centuries and over 80 known moons, including the four large Galilean moons.",
    traits: ["Largest planet", "Great Red Spot", "80+ moons", "Cosmic protector"],
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-orange-400/30 to-red-600/30",
    shadowColor: "shadow-orange-500/20",
    learnMoreUrl: "https://www.nasa.gov/jupiter/",
    size: "w-16 h-16",
    position: "left-[60%]"
  },
  {
    id: 'saturn',
    name: 'Saturn',
    title: 'The Ringed Beauty',
    description: "Saturn is famous for its spectacular ring system made of ice and rock particles. It's the second-largest planet and has a lower density than water. Saturn has over 80 moons, including Titan, which has a thick atmosphere and liquid methane lakes.",
    traits: ["Spectacular rings", "Low density", "80+ moons", "Hexagonal storm"],
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-yellow-400/30 to-amber-600/30",
    shadowColor: "shadow-yellow-500/20",
    learnMoreUrl: "https://www.nasa.gov/saturn/",
    size: "w-14 h-14",
    position: "left-[70%]"
  },
  {
    id: 'uranus',
    name: 'Uranus',
    title: 'The Tilted Giant',
    description: "Uranus is unique because it rotates on its side, likely due to an ancient collision. It's an ice giant with a faint ring system and extreme seasons that last 21 Earth years each. The planet appears blue-green due to methane in its atmosphere.",
    traits: ["Rotates on side", "Ice giant", "21-year seasons", "Methane atmosphere"],
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7b?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-cyan-400/30 to-blue-600/30",
    shadowColor: "shadow-cyan-500/20",
    learnMoreUrl: "https://www.nasa.gov/uranus/",
    size: "w-12 h-12",
    position: "left-[80%]"
  },
  {
    id: 'neptune',
    name: 'Neptune',
    title: 'The Windy Giant',
    description: "Neptune is the windiest planet in our solar system with speeds reaching 2,100 km/h. It's the farthest planet from the Sun and takes 165 Earth years to complete one orbit. Neptune has a deep blue color and a large moon called Triton that orbits backwards.",
    traits: ["Fastest winds", "Deepest blue", "165-year orbit", "Backward moon"],
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-blue-400/30 to-indigo-600/30",
    shadowColor: "shadow-blue-500/20",
    learnMoreUrl: "https://www.nasa.gov/neptune/",
    size: "w-12 h-12",
    position: "left-[90%]"
  }
];

const LearnPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

  const handlePlanetClick = (planet: typeof planets[0]) => {
    setSelectedPlanet(planet);
    // Smooth scroll to the information section
    document.getElementById('planet-info')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Solar System */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Explore Our Solar System
          </h1>
          <p className="text-xl text-white/80 mb-8 animate-fade-in">
            Click on any celestial body to learn more about it
          </p>
        </div>

        {/* Solar System Layout */}
        <div className="absolute inset-0 flex items-center">
          <div className="relative w-full h-32">
            {planets.map((planet) => (
              <button
                key={planet.id}
                onClick={() => handlePlanetClick(planet)}
                className={`absolute ${planet.size} ${planet.position} top-1/2 transform -translate-y-1/2 rounded-full transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer group`}
                style={{
                  backgroundImage: `url(${planet.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(1.1)',
                  mixBlendMode: 'screen'
                }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${planet.glowColor} rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Planet name tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                    {planet.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Planet Information */}
      <div id="planet-info" className="min-h-screen bg-gradient-to-b from-transparent to-black/50 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/40 border-white/20 backdrop-blur-lg animate-fade-in">
            <div className="p-8">
              {/* Planet image section */}
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedPlanet.glowColor} rounded-full blur-2xl scale-110`}></div>
                  <div 
                    className={`w-80 h-80 md:w-96 md:h-96 rounded-full relative z-10 ${selectedPlanet.shadowColor} shadow-2xl bg-cover bg-center bg-no-repeat`}
                    style={{ 
                      backgroundImage: `url(${selectedPlanet.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'contrast(1.2) saturate(1.3) brightness(1.2)',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
              </div>

              {/* Planet info */}
              <div className="text-center space-y-6 animate-scale-in">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {selectedPlanet.name}
                </h2>
                
                <h3 className="text-2xl text-purple-300 font-semibold">
                  {selectedPlanet.title}
                </h3>
                
                <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                  {selectedPlanet.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
                  {selectedPlanet.traits.map((trait, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                      <span className="text-white/90 text-sm font-medium">{trait}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => window.open(selectedPlanet.learnMoreUrl, '_blank')}
                  >
                    Learn More from NASA
                  </Button>
                </div>

                <div className="pt-8">
                  <Button 
                    variant="ghost" 
                    className="text-white/70 hover:text-white hover:bg-white/10"
                    onClick={() => {
                      document.getElementById('solar-system')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                      });
                    }}
                  >
                    ↑ Back to Solar System
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
