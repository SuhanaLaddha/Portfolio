import React from 'react';
import { Github, ExternalLink, Settings, Brain, Terminal, BarChart3, Mail, Phone, MessageSquare, Instagram, Share2, Twitter, Smartphone, Container } from 'lucide-react';

const Projects: React.FC = () => {
  const majorProjects = [
    {
      title: "🚀 DevOps Project: Automated CI/CD Pipeline",
      description: "Created full CI/CD flow using Git Bash, GitHub, Jenkins, Docker. Jenkins polled every 1 min, built & deployed Docker containers to Docker Hub automatically.",
      tools: ["Git Bash", "GitHub", "Jenkins", "Docker", "Docker Hub"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "🧭 DockShell UI",
      description: "Docker Menu-based Streamlit App: Execute Docker/container commands through UI. User logs in with IP & password → Commands run remotely with results shown in real-time.",
      tools: ["Streamlit", "Docker SDK", "Python"],
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "🧠 MindMate: AI Psychiatrist",
      description: "Mental health chatbot using Gradio + Python. UI in Jupyter, responds empathetically to users.",
      tools: ["Python", "Gradio", "NLP", "Jupyter"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "💻 Linux Commands Dashboard",
      description: "Streamlit app running 50+ Linux commands from dropdown/menu. Simple UI → Terminal output display using subprocess calls.",
      tools: ["Streamlit", "Python", "Linux", "Subprocess"],
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "📊 Multi-Project Dashboard",
      description: "Unified Streamlit interface with tabs per domain (Python, Linux, JS, Docker). Each tab showcases real-time project demos or descriptions.",
      tools: ["Streamlit", "Python", "JavaScript", "Docker"],
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const miniProjects = [
    { name: "📧 Email Sender", description: "Send email using Python", icon: <Mail className="w-4 h-4" /> },
    { name: "📩 SMS Sender", description: "Python-based Twilio SMS", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "📞 Call Trigger", description: "Make a phone call using Python", icon: <Phone className="w-4 h-4" /> },
    { name: "💬 WhatsApp Pusher", description: "Auto-send WhatsApp messages via API", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "📸 Instagram Poster", description: "Post on IG using automation", icon: <Instagram className="w-4 h-4" /> },
    { name: "🧾 Linux Companies Blog", description: "Article on why firms choose Linux", icon: <Share2 className="w-4 h-4" /> },
    { name: "🎨 Linux Icon Tweaker", description: "Change app logos on Linux", icon: <Settings className="w-4 h-4" /> },
    { name: "💬 Multi-Channel Notifier", description: "Send Email, WhatsApp, Tweet, SMS via Linux Terminal", icon: <Twitter className="w-4 h-4" /> },
    { name: "🐳 Docker Testbed", description: "Run/test any tool inside a Docker container", icon: <Container className="w-4 h-4" /> }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-500">
            Projects
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        {/* Major Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-pink-400 mb-8 flex items-center">
            <span className="text-2xl mr-2">🛠️</span>
            Major Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-cyan-400">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full transition-all duration-300">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-full transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Projects */}
        <div>
          <h3 className="text-3xl font-bold text-pink-400 mb-8 flex items-center">
            <span className="text-2xl mr-2">⚡</span>
            Power Snaps - Mini Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900/50 backdrop-blur-lg rounded-full px-6 py-4 border border-purple-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="text-cyan-400 group-hover:text-pink-400 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">{project.name}</h4>
                      <p className="text-xs text-gray-400 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;