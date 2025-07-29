import React from 'react';
import { FaPython, FaLinux, FaHtml5, FaJs, FaDocker, FaDatabase, FaCuttlefish, FaJava, FaBrain, FaRobot, FaTerminal, FaTools, FaComments, FaCogs } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const Skills: React.FC = () => {
  // Use real icons for each skill with different sizes and new color palette
  const skills = [
    { name: 'Python', icon: <FaPython size={64} color="#E91E63" />, size: 'w-28 h-28' },
    { name: 'Linux', icon: <FaLinux size={48} color="#2196F3" />, size: 'w-20 h-20' },
    { name: 'C', icon: <FaCuttlefish size={64} color="#9C27B0" />, size: 'w-28 h-28' },
    { name: 'C++', icon: <SiCplusplus size={48} color="#E91E63" />, size: 'w-20 h-20' },
    { name: 'JavaScript', icon: <FaJs size={64} color="#2196F3" />, size: 'w-28 h-28' },
    { name: 'SQL', icon: <FaDatabase size={48} color="#9C27B0" />, size: 'w-20 h-20' },
    { name: 'DevOps', icon: <FaCogs size={64} color="#E91E63" />, size: 'w-28 h-28' },
    { name: 'HTML', icon: <FaHtml5 size={48} color="#2196F3" />, size: 'w-20 h-20' },
    { name: 'ML', icon: <FaBrain size={64} color="#9C27B0" />, size: 'w-28 h-28' },
    { name: 'Agentic AI', icon: <FaRobot size={48} color="#E91E63" />, size: 'w-20 h-20' },
    { name: 'Prompt Engineering', icon: <FaComments size={64} color="#2196F3" />, size: 'w-28 h-28' },
    { name: 'Docker', icon: <FaDocker size={48} color="#9C27B0" />, size: 'w-20 h-20' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E91E63] mb-4">Skills & Technologies</h2>
          <p className="text-lg text-[#2E2E2E] max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Programming Languages */}
          <div className="card-3d p-6">
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <FaTerminal size={20} color="#E91E63" />
              </div>
              <h3 className="text-xl font-semibold text-[#E91E63]">Programming Languages</h3>
            </div>
            <p className="text-[#2E2E2E]">
              Python, C, C++, JavaScript, and more. Building robust and efficient solutions across different paradigms.
            </p>
          </div>

          {/* Web Technologies */}
          <div className="card-3d p-6">
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <FaTools size={20} color="#2196F3" />
              </div>
              <h3 className="text-xl font-semibold text-[#2196F3]">Web Technologies</h3>
            </div>
            <p className="text-[#2E2E2E]">
              HTML, CSS, JavaScript, and modern frameworks. Creating responsive and interactive web experiences.
            </p>
          </div>

          {/* AI & Machine Learning */}
          <div className="card-3d p-6">
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <FaBrain size={20} color="#9C27B0" />
              </div>
              <h3 className="text-xl font-semibold text-[#9C27B0]">AI & Machine Learning</h3>
            </div>
            <p className="text-[#2E2E2E]">
              Machine learning, prompt engineering, and agentic AI. Leveraging cutting-edge AI technologies.
            </p>
          </div>
        </div>

        {/* Horizontal Continuous Scrolling Skills Layout */}
        <div className="relative h-64 mb-16 overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of skills */}
            {skills.map((skill, index) => (
              <div
                key={`first-${index}`}
                className="group flex flex-col items-center mx-8 min-w-[120px]"
              >
                <div className={`bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#E91E63] transition-all duration-300 transform group-hover:scale-110 card-3d shadow-lg ${skill.size}`}>
                  {skill.icon}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-[#2E2E2E] group-hover:text-[#E91E63] transition-colors text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {skills.map((skill, index) => (
              <div
                key={`second-${index}`}
                className="group flex flex-col items-center mx-8 min-w-[120px]"
              >
                <div className={`bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#E91E63] transition-all duration-300 transform group-hover:scale-110 card-3d shadow-lg ${skill.size}`}>
                  {skill.icon}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-[#2E2E2E] group-hover:text-[#E91E63] transition-colors text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
          {/* Add keyframes for horizontal scroll animation */}
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Skills;