import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';
import { navLinks } from '../../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    { icon: <Phone size={16} />, text: '(555) 123-4567' },
    { icon: <Mail size={16} />, text: 'info@moderncpa.com' },
    { icon: <MapPin size={16} />, text: '123 Financial District, New York, NY 10004' },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, url: '#', name: 'Twitter' },
    { icon: <Linkedin size={20} />, url: '#', name: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: '#', name: 'Instagram' },
  ];
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              Professional accounting services tailored to meet your financial needs. We provide expert guidance to help you achieve your financial goals.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-400 mr-2 mt-1">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="bg-primary-800 text-gray-300 hover:text-white p-2 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1, backgroundColor: "#3B82F6" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Sign up for our newsletter to get the latest updates and insights.
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-800 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent-400 text-sm flex-grow"
              />
              <button className="bg-accent-400 hover:bg-accent-500 text-white px-4 py-2 rounded-r-md transition-colors duration-200 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Modern CPA. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;