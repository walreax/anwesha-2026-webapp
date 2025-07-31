import React, { useState } from 'react';

const SecretBiryaniPage: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {!showReveal ? (
          // Initial Secret Biryani Offer
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl mb-6">🍛</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Secret Biryani 👀🤤
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
                Limited plates. Hidden stall.
              </h2>
              <p className="text-xl text-orange-300 mb-4">
                First 25 get free drinks! 🥤
              </p>
              <p className="text-lg text-white/80 mb-6">
                Scan QR to unlock the location 📍
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
            <div className="text-6xl md:text-8xl mb-6">🌶️</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              No Biryani here… but guess what's spicier?
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl text-amber-300 font-bold mb-4">
                Anwesha is cooking up events hotter than dum biryani! 🔥
              </p>
              <p className="text-xl text-white leading-relaxed mb-4">
                You came for food, but you just got a taste of IIT Patna's biggest fest.
              </p>
              <div className="text-6xl mb-4">🎤🎪</div>
              <p className="text-lg text-orange-300">
                From concerts to competitions - we serve entertainment, not rice! 🍽️➡️🎭
              </p>
            </div>

            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-amber-500 to-red-600 rounded-full shadow-2xl hover:shadow-amber-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-amber-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-amber-500/30"
            >
              <span className="relative z-10">🍛 Taste the Real Spice</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecretBiryaniPage;
