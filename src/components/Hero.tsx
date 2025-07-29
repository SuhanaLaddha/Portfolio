import React from 'react';
import logo from '../../Assets/logo.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-24 md:pt-20 bg-white overflow-hidden">

      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 relative">
              <span className="gradient-text">
                Hi,
              </span>
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 relative">
              <span className="gradient-text">
                I'm Suhana Laddha
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37] bg-clip-text text-transparent font-mono tracking-wider">
                DevOps Engineer
              </span>
            </h2>
            <p className="text-base md:text-lg text-[#555555] mb-4 font-light italic">
              Exploring the intersection of creativity, code, and clarity.
            </p>
            <p className="text-base md:text-lg text-[#555555] mb-6 font-light italic">
              I believe in experiences that are both intelligent and intentional.
            </p>
            <p className="text-lg md:text-xl text-[#555555] mb-8 font-light">
              3rd Year B.Tech Student – Information Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="button-primary px-8 py-3">
                View Projects
              </button>
              <button className="button-secondary px-8 py-3">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Profile Image Container */}
                <div className="absolute inset-8 rounded-full bg-white overflow-hidden shadow-2xl flex items-center justify-center card-3d">
                  <img src="/mypic.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;