import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a backend API
    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-accent-400" />,
      title: 'Phone',
      info: '(555) 123-4567',
      action: 'tel:5551234567',
      label: 'Call us',
    },
    {
      icon: <Mail size={24} className="text-accent-400" />,
      title: 'Email',
      info: 'info@moderncpa.com',
      action: 'mailto:info@moderncpa.com',
      label: 'Send an email',
    },
    {
      icon: <MapPin size={24} className="text-accent-400" />,
      title: 'Office',
      info: '123 Financial District, New York, NY 10004',
      action: 'https://maps.google.com',
      label: 'Get directions',
    },
  ];

  return (
    <section id="contact" className="section bg-white" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-primary-900">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions or ready to get started? Reach out to us today for a consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1 * index, duration: 0.5 }
              } : { opacity: 0, y: 30 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-900">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.info}</p>
              <a 
                href={item.action} 
                className="text-secondary-600 font-medium hover:text-secondary-700"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-900">Schedule a Consultation</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below, and one of our expert advisors will reach out to discuss how we can best meet your financial needs.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h4 className="font-bold text-primary-900 mb-3">Office Hours</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {formStatus === 'success' ? (
              <motion.div 
                className="bg-success-50 p-8 rounded-lg border border-success-100 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle size={48} className="text-success-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-success-700 mb-2">Message Sent!</h3>
                <p className="text-success-700">
                  Thank you for reaching out. One of our team members will contact you shortly.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 btn btn-outline border-success-500 text-success-700 hover:bg-success-50"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-error-50 border border-error-100 rounded-md flex items-start">
                    <AlertCircle size={20} className="text-error-500 mr-2 mt-0.5" />
                    <p className="text-error-700">
                      There was an error submitting your form. Please try again.
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Tax Planning">Tax Planning & Preparation</option>
                      <option value="Bookkeeping">Bookkeeping & Accounting</option>
                      <option value="Financial Planning">Financial Planning</option>
                      <option value="Business Consulting">Business Consulting</option>
                      <option value="Audit">Audit & Assurance</option>
                      <option value="Estate Planning">Estate & Trust Planning</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;