import React from 'react';
import { User, MapPin, Mail, Github, Linkedin, GraduationCap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="gradient-text group-hover:from-[#1a1a1a] group-hover:to-[#404040] transition-all duration-500">
            About Me
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Information */}
          <div className="card-3d card-3d-hover p-8">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-[#D4AF37]" />
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <p className="text-[#2E2E2E]">College: JECRC College</p>
                  <p className="text-[#555555] text-sm">School: Lakshmipat Singhania School, Rajsamand</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <p className="text-[#2E2E2E]">laddhasuhana@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <a href="https://github.com/SuhanaLaddha" className="text-[#555555] hover:text-[#2E2E2E] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/suhana-laddha-b88874295" className="text-[#555555] hover:text-[#D4AF37] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Academic & Involvement */}
          <div className="space-y-6">
            {/* Academic */}
            <div className="card-3d card-3d-hover p-8">
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-[#D4AF37]" />
                Academic
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#2E2E2E]">10th CBSE</span>
                  <span className="text-[#D4AF37] font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#2E2E2E]">12th CBSE</span>
                  <span className="text-[#D4AF37] font-semibold">76%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#2E2E2E]">JEE</span>
                  <span className="text-[#D4AF37] font-semibold">77 percentile</span>
                </div>
              </div>
            </div>

            {/* Involvement */}
            <div className="card-3d card-3d-hover p-8">
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2 text-[#D4AF37]" />
                Involvement
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-[#2E2E2E]">Member of Student Council</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-[#2E2E2E]">NSS Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="card-3d card-3d-hover p-8">
          <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6 text-center">Hobbies & Interests</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full">
              <span className="text-[#D4AF37] font-medium">Reading</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full">
              <span className="text-[#D4AF37] font-medium">Coding</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full">
              <span className="text-[#D4AF37] font-medium">Music</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full">
              <span className="text-[#D4AF37] font-medium">Travel</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full">
              <span className="text-[#D4AF37] font-medium">Photography</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;