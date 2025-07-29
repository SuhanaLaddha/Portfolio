import React, { useState } from 'react';
import { X, Phone, Mail, MessageSquare, Instagram, Share2, Settings, Container, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface SmartProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  projectType: string;
}

interface FormData {
  [key: string]: string;
}

const SmartProjectForm: React.FC<SmartProjectFormProps> = ({ isOpen, onClose, projectName, projectType }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const projectConfigs = {
    '📧 Email Sender': {
      icon: <Mail className="w-6 h-6" />,
      fields: [
        { name: 'smtp_server', label: 'SMTP Server', placeholder: 'smtp.gmail.com', type: 'text' },
        { name: 'email', label: 'Email Address', placeholder: 'your.email@gmail.com', type: 'email' },
        { name: 'password', label: 'App Password', placeholder: 'Your app password', type: 'password' },
        { name: 'recipient', label: 'Recipient Email', placeholder: 'recipient@example.com', type: 'email' },
        { name: 'subject', label: 'Subject', placeholder: 'Email subject', type: 'text' },
        { name: 'message', label: 'Message', placeholder: 'Your message here...', type: 'textarea' }
      ],
      actionText: 'Send Email',
      processFunction: async (data: FormData) => {
        // Simulate email sending
        await new Promise(resolve => setTimeout(resolve, 2000));
        return Math.random() > 0.3; // 70% success rate
      }
    },
    '📩 SMS Sender': {
      icon: <MessageSquare className="w-6 h-6" />,
      fields: [
        { name: 'account_sid', label: 'Account SID', placeholder: 'Your Twilio Account SID', type: 'text' },
        { name: 'auth_token', label: 'Auth Token', placeholder: 'Your Twilio Auth Token', type: 'password' },
        { name: 'from_number', label: 'From Number', placeholder: '+1234567890', type: 'text' },
        { name: 'to_number', label: 'To Number', placeholder: '+1234567890', type: 'text' },
        { name: 'message', label: 'Message', placeholder: 'Your SMS message...', type: 'textarea' }
      ],
      actionText: 'Send SMS',
      processFunction: async (data: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return Math.random() > 0.2; // 80% success rate
      }
    },
    '📞 Call Trigger': {
      icon: <Phone className="w-6 h-6" />,
      fields: [
        { name: 'account_sid', label: 'Account SID', placeholder: 'Your Twilio Account SID', type: 'text' },
        { name: 'auth_token', label: 'Auth Token', placeholder: 'Your Twilio Auth Token', type: 'password' },
        { name: 'from_number', label: 'From Number', placeholder: '+1234567890', type: 'text' },
        { name: 'to_number', label: 'To Number', placeholder: '+1234567890', type: 'text' },
        { name: 'message', label: 'Call Message', placeholder: 'Message to speak during call...', type: 'textarea' }
      ],
      actionText: 'Call Now',
      processFunction: async (data: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return Math.random() > 0.4; // 60% success rate
      }
    },
    '💬 WhatsApp Pusher': {
      icon: <MessageSquare className="w-6 h-6" />,
      fields: [
        { name: 'api_key', label: 'API Key', placeholder: 'Your WhatsApp API Key', type: 'password' },
        { name: 'phone_number', label: 'Phone Number', placeholder: '+1234567890', type: 'text' },
        { name: 'message', label: 'Message', placeholder: 'Your WhatsApp message...', type: 'textarea' }
      ],
      actionText: 'Send WhatsApp',
      processFunction: async (data: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 1800));
        return Math.random() > 0.25; // 75% success rate
      }
    },
    '📸 Instagram Poster': {
      icon: <Instagram className="w-6 h-6" />,
      fields: [
        { name: 'username', label: 'Username', placeholder: 'Your Instagram username', type: 'text' },
        { name: 'password', label: 'Password', placeholder: 'Your Instagram password', type: 'password' },
        { name: 'caption', label: 'Caption', placeholder: 'Post caption...', type: 'textarea' },
        { name: 'image_url', label: 'Image URL', placeholder: 'https://example.com/image.jpg', type: 'text' }
      ],
      actionText: 'Post to Instagram',
      processFunction: async (data: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 2500));
        return Math.random() > 0.35; // 65% success rate
      }
    },
    '🎨 Linux Icon Tweaker': {
      icon: <Settings className="w-6 h-6" />,
      fields: [
        { name: 'app_name', label: 'Application Name', placeholder: 'firefox', type: 'text' },
        { name: 'icon_path', label: 'New Icon Path', placeholder: '/usr/share/icons/new-icon.png', type: 'text' },
        { name: 'desktop_file', label: 'Desktop File Path', placeholder: '/usr/share/applications/firefox.desktop', type: 'text' }
      ],
      actionText: 'Change Icon',
      processFunction: async (data: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 1200));
        return Math.random() > 0.15; // 85% success rate
      }
    },
    '🐳 Docker Testbed': {
      icon: <Container className="w-6 h-6" />,
      fields: [
        { name: 'image_name', label: 'Docker Image', placeholder: 'ubuntu:latest', type: 'text' },
        { name: 'command', label: 'Command to Run', placeholder: 'echo "Hello World"', type: 'text' },
        { name: 'container_name', label: 'Container Name', placeholder: 'test-container', type: 'text' }
      ],
      actionText: 'Run Container',
      processFunction: async (data: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return Math.random() > 0.1; // 90% success rate
      }
    }
  };

  const config = projectConfigs[projectName as keyof typeof projectConfigs];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setResult(null);

    try {
      const success = await config.processFunction(formData);
      setResult({
        success,
        message: success 
          ? `✅ ${config.actionText} successful!` 
          : `❌ Failed to ${config.actionText.toLowerCase()}. Please check your credentials.`
      });
    } catch (error) {
      setResult({
        success: false,
        message: `❌ Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const resetForm = () => {
    setFormData({});
    setResult(null);
  };

  if (!isOpen || !config) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg animate-fade-in">
        <div className="card-3d p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]">
                {config.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2E2E2E]">{projectName}</h3>
                <p className="text-sm text-[#555555]">Configure and execute</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#555555] hover:text-[#2E2E2E] hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {config.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    rows={3}
                    className="input-3d w-full resize-none"
                    placeholder={field.placeholder}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    className="input-3d w-full"
                    placeholder={field.placeholder}
                    required
                  />
                )}
              </div>
            ))}

            {/* Result Message */}
            {result && (
              <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                result.success 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {result.success ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">{result.message}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="button-secondary flex-1"
                disabled={isProcessing}
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="button-accent flex-1 flex items-center justify-center space-x-2 text-xs px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>{config.actionText}</span>
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SmartProjectForm; 