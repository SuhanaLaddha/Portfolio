import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-4xl animate-bounce">😊</span>
          <div className="w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] animate-pulse"></div>
        </div>
        <div className="text-xl text-[#2E2E2E] font-light animate-pulse">
          Always have a smile on your face
        </div>
        <div className="mt-8 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;