
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ExternalLink } from 'lucide-react';

// Updated planet data with correct PNG images
const planets = [
  {
    id: 'sun',
    name: "Sun",
    title: "The Life Giver",
    description: "The Sun is the star at the center of our solar system. It's a massive ball of hot plasma that provides the light and heat necessary for life on Earth. The Sun contains 99.86% of the mass in our solar system and its core temperature reaches about 15 million degrees Celsius.",
    traits: ["Nuclear fusion powerhouse", "Magnetic field generator", "Life sustainer", "Solar wind creator"],
    image: "https://th.bing.com/th/id/R.03fa97f5e3d4e7423016f6e944540b78?rik=xrYNt3W1mfAnPQ&pid=ImgRaw&r=0",
    glowColor: "from-yellow-400/30 to-orange-500/30",
    shadowColor: "shadow-yellow-500/20",
    learnMoreUrl: "https://www.nasa.gov/sun/",
    size: "w-12 h-12",
    orbitRadius: 0,
    detailedInfo: {
      overview: "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit.",
      physicalCharacteristics: "The Sun's diameter is about 865,000 miles (1.4 million km), making it 109 times wider than Earth. Its mass is about 333,000 times that of Earth.",
      atmosphere: "The Sun's surface temperature is about 5,778 K (5,505°C), while its core reaches temperatures of about 15 million°C.",
      exploration: "Multiple space missions study the Sun, including the Parker Solar Probe, which is flying closer to the Sun than any previous spacecraft.",
      funFacts: [
        "The Sun produces energy through nuclear fusion",
        "Light from the Sun takes 8 minutes to reach Earth",
        "The Sun's core is 27 million degrees Fahrenheit",
        "One million Earths could fit inside the Sun"
      ]
    }
  },
  {
    id: 'mercury',
    name: "Mercury",
    title: "The Swift Messenger",
    description: "Mercury is quick-thinking, adaptable, and always on the move. Like the planet closest to the Sun, it thrives under pressure and can handle extreme situations. Its agility and rapid orbital speed make it an excellent example of cosmic efficiency.",
    traits: ["Quick-thinking", "Adaptable", "Communicative", "Resilient"],
    image: "https://th.bing.com/th/id/OIP.r7vRcrm6TMerm32U8aDttwHaHa?r=0&rs=1&pid=ImgDetMain",
    glowColor: "from-gray-400/30 to-orange-500/30",
    shadowColor: "shadow-gray-500/20",
    learnMoreUrl: "https://www.nasa.gov/mercury/",
    size: "w-6 h-6",
    orbitRadius: 60,
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
    id: 'venus',
    name: "Venus",
    title: "The Creative Harmonizer", 
    description: "Venus brings beauty and creativity wherever it goes. Like Venus shining brightest in the sky, its artistic nature illuminates the cosmos around it. Its harmonious spirit creates balance in the celestial dance.",
    traits: ["Creative", "Artistic", "Harmonious", "Inspiring"],
    image: "https://images.unsplash.com/photo-1614728894747-a83421f3afb9?w=800&h=800&fit=crop&crop=center",
    glowColor: "from-pink-400/30 to-purple-600/30",
    shadowColor: "shadow-pink-500/20",
    learnMoreUrl: "https://venus.nasa.gov/",
    size: "w-7 h-7",
    orbitRadius: 75,
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
    id: 'earth',
    name: "Earth",
    title: "The Nurturing Guardian",
    description: "Earth is grounded, caring, and deeply connected to life. Like our beautiful blue planet, it provides stability and support to all life in its orbit. Its empathy and wisdom make it a natural protector of the solar system.",
    traits: ["Nurturing", "Empathetic", "Stable", "Life-giving"],
    image: "https://th.bing.com/th/id/R.f7d55168cbba981e7c1b0b39fb31ca6d?rik=Zc1WySqVPE4UbQ&pid=ImgRaw&r=0",
    glowColor: "from-blue-400/30 to-green-500/30",
    shadowColor: "shadow-blue-500/20",
    learnMoreUrl: "https://www.nasa.gov/earth/",
    size: "w-8 h-8",
    orbitRadius: 90,
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
    id: 'moon',
    name: "Moon",
    title: "The Celestial Companion",
    description: "The Moon is Earth's loyal companion, influencing our tides and illuminating our nights. It has been humanity's stepping stone to the stars and continues to fascinate us with its mysterious beauty and gravitational dance with Earth.",
    traits: ["Loyal", "Mysterious", "Influential", "Guiding"],
    image: "https://th.bing.com/th/id/R.9a5611525608c7bd1b8e2f2845d9c381?rik=aIsmGEsca3CuDg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmoon%2fmoon_PNG21.png&ehk=TWToKq1UKhWID93B4u7%2bKlZVgguWCXwTrkm5oaS%2b2x4%3d&risl=&pid=ImgRaw&r=0",
    glowColor: "from-gray-300/30 to-blue-400/30",
    shadowColor: "shadow-gray-400/20",
    learnMoreUrl: "https://www.nasa.gov/moon/",
    size: "w-4 h-4",
    orbitRadius: 100,
    detailedInfo: {
      overview: "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. It plays a crucial role in stabilizing Earth's rotation and creating tides.",
      physicalCharacteristics: "The Moon has a diameter of about 2,159 miles (3,474 km), roughly one-quarter the size of Earth. It's the largest moon relative to its parent planet in our solar system.",
      atmosphere: "The Moon has virtually no atmosphere, which means no weather, no wind, and extreme temperature variations from 250°F (121°C) in sunlight to -387°F (-233°C) in shadow.",
      exploration: "The Moon is the only celestial body beyond Earth that humans have visited. Six Apollo missions successfully landed 12 astronauts on the lunar surface between 1969 and 1972.",
      funFacts: [
        "The Moon is moving away from Earth at about 1.5 inches per year",
        "A day on the Moon lasts about 29.5 Earth days",
        "The Moon's gravity is about 1/6th of Earth's",
        "The same side of the Moon always faces Earth"
      ]
    }
  },
  {
    id: 'mars',
    name: "Mars",
    title: "The Adventurous Pioneer",
    description: "Mars is bold, passionate, and always ready for the next adventure. Like the Red Planet, it has a fiery spirit and isn't afraid to explore uncharted territories. Its courage inspires others to push beyond their limits.",
    traits: ["Courageous", "Energetic", "Independent", "Pioneering"],
    image: "https://pngimg.com/uploads/mars_planet/mars_planet_PNG31.png",
    glowColor: "from-red-500/30 to-orange-600/30",
    shadowColor: "shadow-red-500/20",
    learnMoreUrl: "https://mars.nasa.gov/",
    size: "w-7 h-7",
    orbitRadius: 115,
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
    id: 'jupiter',
    name: "Jupiter",
    title: "The Mighty Protector",
    description: "Jupiter is a natural leader with immense strength and presence. Like the giant of our solar system, it protects those around it and commands respect wherever it goes. Its wisdom comes from experience and its influence is as vast as its size.",
    traits: ["Protective", "Wise", "Powerful", "Magnetic"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/049/514/755/small_2x/jupiter-planet-closeup-view-isolated-transparent-png.png",
    glowColor: "from-orange-400/30 to-red-600/30",
    shadowColor: "shadow-orange-500/20",
    learnMoreUrl: "https://www.nasa.gov/jupiter/",
    size: "w-12 h-12",
    orbitRadius: 140,
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
    id: 'saturn',
    name: "Saturn",
    title: "The Wise Strategist", 
    description: "Saturn is thoughtful and methodical, approaching the cosmos with wisdom and patience. Its systematic thinking and reliability make it a natural leader. Like Saturn's magnificent rings, it brings structure and beauty to chaos.",
    traits: ["Wise", "Patient", "Systematic", "Reliable"],
    image: "https://static.vecteezy.com/system/resources/previews/039/630/632/non_2x/ai-generated-saturn-planet-isolated-on-transparent-background-free-png.png",
    glowColor: "from-yellow-400/30 to-amber-600/30",
    shadowColor: "shadow-yellow-500/20",
    learnMoreUrl: "https://saturn.jpl.nasa.gov/",
    size: "w-10 h-10",
    orbitRadius: 170,
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
    id: 'uranus',
    name: "Uranus",
    title: "The Revolutionary Innovator",
    description: "Uranus is unique, innovative, and marches to the beat of its own drum. Like Uranus rolling on its side, it approaches cosmic life from unexpected angles. Its originality and vision inspire others to think differently.",
    traits: ["Innovative", "Unique", "Visionary", "Independent"],
    image: "https://wallpapers.com/images/hd/uranus-astronomical-object-png-ayc-b770a2f4gjnhxol8.png",
    glowColor: "from-cyan-400/30 to-blue-600/30",
    shadowColor: "shadow-cyan-500/20",
    learnMoreUrl: "https://www.nasa.gov/uranus/",
    size: "w-8 h-8",
    orbitRadius: 200,
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
  },
  {
    id: 'neptune',
    name: "Neptune",
    title: "The Mysterious Dreamer",
    description: "Neptune is deep and enigmatic, possessing an otherworldly quality that draws others in. Like Neptune's distant beauty, it's complex and fascinating. Its intuition guides it through the cosmos's deepest mysteries.",
    traits: ["Mysterious", "Intuitive", "Deep", "Spiritual"],
    image: "https://jfbdesign.com/wp-content/uploads/revslider/solar-system-showcase-slider1/neptune.png",
    glowColor: "from-blue-600/30 to-indigo-800/30",
    shadowColor: "shadow-blue-500/20",
    learnMoreUrl: "https://neptune.nasa.gov/",
    size: "w-8 h-8",
    orbitRadius: 230,
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
  }
];

const LearnPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlanetClick = (planet: typeof planets[0]) => {
    setSelectedPlanet(planet);
    document.getElementById('planet-info')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Calculate effects based on scroll (0-500px range)
  const scrollProgress = Math.min(scrollY / 500, 1);
  
  // Text effects: move up and scale down
  const textTranslateY = -scrollProgress * 200; // Move up 200px
  const textScale = 1 - (scrollProgress * 0.3); // Scale down to 70%
  const textOpacity = 1 - scrollProgress; // Fade out completely
  
  // Diagram effects: zoom in and center
  const diagramScale = 1 + (scrollProgress * 0.5); // Zoom in 50%
  const diagramOpacity = 0.3 + (scrollProgress * 0.7); // Fade in from 30% to 100%

  // Only show planet info when fully zoomed in AND a planet is selected
  const isFullyZoomedIn = scrollProgress >= 0.95; // Use 95% threshold instead of perfect 100%
  const shouldShowPlanetInfo = selectedPlanet && isFullyZoomedIn;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Fixed container for the zoom effect */}
      <div className="fixed inset-0 flex items-center justify-center">
        {/* Title with move up and scale down effect */}
        <div 
          className="absolute text-center z-20 transition-all duration-100 ease-out"
          style={{ 
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px) scale(${textScale})`,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Solar System
          </h1>
          <p className="text-xl text-white/80">
            Click on any celestial body to learn more about it
          </p>
        </div>

        {/* Solar System Layout with zoom effect */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-100 ease-out"
          style={{ 
            transform: `scale(${diagramScale})`,
            opacity: diagramOpacity
          }}
        >
          <div className="relative w-full h-full max-w-4xl max-h-4xl">
            {/* Orbital rings */}
            {[60, 75, 90, 100, 115, 140, 170, 200, 230].map((radius, index) => (
              <div
                key={radius}
                className="absolute border border-white/20 rounded-full"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}

            {/* Sun at center */}
            <button
              onClick={() => handlePlanetClick(planets[0])}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer group z-10 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${planets[0].image})`,
                backgroundSize: 'contain',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${planets[0].glowColor} rounded-full blur-lg scale-150 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-semibold bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                  {planets[0].name}
                </span>
              </div>
            </button>

            {/* Planets on orbits */}
            {planets.slice(1).map((planet, index) => {
              const angle = (index * 40) % 360;
              const x = Math.cos((angle * Math.PI) / 180) * planet.orbitRadius;
              const y = Math.sin((angle * Math.PI) / 180) * planet.orbitRadius;
              
              return (
                <button
                  key={planet.id}
                  onClick={() => handlePlanetClick(planet)}
                  className={`absolute ${planet.size} rounded-full transition-all duration-300 hover:scale-110 cursor-pointer group z-10 bg-cover bg-center bg-no-repeat`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `url(${planet.image})`,
                    backgroundSize: 'contain',
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${planet.glowColor} rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                      {planet.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer to enable scrolling */}
      <div className="h-[100vh]"></div>

      {/* Planet Information - Only show when fully zoomed in AND a planet is selected */}
      {shouldShowPlanetInfo && (
        <div id="planet-info" className="min-h-screen bg-black px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/90 border-white/20 backdrop-blur-lg animate-fade-in">
              <div className="p-8">
                {/* Planet image section */}
                <div className="flex justify-center mb-8">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedPlanet.glowColor} rounded-full blur-2xl scale-110`}></div>
                    <div 
                      className={`w-80 h-80 md:w-96 md:h-96 rounded-full relative z-10 ${selectedPlanet.shadowColor} shadow-2xl bg-cover bg-center bg-no-repeat`}
                      style={{ 
                        backgroundImage: `url(${selectedPlanet.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
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
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <p className="text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
                      {selectedPlanet.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
                    {selectedPlanet.traits.map((trait, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <span className="text-white font-semibold text-center block">{trait}</span>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Information Accordion */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mt-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="overview" className="border-white/10">
                        <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                          {selectedPlanet.id === 'sun' ? 'Star' : selectedPlanet.id === 'moon' ? 'Moon' : 'Planet'} Overview
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-200 px-6 pb-4">
                          {selectedPlanet.detailedInfo.overview}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="physical" className="border-white/10">
                        <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                          Physical Characteristics
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-200 px-6 pb-4">
                          {selectedPlanet.detailedInfo.physicalCharacteristics}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="atmosphere" className="border-white/10">
                        <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                          {selectedPlanet.id === 'sun' ? 'Composition' : 'Atmosphere & Climate'}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-200 px-6 pb-4">
                          {selectedPlanet.detailedInfo.atmosphere}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="exploration" className="border-white/10">
                        <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                          Space Exploration
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-200 px-6 pb-4">
                          {selectedPlanet.detailedInfo.exploration}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="facts" className="border-white/10">
                        <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4">
                          Amazing Facts
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-200 px-6 pb-4">
                          <ul className="space-y-2">
                            {selectedPlanet.detailedInfo.funFacts.map((fact, index) => (
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
                  
                  <div className="pt-6">
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent hover:border-white/50"
                      onClick={() => window.open(selectedPlanet.learnMoreUrl, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Learn More from NASA
                    </Button>
                  </div>

                  <div className="pt-8">
                    <Button 
                      variant="ghost" 
                      className="text-white/70 hover:text-white hover:bg-white/10"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
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
      )}
    </div>
  );
};

export default LearnPage;
