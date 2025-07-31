import React, { useEffect, useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';

const RewardPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText('CuriousCat');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Gift Animation */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <div className="text-8xl mb-6 animate-bounce">
            🎁
          </div>
        </div>

        {/* Main Text */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            You were brave enough to scan.
            <br />
            So here's your prize 🎁
          </h1>
        </div>

        {/* Coupon Code */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-yellow-400 max-w-md mx-auto">
            <div className="text-yellow-500 text-4xl mb-4">🎫</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Exclusive Coupon Code</h2>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border-2 border-dashed border-gray-300">
              <div className="font-mono text-3xl font-bold text-purple-600 tracking-wider">
                CuriousCat
              </div>
            </div>
            
            <button
              onClick={copyCode}
              className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mx-auto mb-4"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
            
            <p className="text-gray-600 text-sm">
              Use this code at Anwesha helpdesk for a special surprise!
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">How to Redeem:</h3>
            <ol className="text-left space-y-2 max-w-md mx-auto">
              <li className="flex items-start space-x-2">
                <span className="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <span>Visit the Anwesha helpdesk during the fest</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <span>Show this coupon code: <strong>CuriousCat</strong></span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <span>Enjoy your exclusive reward!</span>
              </li>
            </ol>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-900 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <a
            href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-purple-600 bg-white rounded-full shadow-2xl hover:shadow-white/30 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            <Gift className="w-6 h-6 mr-2" />
            <span className="relative z-10">🏆 Claim Your Victory</span>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce delay-1000">✨</div>
        <div className="absolute top-20 right-16 text-3xl animate-pulse delay-500">🎊</div>
        <div className="absolute bottom-16 left-20 text-4xl animate-bounce delay-700">🌟</div>
        <div className="absolute bottom-32 right-12 text-3xl animate-pulse delay-300">🎁</div>
      </div>
    </div>
  );
};

export default RewardPage;