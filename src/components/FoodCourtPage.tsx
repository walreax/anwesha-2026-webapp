import React, { useState } from 'react';

// Food Court Page with QR reveal mechanic
const FoodCourtPage: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  // Add debugging
  console.log('FoodCourtPage component loaded');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {!showReveal ? (
          // Initial Pizza Offer
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl mb-6">🍕</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Food Court Special!
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-300 mb-4">
                Scan to get 2 FREE PIZZAS! 🍕🍕
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Limited time offer for IITP students only!
              </p>
              <div className="w-48 h-48 mx-auto bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                   onClick={() => setShowReveal(true)}>
                <div className="text-black text-xs text-center p-4">
                  📱 QR CODE<br/>
                  Click to scan
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Reveal
          <div className="space-y-6 animate-fade-in">
            <div className="text-6xl md:text-8xl mb-6">😭</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              You really fell for that?
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-8xl mb-6">🤨</div>
              <p className="text-2xl md:text-3xl text-orange-300 mb-6 font-bold">
                Rock raising eyebrow moment
              </p>
              <p className="text-xl text-white leading-relaxed mb-4">
                No pizza, just Anwesha's food walk.
              </p>
              <p className="text-2xl text-orange-400 font-bold">
                Worth it tho 🔥
              </p>
            </div>

            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-2xl hover:shadow-orange-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-orange-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
            >
              <span className="relative z-10">🍕 Join the Food Walk</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCourtPage;
