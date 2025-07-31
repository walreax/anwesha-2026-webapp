import React, { useState } from 'react';

const FreeAttendancePage: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {!showReveal ? (
          // Initial Free Attendance Offer
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl mb-6">🎓</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Free Attendance 👀
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">
                Skip class. No questions asked.
              </h2>
              <p className="text-xl text-pink-300 mb-4">
                Just scan the QR.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Your golden pass awaits. 🎓✨
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
            <div className="text-6xl md:text-8xl mb-6">🤭</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              No attendance here.
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl text-purple-300 font-bold mb-4">
                But hey — who needs classes when you've got Anwesha? 🤭
              </p>
              <div className="text-6xl mb-4">🎤💃🎭</div>
              <p className="text-xl text-white leading-relaxed mb-4">
                🔥 From concerts to chaos,<br/>
                Anwesha is the ultimate escape plan.
              </p>
              <p className="text-lg text-pink-300 mb-4">
                You came for a shortcut.<br/>
                You found a fest that's totally worth the bunk.
              </p>
              <p className="text-xl text-purple-400 font-bold">
                Stay curious. Stay chaotic.<br/>
                Anwesha is calling. ✨
              </p>
            </div>

            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-purple-600 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-500/30"
            >
              <span className="relative z-10">🎓 Skip to Anwesha</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreeAttendancePage;
