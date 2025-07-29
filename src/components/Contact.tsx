import React from 'react';
import { Mail, MapPin, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative group">
          <span className="gradient-text group-hover:from-[#1a1a1a] group-hover:to-[#404040] transition-all duration-500">
            Contact Me
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="card-3d card-3d-hover p-8">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-[#D4AF37]" />
              Social Links
            </h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/SuhanaLaddha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-gray-200 rounded-lg group-hover:bg-gray-300 transition-colors">
                  <Github className="w-6 h-6 text-[#2E2E2E] group-hover:text-[#555555] transition-colors" />
                </div>
                <div>
                  <h4 className="text-[#2E2E2E] font-semibold">GitHub</h4>
                  <p className="text-[#555555] text-sm">SuhanaLaddha</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/suhana-laddha-b88874295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-[#D4AF37] group-hover:text-[#B8941F] transition-colors" />
                </div>
                <div>
                  <h4 className="text-[#2E2E2E] font-semibold">LinkedIn</h4>
                  <p className="text-[#555555] text-sm">Suhana Laddha</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card-3d card-3d-hover p-8">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6 flex items-center">
              <Send className="w-6 h-6 mr-2 text-[#D4AF37]" />
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 group">
                <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-[#2E2E2E] font-semibold">Email</h4>
                  <p className="text-[#555555] text-sm">laddhasuhana@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 group">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-[#2E2E2E] font-semibold">Location</h4>
                  <p className="text-[#555555] text-sm">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 card-3d card-3d-hover p-8">
          <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6 text-center">Send me a message</h3>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-3d w-full"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-3d w-full"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="input-3d w-full"
                placeholder="What's this about?"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="input-3d w-full resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="button-accent flex items-center justify-center mx-auto">
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;