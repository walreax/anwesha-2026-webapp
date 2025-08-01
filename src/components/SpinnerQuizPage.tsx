import React, { useState } from 'react';

const SpinnerQuizPage: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showPersonality, setShowPersonality] = useState(false);
  const [finalRotation, setFinalRotation] = useState(0);

  const personalities = [
    {
      name: "Foodie",
      description: "You live for the taste! From street food to gourmet, you're always hunting for the next delicious bite. Anwesha's food stalls are calling your name!",
      emoji: "🍕",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Performer",
      description: "The stage is your second home! Whether it's dance, music, or drama, you shine brightest when all eyes are on you. Anwesha's stages await your talent!",
      emoji: "🎭",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Night Owl",
      description: "When the sun goes down, you come alive! Late-night adventures, midnight conversations, and dawn parties - that's your vibe. Anwesha nights are made for you!",
      emoji: "🦉",
      color: "from-blue-400 to-indigo-600"
    },
    {
      name: "Quizzer",
      description: "Your brain is a treasure trove of random facts! From trivia nights to debate competitions, you love flexing those mental muscles. Anwesha's quiz competitions need you!",
      emoji: "🧠",
      color: "from-green-400 to-teal-500"
    }
  ];

  const spinWheel = () => {
    setIsSpinning(true);
    setResult(null);
    setShowPersonality(false);

    // Generate a random final rotation between 720 and 1440 degrees (2-4 full rotations)
    const minRotation = 720; // 2 full rotations
    const maxRotation = 1440; // 4 full rotations  
    const randomRotation = Math.random() * (maxRotation - minRotation) + minRotation;
    setFinalRotation(randomRotation);

    setTimeout(() => {
      // Calculate which personality the wheel landed on
      // Since we have 4 personalities, each section is 90 degrees
      const normalizedRotation = randomRotation % 360;
      
      // The wheel sections are:
      // 0-90°: Red section (Foodie - index 0)
      // 90-180°: Teal section (Performer - index 1) 
      // 180-270°: Blue section (Night Owl - index 2)
      // 270-360°: Green section (Quizzer - index 3)
      
      // The pointer is at the top (12 o'clock position)
      // We need to determine which section the pointer is pointing to
      let sectionIndex;
      if (normalizedRotation >= 0 && normalizedRotation < 90) {
        sectionIndex = 0; // Foodie
      } else if (normalizedRotation >= 90 && normalizedRotation < 180) {
        sectionIndex = 1; // Performer
      } else if (normalizedRotation >= 180 && normalizedRotation < 270) {
        sectionIndex = 2; // Night Owl
      } else {
        sectionIndex = 3; // Quizzer
      }
      
      const selectedPersonality = personalities[sectionIndex];
      setResult(selectedPersonality.name);
      setIsSpinning(false);
      
      setTimeout(() => {
        setShowPersonality(true);
      }, 500);
    }, 3000);
  };

  const currentPersonality = personalities.find(p => p.name === result);

  return (
    <>
      <style>
        {`
          @keyframes spin-wheel {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(${finalRotation}deg); }
          }
          .spinning-wheel {
            animation: spin-wheel 3s cubic-bezier(0.23, 1, 0.32, 1);
            animation-fill-mode: forwards;
          }
        `}
      </style>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's find your Anwesha vibe…
          </h1>
        </div>

        {/* Spinner Wheel */}
        <div className="relative">
          <div 
            className={`w-80 h-80 mx-auto rounded-full border-8 border-white shadow-2xl relative overflow-hidden ${
              isSpinning ? 'spinning-wheel' : ''
            }`}
            style={{
              background: 'conic-gradient(from 0deg, #ff6b6b 0deg 90deg, #a855f7 90deg 180deg, #3b82f6 180deg 270deg, #10b981 270deg 360deg)',
            }}
          >
            {/* Wheel Sections */}
            <div className="absolute inset-0">
              {personalities.map((personality, index) => {
                // Calculate angle for each personality (45°, 135°, 225°, 315°)
                const angle = 45 + (index * 90);
                // Calculate position on the circle (radius of about 80px from center - closer to center)
                const radius = 80;
                const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={personality.name}
                    className="absolute bg-black/40 px-3 py-2 rounded-lg text-white font-bold text-sm flex items-center space-x-2 border border-white/20"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10
                    }}
                  >
                    <span className="text-lg">{personality.emoji}</span>
                    <span>{personality.name}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg z-10"></div>
          </div>
          
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          </div>
        </div>

        {/* Spin Button */}
        {!isSpinning && !showPersonality && (
          <button
            onClick={spinWheel}
            className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl hover:shadow-pink-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-pink-500/30"
          >
            <span className="relative z-10">🎯 Spin the Wheel!</span>
          </button>
        )}

        {/* Loading */}
        {isSpinning && (
          <div className="text-white text-xl animate-pulse">
            🎲 Finding your perfect vibe...
          </div>
        )}

        {/* Result */}
        {showPersonality && currentPersonality && (
          <div className="space-y-6 animate-fade-in">
            <div className={`bg-gradient-to-r ${currentPersonality.color} p-8 rounded-2xl shadow-2xl text-white`}>
              <div className="text-6xl mb-4">{currentPersonality.emoji}</div>
              <h2 className="text-4xl font-bold mb-4">You're a {currentPersonality.name}!</h2>
              <p className="text-lg leading-relaxed">{currentPersonality.description}</p>
            </div>
            
            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-blue-500-30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-500-30 border border-blue-500 no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span className="mr-2">🎪</span>
              <span>Join Your Tribe</span>
            </a>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default SpinnerQuizPage;