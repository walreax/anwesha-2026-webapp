import React, { useEffect, useState, useMemo } from 'react';

const DetectivePage: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  
  const texts = useMemo(() => [
    "You were lured here for a reason.",
    "You cracked the first clue. Now it's time to uncover the full mystery."
  ], []);

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
  }, [currentIndex, texts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900-10 to-transparent opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Professional Typewriter Box */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-10 shadow-2xl border border-gray-200 min-h-300 flex flex-col justify-center">
          <div className="font-mono text-xl md:text-2xl text-gray-800 leading-relaxed whitespace-pre-line text-left">
            {currentText}
            <span className="animate-pulse text-amber-600">|</span>
          </div>
        </div>

        {/* Professional Button */}
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-lg hover:shadow-amber-500-30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-amber-500 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-amber-500-30 border border-amber-500 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <span className="mr-2">🔍</span>
            <span>Discover the Truth</span>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-16 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-50 delay-500"></div>
        <div className="absolute bottom-32 right-12 w-1 h-1 bg-amber-300 rounded-full animate-ping opacity-30 delay-700"></div>
      </div>
    </div>
  );
};

export default DetectivePage;