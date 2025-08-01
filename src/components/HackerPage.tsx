import React, { useEffect, useState, useMemo } from 'react';

const HackerPage: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showButton, setShowButton] = useState(false);
  
  const hackerLines = useMemo(() => [
    "> Initializing trace protocol...",
    "> You have been traced...",
    "> Location: IIT Patna",
    "> Curiosity Level: 100%",
    "> Analyzing behavioral patterns...",
    "> Verdict: Candidate for India's craziest fest.",
    "> Access granted to Anwesha Protocol."
  ], []);

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
  }, [currentLineIndex, hackerLines]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-4 py-8 font-mono relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900-10 to-transparent opacity-30"></div>
      
      <div className="max-w-4xl mx-auto w-full space-y-6 relative z-10">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-6 py-3 flex items-center space-x-3 border-b border-gray-700">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300 text-sm ml-4 font-semibold">ANWESHA_TRACE_PROTOCOL.exe</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-8 min-h-400 space-y-3 bg-black">
            {lines.map((line, index) => (
              <div key={index} className="text-green-400 text-lg font-mono">
                {line}
              </div>
            ))}
            
            {currentText && (
              <div className="text-green-400 text-lg font-mono">
                {currentText}
                <span className="animate-pulse text-white">|</span>
              </div>
            )}
            
            {/* Subtle decorative elements */}
            <div className="text-green-500 opacity-20 absolute top-32 right-8 text-xs font-mono">
              [SYSTEM_ACTIVE]
            </div>
          </div>
        </div>

        {/* Professional Button */}
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg hover:shadow-green-500-30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-green-500 hover:to-emerald-500 focus:outline-none focus:ring-4 focus:ring-green-500-30 border border-green-500 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <span className="mr-2">🚀</span>
            <span>Explore Anwesha</span>
          </a>
        </div>

        {/* Clean decorative elements */}
        <div className="absolute top-8 right-8 text-gray-500 text-xs opacity-50 font-mono">
          [AUTHENTICATED]
        </div>
      </div>
    </div>
  );
};

export default HackerPage;