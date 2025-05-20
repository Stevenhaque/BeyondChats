import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const featureItems = [
    {
      icon: <ShieldCheck className="text-accent-400" size={24} />,
      text: "Trusted by 500+ Clients",
    },
    {
      icon: <Users className="text-accent-400" size={24} />,
      text: "Certified Expert Team",
    },
    {
      icon: <TrendingUp className="text-accent-400" size={24} />,
      text: "Proven Growth Strategies",
    },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMnMyIC45IDIgMmEyIDIgMCAwMS00IDB6bTAtN2MwLTEuMS45LTIgMi0yczIgLjkgMiAyYTIgMiAwIDAxLTQgMHptLTctN2MwLTEuMS45LTIgMi0yczIgLjkgMiAyYTIgMiAwIDAxLTQgMHptMCAxNGMwLTEuMS45LTIgMi0yczIgLjkgMiAyYTIgMiAwIDAxLTQgMHptLTctN2MwLTEuMS45LTIgMi0yczIgLjkgMiAyYTIgMiAwIDAxLTQgMHptMC03YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJhMiAyIDAgMDEtNCAwem0tNyA3YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJhMiAyIDAgMDEtNCAweiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] z-0"></div>
      
      <div className="container relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1 
              className="text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Financial Clarity for <span className="text-accent-400">Your Future</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-lg"
              variants={itemVariants}
            >
              Modern CPA offers comprehensive accounting solutions tailored to your unique needs. Our team of experts is dedicated to helping you navigate complex financial landscapes with confidence.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="btn btn-accent"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="btn btn-outline text-white border-white hover:bg-white/10"
              >
                Our Services
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap gap-6"
              variants={itemVariants}
            >
              {featureItems.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.icon}
                  <span className="ml-2 text-white">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="hidden md:block"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-accent-400 z-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-secondary-500 z-0"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional CPA team" 
                className="rounded-lg shadow-2xl relative z-10 object-cover w-full h-[500px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;