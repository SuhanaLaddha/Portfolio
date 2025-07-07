import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-4xl animate-bounce">😊</span>
          <div className="w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"></div>
        </div>
        <div className="text-xl text-white font-light animate-pulse">
          Always have a smile on your face
        </div>
        <div className="mt-8 w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;