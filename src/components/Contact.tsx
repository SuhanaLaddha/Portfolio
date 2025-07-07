import React from 'react';
import { Mail, Phone, MapPin, Github, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-500">
            Contact Me
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2" />
              Social Links
            </h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/SuhanaLaddha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-400 text-sm">SuhanaLaddha</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/suhana-laddha-b88874295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-blue-800 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-400 text-sm">Suhana Laddha</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/suhanaladdha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-900 to-purple-800 hover:from-pink-800 hover:to-purple-700 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-pink-800 rounded-lg group-hover:bg-pink-700 transition-colors">
                  <Instagram className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Instagram</h4>
                  <p className="text-gray-400 text-sm">@suhanaladdha</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
              <Send className="w-6 h-6 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400 text-sm">laddhasuhana@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400 text-sm">+91 7878943493</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400 text-sm">Rajsamand, Rajasthan</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Let's connect and create something amazing together!</p>
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Send className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Stats */}
        <div className="mt-12 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">{"< 24h"}</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-gray-300 text-sm">Platforms</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;