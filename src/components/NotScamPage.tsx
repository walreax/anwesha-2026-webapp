import React, { useEffect, useState } from 'react';

const NotScamPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-yellow-400 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Text */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            You really scanned that? Wow. 
            <br />
            We admire the confidence.
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
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed font-medium">
            Don't worry, we won't judge you. 
            <br />
            <span className="text-pink-600 font-bold">Anwesha wants you.</span>
          </p>
        </div>

        {/* Surprised Pikachu Meme */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <div className="relative mx-auto mb-12 max-w-md">
            <img
              src="https://media.giphy.com/media/6nWhy3ulBL7GSuGrIZ/giphy.gif"
              alt="Surprised Pikachu meme"
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
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
            className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl hover:shadow-pink-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-pink-500/30 animate-bounce hover:animate-none"
          >
            <span className="relative z-10">🎪 Embrace the Chaos</span>
            
            {/* Rainbow hover effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce delay-1000">🎉</div>
        <div className="absolute top-20 right-16 text-4xl animate-pulse delay-500">✨</div>
        <div className="absolute bottom-16 left-20 text-5xl animate-bounce delay-700">🎊</div>
        <div className="absolute bottom-32 right-12 text-3xl animate-pulse delay-300">🌟</div>
      </div>
    </div>
  );
};

export default NotScamPage;