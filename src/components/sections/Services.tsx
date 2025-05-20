import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { services } from '../../data';
import { Calculator, BookOpen, LineChart, TrendingUp, CheckCircle, Building } from 'lucide-react';

const Services: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getIcon = (iconName: string, size = 40) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator size={size} className="text-secondary-500" />;
      case 'BookOpen':
        return <BookOpen size={size} className="text-secondary-500" />;
      case 'LineChart':
        return <LineChart size={size} className="text-secondary-500" />;
      case 'TrendingUp':
        return <TrendingUp size={size} className="text-secondary-500" />;
      case 'CheckCircle':
        return <CheckCircle size={size} className="text-secondary-500" />;
      case 'Building':
        return <Building size={size} className="text-secondary-500" />;
      default:
        return <Calculator size={size} className="text-secondary-500" />;
    }
  };

  return (
    <section id="services" className="section bg-white py-24">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-primary-900">Our Services</h2>
          <p className="text-lg text-gray-600">
            Modern CPA offers a comprehensive range of accounting and financial services
            tailored to meet the unique needs of individuals and businesses of all sizes.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="mb-6 p-4 bg-secondary-50 rounded-lg inline-block">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.a 
                href="#contact"
                className="inline-block mt-6 text-secondary-600 font-medium group-hover:text-secondary-500"
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;