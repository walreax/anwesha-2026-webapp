import React, { useEffect, useState } from 'react';

const NotScamPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex flex-col items-center justify-center px-4 py-8 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Text */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
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
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed font-medium">
            Don't worry, we won't judge you. 
            <br />
            <span className="text-blue-400 font-bold">Anwesha wants you.</span>
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
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-gray-600"
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-blue-500-30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-500-30 border border-blue-500 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <span className="mr-2">🎪</span>
            <span>Embrace the Chaos</span>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-50">🎉</div>
        <div className="absolute top-20 right-16 text-4xl opacity-50">✨</div>
        <div className="absolute bottom-16 left-20 text-5xl opacity-50">🎊</div>
        <div className="absolute bottom-32 right-12 text-3xl opacity-50">🌟</div>
      </div>
    </div>
  );
};

export default NotScamPage;