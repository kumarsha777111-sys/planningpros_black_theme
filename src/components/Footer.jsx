import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
const Footer = () => {
  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const handleLinkClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const services = ["Software Development", "Data & Analytics", "Cybersecurity", "Project Management", "Business Operations", "Customer Support"];
  const company = ["About Us", "Our Process", "Success Stories", "Careers", "Blog", "Contact"];
  const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance"];
  return <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Planning Pros</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your trusted partner in IT staff augmentation. We connect businesses with top-tier professionals through our innovative one-time fee model.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4" />
                <span>hello@planningpros.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India.</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="space-y-6">
            <span className="text-lg font-semibold">Services</span>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <button onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors text-left">
                    {service}
                  </button>
                </li>)}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <span className="text-lg font-semibold">Company</span>
            <ul className="space-y-3">
              {company.map((item, index) => <li key={index}>
                  <button onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors text-left">
                    {item}
                  </button>
                </li>)}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="space-y-6">
            <span className="text-lg font-semibold">Legal</span>
            <ul className="space-y-3">
              {legal.map((item, index) => <li key={index}>
                  <button onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors text-left">
                    {item}
                  </button>
                </li>)}
            </ul>
            
            <div className="pt-4">
              <span className="text-lg font-semibold block mb-4">Follow Us</span>
              <div className="flex space-x-4">
                <button onClick={handleSocialClick} className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button onClick={handleSocialClick} className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button onClick={handleSocialClick} className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button onClick={handleSocialClick} className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-center md:text-left">
            © 2024 Planning Pros. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Made with ❤️ for growing businesses</span>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;