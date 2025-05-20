import React from 'react';
import { motion } from 'framer-motion';
import { BarChart4 } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <motion.div 
      className="flex items-center" 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href="#home" className="flex items-center">
        <BarChart4 size={32} className={`${isScrolled ? 'text-accent-400' : 'text-accent-400'} mr-2`} />
        <span className={`text-xl font-bold ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
          Modern<span className={isScrolled ? 'text-secondary-500' : 'text-accent-400'}>CPA</span>
        </span>
      </a>
    </motion.div>
  );
};

export default Logo;