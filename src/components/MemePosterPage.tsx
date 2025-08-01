import React, { useEffect, useState } from 'react';

const MemePosterPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Top Text */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide">
            Expectation: Free Pizza
          </h1>
        </div>

        {/* Images Side by Side */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
              <img
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
                alt="Delicious Pizza"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                alt="Festival Crowd"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide">
            Reality: Anwesha 2026 – a feast for your soul
          </h2>
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-purple-500-30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-purple-500-30 border border-purple-500 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <span className="mr-2">🎨</span>
            <span>Join the Chaos</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemePosterPage;