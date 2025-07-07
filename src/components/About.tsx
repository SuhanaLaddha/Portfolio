import React from 'react';
import { User, MapPin, Phone, Mail, Github, Instagram, Linkedin, GraduationCap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-500">
            About Me
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Information */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
              <User className="w-6 h-6 mr-2" />
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-gray-300">College: JECRC College</p>
                  <p className="text-gray-400 text-sm">School: Lakshmipat Singhania School, Rajsamand</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-300">laddhasuhana@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-300">7878943493</p>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <a href="https://github.com/SuhanaLaddha" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/suhanaladdha" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/suhana-laddha-b88874295" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Academic & Involvement */}
          <div className="space-y-6">
            {/* Academic */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Academic
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">10th CBSE</span>
                  <span className="text-cyan-400 font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">12th CBSE</span>
                  <span className="text-cyan-400 font-semibold">76%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">JEE</span>
                  <span className="text-cyan-400 font-semibold">77 percentile</span>
                </div>
              </div>
            </div>

            {/* Involvement */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Involvement
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Member of Student Council</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">NSS Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">Hobbies & Interests</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🎨</span>
              <span className="text-gray-300">Sketching</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🏏</span>
              <span className="text-gray-300">Cricket</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full">
              <span className="text-2xl">⚽</span>
              <span className="text-gray-300">Football</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🏕️</span>
              <span className="text-gray-300">Outdoor Games</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full">
              <span className="text-2xl">📚</span>
              <span className="text-gray-300">Reading Novels</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;