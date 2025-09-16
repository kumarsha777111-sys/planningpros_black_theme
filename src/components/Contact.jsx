import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp number (same as used elsewhere)
    const phoneNumber = '+918076536172';
  // Compose message (formatted for WhatsApp)
  const message = `Contact Request from Website\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`;
  // Automatically redirect to WhatsApp with pre-filled message
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-8920776116",
      description: "Mon-Fri 9AM-6PM IST",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "karan@planningpros.in",
      description: "We respond within 2 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "N-4, Private Colony, Sri Niwas Puri",
      description: "New Delhi, India 110065",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for urgent staffing needs"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Personal account manager for every client"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all placements"
    }
  ];

  return (
  <section id="contact" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 rounded-full mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs md:text-sm font-medium text-slate-700">Get In Touch</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            Ready to <span className="gradient-text">Scale Your Team?</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-200 max-w-xl mx-auto leading-tight">
            <span className="font-semibold text-white drop-shadow-lg" style={{textShadow: '0 2px 12px rgba(0,0,0,0.25)'}}>
              Let's discuss your staffing needs and find the perfect professionals for your team.<br />
              <span className="text-blue-400">Get started with a free consultation today.</span>
            </span>
          </p>
        </motion.div>

  <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-2">Send us a message</h3>
              <p className="text-xs md:text-sm text-slate-200 mb-4">Fill out the form below and we'll get back to you within 2 hours during business hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-slate-200 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-slate-200 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-xs md:text-sm font-medium text-slate-200 mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-slate-200 mb-1.5">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm"
                  placeholder="Tell us about your staffing needs, project timeline, required skills, and team size..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base py-3"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Get in touch</h3>
              <p className="text-sm md:text-base text-slate-200 mb-6">
                Prefer to speak directly? We're here to help through multiple channels.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-effect p-5 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 mb-0.5">{info.title}</h4>
                      <p className="text-slate-800 font-medium text-sm mb-0.5">{info.details}</p>
                      <p className="text-xs text-slate-600">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;