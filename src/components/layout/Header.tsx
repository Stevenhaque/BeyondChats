import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const headerVariants = {
    initial: { 
      backgroundColor: 'rgba(255, 255, 255, 0)', 
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)' 
    },
    scrolled: { 
      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      y: -20, 
      pointerEvents: 'none',
      transition: { 
        duration: 0.2, 
        ease: 'easeIn' 
      } 
    },
    open: { 
      opacity: 1, 
      y: 0, 
      pointerEvents: 'auto',
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      } 
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      variants={headerVariants}
    >
      <div className="container flex items-center justify-between">
        <Logo isScrolled={isScrolled} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={link.href} 
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled ? 'text-primary-900 hover:text-primary-700' : 'text-white hover:text-accent-300'
                  }`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <motion.button 
          className="block md:hidden text-white z-50"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-primary-900' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-primary-900' : 'text-white'} />
          )}
        </motion.button>
        
        {/* Mobile Navigation */}
        <motion.div 
          className="fixed inset-0 bg-primary-900 bg-opacity-95 flex items-center justify-center md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <nav>
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    y: isOpen ? 0 : 20,
                    transition: { delay: isOpen ? 0.1 * index : 0 }
                  }}
                >
                  <a 
                    href={link.href} 
                    className="text-white text-2xl font-medium"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;