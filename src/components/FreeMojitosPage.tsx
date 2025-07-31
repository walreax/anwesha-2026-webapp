import React, { useState } from 'react';

const FreeMojitosPage: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {!showReveal ? (
          // Initial Free Mojitos Offer
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl mb-6">🍹</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Free Mojitos for IITP Freshers! 🍹
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">
                Pop-up bar. Secret location.
              </h2>
              <p className="text-xl text-teal-300 mb-4">
                Scan QR. First 25 get sippin'. 🏖️
              </p>
              <p className="text-lg text-white/80 mb-6">
                Exclusive freshers only event!
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
            <div className="text-6xl md:text-8xl mb-6">🏖️</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bro... this ain't a beach.
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl text-cyan-300 font-bold mb-4">
                But the vibe? Totally beach-party coded. 🏖️
              </p>
              <div className="text-6xl mb-4">🌊🕺</div>
              <p className="text-xl text-white leading-relaxed mb-4">
                Anwesha's coming to flood your timeline and your night.
              </p>
              <p className="text-lg text-teal-300">
                No mojitos, but the energy hits different! 🎤🎶
              </p>
            </div>

            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
            >
              <span className="relative z-10">🍹 Dive into Anwesha</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreeMojitosPage;
