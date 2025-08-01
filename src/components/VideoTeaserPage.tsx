import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

const VideoTeaserPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20"></div>
      
      <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
        {/* Title */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            What IITP doesn't tell you…
            <br />
            <span className="text-blue-400">until Anwesha begins.</span>
          </h1>
        </div>

        {/* Video Container */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <div className="relative mx-auto mb-8 max-w-4xl">
            {/* Fake Video Player */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500/30">
              <div className="aspect-video bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
                {/* Video Thumbnail */}
                <img
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                  alt="Festival crowd"
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href="https://youtu.be/sKuWQGbmg6A?feature=shared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 rounded-full p-6 shadow-2xl transform transition-all duration-300 hover:scale-110 no-underline"
                    style={{ textDecoration: 'none' }}
                  >
                    <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                  </a>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">LIVE</span>
                    <div className="flex-1"></div>
                    <span className="text-white text-sm">2:47 / 3:21</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
                    <div className="bg-blue-500 h-1 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Title */}
            <div className="mt-4 text-left">
              <h3 className="text-xl font-bold text-white mb-2">Anwesha 2026: The Untold Story</h3>
              <p className="text-gray-400">1.2M views • Premiered 2 hours ago</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
            Get ready. <span className="text-blue-400 font-bold">It's coming.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <a
            href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-blue-500-30 transform transition-all duration-300 ease-out hover:scale-105 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-500-30 border border-blue-500 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <span className="mr-2">🎬</span>
            <span>Uncover the Secret</span>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40 delay-1000"></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse opacity-50 delay-500"></div>
        <div className="absolute bottom-32 right-12 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-700"></div>
      </div>
    </div>
  );
};

export default VideoTeaserPage;