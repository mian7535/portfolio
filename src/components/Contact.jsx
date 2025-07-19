import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      className="py-16 bg-gray-900 flex flex-col items-center max-w-[90vw] md:max-w-[85vw] mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="contact"
    >
      <div className="w-full bg-gray-900 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border-2 border-cyan-400/30">
        {/* Left Side: Icon and Heading */}
        <div className="flex flex-col items-center justify-center bg-gray-800 md:w-1/3 w-full p-8">
          <div className="bg-gray-900 rounded-full p-5 shadow-lg mb-4">
            <FaEnvelope className="text-5xl text-cyan-400" />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-2 text-center">Contact Me</h2>
          <p className="text-cyan-100 text-center text-base">I’m open for opportunities and collaborations!</p>
        </div>
        {/* Right Side: Contact Info */}
        <div className="flex flex-col justify-center items-start md:items-center md:w-2/3 w-full p-8 bg-gray-900">
          <div className="space-y-4 w-full max-w-md mx-auto">
            <a href="mailto:taimoor7535@gmail.com" className="flex items-center text-base font-semibold hover:text-cyan-400 opacity-[0.9] text-white transition px-4 py-2 rounded-lg w-full bg-gray-800 hover:bg-gray-700">
              <FaEnvelope className="mr-3 text-xl text-white" /> taimoor7535@gmail.com
            </a>
            <a href="tel:03077854477" className="flex items-center text-base font-semibold text-white opacity-[0.9] hover:text-yellow-400 transition px-4 py-2 rounded-lg w-full bg-gray-800 hover:bg-gray-700">
              <FaPhone className="mr-3 text-xl text-white" /> 03077854477
            </a>
          </div>
          <div className="flex space-x-8 mt-8 justify-center w-full">
            <a href="https://github.com/mian7535" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-cyan-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mian-taimoor-ahmed-3b12752a3" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
