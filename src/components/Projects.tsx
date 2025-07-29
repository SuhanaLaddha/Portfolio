import React, { useState } from 'react';
import { Github, ExternalLink, Settings, Brain, Terminal, BarChart3, Mail, Phone, MessageSquare, Instagram, Share2, Twitter, Smartphone, Container } from 'lucide-react';
import SmartProjectForm from './SmartProjectForm';

const Projects: React.FC = () => {
  const [smartForm, setSmartForm] = useState<{
    isOpen: boolean;
    projectName: string;
    projectType: string;
  }>({
    isOpen: false,
    projectName: '',
    projectType: ''
  });

  const majorProjects = [
    {
      title: "🚀 DevOps Project: Automated CI/CD Pipeline",
      description: "Created full CI/CD flow using Git Bash, GitHub, Jenkins, Docker. Jenkins polled every 1 min, built & deployed Docker containers to Docker Hub automatically.",
      tools: ["Git Bash", "GitHub", "Jenkins", "Docker", "Docker Hub"],
      icon: <Settings className="w-6 h-6" />, 
      codeLink: "#", // <-- Put your code repo link here
      demoLink: "#"   // <-- Put your demo/interface link here
    },
    {
      title: "🧭 DockShell UI",
      description: "Docker Menu-based Streamlit App: Execute Docker/container commands through UI. User logs in with IP & password → Commands run remotely with results shown in real-time.",
      tools: ["Streamlit", "Docker SDK", "Python"],
      icon: <Terminal className="w-6 h-6" />, 
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "🧠 MindMate: AI Psychiatrist",
      description: "Mental health chatbot using Gradio + Python. UI in Jupyter, responds empathetically to users.",
      tools: ["Python", "Gradio", "NLP", "Jupyter"],
      icon: <Brain className="w-6 h-6" />, 
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "💻 Linux Commands Dashboard",
      description: "Streamlit app running 50+ Linux commands from dropdown/menu. Simple UI → Terminal output display using subprocess calls.",
      tools: ["Streamlit", "Python", "Linux", "Subprocess"],
      icon: <Terminal className="w-6 h-6" />, 
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "📊 Multi-Project Dashboard",
      description: "Unified Streamlit interface with tabs per domain (Python, Linux, JS, Docker). Each tab showcases real-time project demos or descriptions.",
      tools: ["Streamlit", "Python", "JavaScript", "Docker"],
      icon: <BarChart3 className="w-6 h-6" />, 
      codeLink: "#",
      demoLink: "#"
    }
  ];

  const miniProjects = [
    { name: "📧 Email Sender", description: "Send email using Python", icon: <Mail className="w-4 h-4" />, codeLink: "#", type: "email" },
    { name: "📩 SMS Sender", description: "Python-based Twilio SMS", icon: <MessageSquare className="w-4 h-4" />, codeLink: "#", type: "sms" },
    { name: "📞 Call Trigger", description: "Make a phone call using Python", icon: <Phone className="w-4 h-4" />, codeLink: "#", type: "call" },
    { name: "💬 WhatsApp Pusher", description: "Auto-send WhatsApp messages via API", icon: <MessageSquare className="w-4 h-4" />, codeLink: "#", type: "whatsapp" },
    { name: "📸 Instagram Poster", description: "Post on IG using automation", icon: <Instagram className="w-4 h-4" />, codeLink: "#", type: "instagram" },
    { name: "🧾 Linux Companies Blog", description: "Article on why firms choose Linux", icon: <Share2 className="w-4 h-4" />, codeLink: "#", type: "blog" },
    { name: "🎨 Linux Icon Tweaker", description: "Change app logos on Linux", icon: <Settings className="w-4 h-4" />, codeLink: "#", type: "linux" },
    { name: "💬 Multi-Channel Notifier", description: "Send Email, WhatsApp, Tweet, SMS via Linux Terminal", icon: <Twitter className="w-4 h-4" />, codeLink: "#", type: "multi" },
    { name: "🐳 Docker Testbed", description: "Run/test any tool inside a Docker container", icon: <Container className="w-4 h-4" />, codeLink: "#", type: "docker" }
  ];

  const handleMiniProjectClick = (projectName: string, projectType: string) => {
    setSmartForm({
      isOpen: true,
      projectName,
      projectType
    });
  };

  const closeSmartForm = () => {
    setSmartForm({
      isOpen: false,
      projectName: '',
      projectType: ''
    });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="gradient-text group-hover:from-[#1a1a1a] group-hover:to-[#404040] transition-all duration-500">
            Projects
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        {/* Major Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#2E2E2E] mb-8 flex items-center">
            <span className="text-2xl mr-3">🛠️</span>
            Major Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <div key={index} className="card-3d card-3d-hover p-8 group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">{project.title}</h4>
                    <p className="text-[#555555] mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-gray-100 text-[#555555] rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="button-primary text-sm px-4 py-2">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="button-secondary text-sm px-4 py-2">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Projects */}
        <div>
          <h3 className="text-3xl font-bold text-[#2E2E2E] mb-8 flex items-center">
            <span className="text-2xl mr-3">⚡</span>
            Power Snaps - Mini Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <div key={index} className="group">
                <div 
                  className="card-3d card-3d-hover p-6 cursor-pointer"
                  onClick={() => handleMiniProjectClick(project.name, project.type)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#2E2E2E] truncate">{project.name}</h4>
                      <p className="text-xs text-[#555555] truncate opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                        {project.description}
                      </p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-3">
                        <a 
                          href={project.codeLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-xs transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Project Form */}
      <SmartProjectForm
        isOpen={smartForm.isOpen}
        onClose={closeSmartForm}
        projectName={smartForm.projectName}
        projectType={smartForm.projectType}
      />
    </section>
  );
};

export default Projects;