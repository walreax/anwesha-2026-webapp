import React, { useEffect, useState } from 'react';

const RevealPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Text */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Oops! You just fell for our trap…
          </h1>
        </div>

        {/* Subtext */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            But hey, good things come to those who are curious 😉
          </p>
        </div>

        {/* GIF */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <div className="relative mx-auto mb-12 max-w-md">
            <img
              src="https://media.giphy.com/media/kHs1lBhZWaK5rj7lt3/giphy.gif"
              alt="Funny Office reaction"
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-gray-800"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <a
            href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-black bg-white rounded-full shadow-2xl hover:shadow-white/20 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30 animate-bounce hover:animate-none"
          >
            <span className="relative z-10">🎭 Enter the Mystery</span>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Ripple effect on click */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 transform scale-0 group-active:scale-100 transition-all duration-200"></div>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-white rounded-full animate-ping opacity-40 delay-1000"></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-50 delay-500"></div>
        <div className="absolute bottom-32 right-12 w-1 h-1 bg-white rounded-full animate-ping opacity-30 delay-700"></div>
      </div>
    </div>
  );
};

export default RevealPage;