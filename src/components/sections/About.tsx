import React from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckSquare, Award, Clock, DollarSign } from 'lucide-react';

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const features = [
    {
      icon: <CheckSquare size={24} className="text-accent-400" />,
      title: 'Accuracy & Precision',
      description: 'Our meticulous approach ensures your financial data is accurate and compliant with all regulatory requirements.'
    },
    {
      icon: <Award size={24} className="text-accent-400" />,
      title: 'Certified Expertise',
      description: 'Our team includes certified professionals with specialized knowledge across various industries and tax situations.'
    },
    {
      icon: <Clock size={24} className="text-accent-400" />,
      title: 'Timely Service',
      description: 'We pride ourselves on responsive communication and meeting all deadlines with time to spare.'
    },
    {
      icon: <DollarSign size={24} className="text-accent-400" />,
      title: 'Value-Driven Solutions',
      description: 'Our services are designed to maximize your financial potential while minimizing costs and tax liabilities.'
    }
  ];
  
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
  
  return (
    <section id="about" className="section bg-gray-50" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-primary-900">About Modern CPA</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, Modern CPA has quickly established itself as a forward-thinking accounting firm that combines traditional accounting principles with innovative technology and approaches.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to provide personalized financial guidance to help our clients achieve their goals while navigating complex tax regulations and financial challenges. We believe in building long-term relationships based on trust, expertise, and exceptional service.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary-500 mb-2">98%</p>
                  <p className="text-gray-600">Client Retention</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary-500 mb-2">500+</p>
                  <p className="text-gray-600">Clients Served</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary-500 mb-2">25+</p>
                  <p className="text-gray-600">Industry Experts</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary-500 mb-2">50M+</p>
                  <p className="text-gray-600">Tax Savings</p>
                </div>
              </div>
              
              <a href="#contact" className="btn btn-primary">
                Schedule a Consultation
              </a>
            </motion.div>
          </div>
          
          <motion.div
            className="flex flex-col space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
              >
                <div className="mr-4 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-primary-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;