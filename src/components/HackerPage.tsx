import React, { useEffect, useState } from 'react';

const HackerPage: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showButton, setShowButton] = useState(false);
  
  const hackerLines = [
    "> Initializing trace protocol...",
    "> You have been traced...",
    "> Location: IIT Patna",
    "> Curiosity Level: 100%",
    "> Analyzing behavioral patterns...",
    "> Verdict: Candidate for India's craziest fest.",
    "> Access granted to Anwesha Protocol."
  ];

  useEffect(() => {
    if (currentLineIndex < hackerLines.length) {
      const line = hackerLines[currentLineIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < line.length) {
          setCurrentText(line.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setLines(prev => [...prev, line]);
            setCurrentText('');
            setCurrentLineIndex(prev => prev + 1);
            
            if (currentLineIndex === hackerLines.length - 1) {
              setTimeout(() => setShowButton(true), 1000);
            }
          }, 500);
        }
      }, 40);

      return () => clearInterval(typeInterval);
    }
  }, [currentLineIndex]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8 font-mono relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-black opacity-50"></div>
      
      <div className="max-w-4xl mx-auto w-full space-y-4 relative z-10">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg border border-green-500/30 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-green-500/30">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 text-sm ml-4">ANWESHA_TRACE_PROTOCOL.exe</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 min-h-[400px] space-y-2">
            {lines.map((line, index) => (
              <div key={index} className="text-green-400 text-lg animate-pulse">
                {line}
              </div>
            ))}
            
            {currentText && (
              <div className="text-green-400 text-lg">
                {currentText}
                <span className="animate-pulse">_</span>
              </div>
            )}
            
            {/* Glitch Effect */}
            <div className="text-green-400 opacity-20 absolute top-20 left-10 animate-ping">
              01001000 01100001 01100011 01101011 01100101 01110010
            </div>
          </div>
        </div>

        {/* Hacker Button */}
        <div
          className={`text-center transform transition-all duration-1000 ease-out ${
            showButton 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <a
            href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-black bg-red-500 rounded-lg shadow-2xl hover:shadow-red-500/50 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500/30 border-2 border-red-600"
            style={{
              filter: showButton ? 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.8))' : 'none',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
            }}
          >
            <span className="relative z-10">⚡ UNVEIL THE MAGIC</span>
            
            {/* Red glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
          </a>
        </div>

        {/* Decorative hacker elements */}
        <div className="absolute top-5 right-5 text-green-400 text-xs opacity-30 animate-pulse">
          [TRACE_COMPLETE]
        </div>
        <div className="absolute bottom-5 left-5 text-green-400 text-xs opacity-30 animate-ping">
          [SYSTEM_BREACH_DETECTED]
        </div>
      </div>
    </div>
  );
};

export default HackerPage;