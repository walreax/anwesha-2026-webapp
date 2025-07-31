import React, { useState } from 'react';

const GymPage: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {!showReveal ? (
          // Initial Gym Membership Offer
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl mb-6">💪</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Gym Membership Alert!
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-4">
                Scan to get FREE gym membership! 🏋️‍♂️
              </h2>
              <p className="text-xl text-white/80 mb-6">
                No joining fees, no monthly charges!
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
            <div className="text-6xl md:text-8xl mb-6">💀</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gym? Free? Pls be serious 💀
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl text-white leading-relaxed mb-6">
                But Anwesha will make you sweat.
              </p>
              <div className="text-6xl mb-4">🕺💃</div>
              <p className="text-2xl text-green-400 font-bold">
                On the dance floor.
              </p>
              <p className="text-lg text-white/80 mt-4">
                Better cardio than any treadmill! 🔥
              </p>
            </div>

            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-full shadow-2xl hover:shadow-green-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-green-500/30"
            >
              <span className="relative z-10">💪 Join the Dance Floor</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default GymPage;
