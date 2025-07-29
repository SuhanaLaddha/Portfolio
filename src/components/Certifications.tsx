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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="gradient-text group-hover:from-[#1a1a1a] group-hover:to-[#404040] transition-all duration-500">
            Certifications
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="card-3d card-3d-hover p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg">
                      <Award className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className={`w-4 h-4 ${cert.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`} />
                      <span className={`text-xs px-2 py-1 rounded-full ${cert.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#2E2E2E] mb-2 group-hover:text-[#555555] transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-[#D4AF37] font-semibold">{cert.issuer}</span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-[#555555]">{cert.date}</span>
                  </div>
                </div>

                <p className="text-[#555555] text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-auto">
                  <button className="w-full px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/20 hover:border-[#D4AF37]/30 text-[#D4AF37] rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;