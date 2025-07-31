import React, { useState } from 'react';

const HostelPage: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {!showReveal ? (
          // Initial Mess Escape Offer
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl mb-6">🏠</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hostel Life Hack!
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">
                Scan to escape mess food FOREVER! 🍽️❌
              </h2>
              <p className="text-xl text-white/80 mb-6">
                No more questionable curry or mystery meat!
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
              Nah, you ain't escaping that shit
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl text-white leading-relaxed mb-6">
                But Anwesha got snacks that won't make you cry on your plate. 😭➡️😋
              </p>
              <div className="text-6xl mb-4">🍿🥨🍕</div>
              <p className="text-2xl text-blue-400 font-bold">
                Real food. Real taste. Real fest.
              </p>
            </div>

            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              <span className="relative z-10">🏠 Escape to Anwesha</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostelPage;
