import React from 'react';
import { Code, Terminal, Database, Settings, Globe, Layers, Server, FileText } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: <Code className="w-8 h-8" />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Linux', icon: <Terminal className="w-8 h-8" />, color: 'from-gray-400 to-gray-600' },
    { name: 'C', icon: <Code className="w-8 h-8" />, color: 'from-blue-400 to-blue-600' },
    { name: 'C++', icon: <Code className="w-8 h-8" />, color: 'from-purple-400 to-purple-600' },
    { name: 'JavaScript', icon: <Globe className="w-8 h-8" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'SQL', icon: <Database className="w-8 h-8" />, color: 'from-green-400 to-green-600' },
    { name: 'DevOps', icon: <Settings className="w-8 h-8" />, color: 'from-cyan-400 to-cyan-600' },
    { name: 'HTML', icon: <FileText className="w-8 h-8" />, color: 'from-orange-400 to-red-500' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-500">
            Skills
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative">
                {/* Neon Ring */}
                <div className={`absolute -inset-3 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur transition-all duration-300`}></div>
                <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${skill.color} opacity-20 animate-pulse`}></div>
                
                {/* Skill Icon Container */}
                <div className="relative w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700 group-hover:border-pink-400 transition-all duration-300 transform group-hover:scale-110 group-hover:animate-bounce">
                  <div className="text-white group-hover:text-pink-400 transition-colors">
                    {skill.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="mt-4 text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Programming
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Python</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">C/C++</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-4/6 h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">JavaScript</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-3/6 h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center">
              <Terminal className="w-5 h-5 mr-2" />
              Systems
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Linux</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">DevOps</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-4/6 h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Docker</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-4/6 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Web & Data
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">HTML</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">SQL</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-4/6 h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Streamlit</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;