import React, { useState } from 'react';

const HealthNutPage: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-900 via-green-800 to-emerald-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {!showReveal ? (
          // Initial Free Salad Offer
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl mb-6">🥗</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Free Salad Bowls for Fit Freshers! 🥗
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-lime-300 mb-4">
                The Health Nut Special
              </h2>
              <p className="text-xl text-green-300 mb-4">
                Scan QR to join the healthy crew! 💪
              </p>
              <p className="text-lg text-white/80 mb-6">
                Fresh, organic, guilt-free eating starts here! 🌱
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
            <div className="text-6xl md:text-8xl mb-6">🔥</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Salads? Nah.
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl text-lime-300 font-bold mb-4">
                You're here for chaos calories.
              </p>
              <div className="text-6xl mb-4">🎤💃</div>
              <p className="text-xl text-white leading-relaxed mb-4">
                Anwesha's events burn more energy than your gym ever will.
              </p>
              <p className="text-lg text-green-300">
                Who needs kale when you can have killer performances? 🎭✨
              </p>
            </div>

            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-lime-500 to-green-600 rounded-full shadow-2xl hover:shadow-lime-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-lime-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-lime-500/30"
            >
              <span className="relative z-10">🥗 Burn Calories Dancing</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthNutPage;
