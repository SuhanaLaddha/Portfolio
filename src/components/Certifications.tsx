import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Python Programming Certification",
      issuer: "Python Institute",
      date: "2023",
      description: "Advanced Python programming concepts and best practices",
      status: "Completed"
    },
    {
      title: "Linux System Administration",
      issuer: "Linux Foundation",
      date: "2023",
      description: "Complete Linux system administration and shell scripting",
      status: "Completed"
    },
    {
      title: "Docker & DevOps Fundamentals",
      issuer: "Docker Inc.",
      date: "2023",
      description: "Container orchestration and CI/CD pipeline development",
      status: "Completed"
    },
    {
      title: "Web Development Bootcamp",
      issuer: "FreeCodeCamp",
      date: "2022",
      description: "Full-stack web development with modern frameworks",
      status: "Completed"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Coursera",
      date: "2022",
      description: "Advanced algorithmic thinking and problem-solving",
      status: "Completed"
    },
    {
      title: "Machine Learning Basics",
      issuer: "edX",
      date: "2023",
      description: "Introduction to ML algorithms and applications",
      status: "In Progress"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-500">
            Certifications
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg">
                      <Award className="w-6 h-6 text-pink-400" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className={`w-4 h-4 ${cert.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`} />
                      <span className={`text-xs px-2 py-1 rounded-full ${cert.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-auto">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 border border-pink-400/30 hover:border-pink-400/50 text-pink-400 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">Achievement Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5</div>
              <div className="text-gray-300">Completed Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">1</div>
              <div className="text-gray-300">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-gray-300">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2023</div>
              <div className="text-gray-300">Most Recent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;