import React, { useEffect, useState } from 'react';
import { Star, Download, Users, Shield } from 'lucide-react';

const FakeBiryaniApp: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex flex-col items-center justify-center px-4 py-8 relative">
      {/* Fake App Store Layout */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* App Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl">
              🍛
            </div>
            <div>
              <h1 className="text-2xl font-bold">IITP Free Biryani</h1>
              <p className="text-blue-100">Food & Drink</p>
            </div>
          </div>
        </div>

        {/* App Details */}
        <div className="p-6 space-y-6">
          {/* Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.9</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">FREE</div>
              <div className="text-sm text-gray-500">In-app purchases</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center mb-1">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-sm font-semibold">50K+</div>
              <div className="text-xs text-gray-500">Downloads</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-1">
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-sm font-semibold">4+</div>
              <div className="text-xs text-gray-500">Age</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-1">
                <Download className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-sm font-semibold">12MB</div>
              <div className="text-xs text-gray-500">Size</div>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <Download className="w-5 h-5" />
            <span>Install</span>
          </button>

          {/* Progress Bar */}
          {downloadProgress > 0 && downloadProgress < 100 && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${downloadProgress}%` }}
              ></div>
            </div>
          )}

          {/* Fake Reviews */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Reviews</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">Arjun</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Best app ever! Got free biryani in hostel mess!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  P
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">Priya</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Finally! No more expensive food orders 😍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-6 transform animate-pulse">
            <div className="text-6xl mb-4">🔥</div>
            <h2 className="text-3xl font-bold text-gray-800">
              Nah. This is hotter.
            </h2>
            <p className="text-xl text-gray-600">
              Anwesha 2026 awaits.
            </p>
            <a
              href="https://www.instagram.com/anwesha_iitpatna?igsh=NzQ1dng4NWZxdzFk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center no-underline"
              style={{ textDecoration: 'none' }}
            >
              🎪 Taste the Real Deal
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeBiryaniApp;