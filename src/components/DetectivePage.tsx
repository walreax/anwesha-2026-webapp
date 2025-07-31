import React, { useEffect, useState } from 'react';

const DetectivePage: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  
  const texts = [
    "You were lured here for a reason.",
    "You cracked the first clue. Now it's time to uncover the full mystery."
  ];

  useEffect(() => {
    if (currentIndex < texts.length) {
      const text = texts[currentIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
          setCurrentText(prev => prev + text[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            if (currentIndex < texts.length - 1) {
              setCurrentText(prev => prev + '\n\n');
              setCurrentIndex(prev => prev + 1);
            } else {
              setShowButton(true);
            }
          }, 1000);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-900 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Parchment Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/10 to-amber-200/5 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-amber-100/10 opacity-30"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Typewriter Text */}
        <div className="bg-amber-50/90 backdrop-blur-sm rounded-lg p-8 shadow-2xl border-4 border-amber-800/30 min-h-[300px] flex flex-col justify-center">
          <div className="font-mono text-xl md:text-2xl text-amber-900 leading-relaxed whitespace-pre-line text-left">
            {currentText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Mystery Button */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            showButton 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <a
            href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-amber-900 bg-amber-200 rounded-full shadow-2xl hover:shadow-amber-400/50 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-400/30 border-2 border-amber-800/30"
            style={{
              filter: showButton ? 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.5))' : 'none'
            }}
          >
            <span className="relative z-10">🔍 Solve the Mystery</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 to-yellow-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-16 w-2 h-2 bg-amber-300 rounded-full animate-ping opacity-40 delay-1000"></div>
        <div className="absolute bottom-16 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-50 delay-500"></div>
        <div className="absolute bottom-32 right-12 w-1 h-1 bg-amber-300 rounded-full animate-ping opacity-30 delay-700"></div>
      </div>
    </div>
  );
};

export default DetectivePage;