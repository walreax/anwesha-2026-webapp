import React, { useEffect, useState } from 'react';
import { MessageCircle, Forward } from 'lucide-react';

const WhatsAppForwardPage: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    setShowMessage(true);
    
    const timer = setTimeout(() => {
      setShowReveal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* WhatsApp Chat Interface */}
        <div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden">
          {/* WhatsApp Header */}
          <div className="bg-green-600 text-white p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              👵
            </div>
            <div>
              <h3 className="font-semibold">Nani</h3>
              <p className="text-xs text-green-100">online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-gray-100 p-4 space-y-4 min-h-[500px]">
            {/* Forwarded Message */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                showMessage 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
            >
              <div className="bg-white rounded-lg p-4 shadow-md max-w-xs ml-auto">
                <div className="flex items-center space-x-2 text-gray-500 text-xs mb-2">
                  <Forward className="w-3 h-3" />
                  <span>Forwarded many times</span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    🚨 <strong>URGENT WARNING</strong> 🚨
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Beta, don't open unknown links! Might be virus 🦠
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    My friend's phone got hacked after clicking suspicious QR code 😱
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Forward to 10 people to stay safe 🙏
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Share with family WhatsApp groups immediately! 👨‍👩‍👧‍👦
                  </p>
                </div>
                
                <div className="text-xs text-gray-400 mt-2 text-right">
                  2:47 PM ✓✓
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            {showMessage && !showReveal && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  🤖
                </div>
                <div className="bg-white rounded-lg p-3 shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Reveal Message */}
            {showReveal && (
              <div className="transform transition-all duration-1000 ease-out animate-fade-in">
                <div className="bg-red-500 text-white rounded-lg p-4 shadow-md max-w-xs">
                  <div className="space-y-2">
                    <p className="text-sm font-bold">
                      🚨 SYSTEM ALERT 🚨
                    </p>
                    <p className="text-sm">
                      Too late... Anwesha virus installed! 😈
                    </p>
                    <p className="text-sm">
                      Your curiosity level: MAXIMUM 📈
                    </p>
                    <div className="text-lg space-x-1">
                      🎪🎭🎨🎵🎯🎊🎉✨🌟💫⭐🎈🎁🎀🎂🍕🍔🍟🌮🌯🥙🥗🍝🍜🍲🍱🍣🍤🍙🍘🍚🍛🍡🍧🍨🍦🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪🥧🥮
                    </div>
                  </div>
                  
                  <div className="text-xs text-red-100 mt-2 text-right">
                    2:48 PM ✓✓
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp Input */}
          <div className="bg-gray-100 p-3 border-t">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-500 text-sm">
                Type a message...
              </div>
              <button className="bg-green-600 text-white rounded-full p-2">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {showReveal && (
          <div className="bg-white rounded-b-2xl p-6 shadow-2xl text-center">
            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              🦠 Accept the Virus
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Side effects: Extreme fun, unforgettable memories, and FOMO cure
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppForwardPage;