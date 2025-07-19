import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DownloadResume() {
  return (
    <motion.section
      className="py-16 bg-gray-900 flex flex-col items-center max-w-[90vw] md:max-w-[85vw] mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="resume"
    >
      <div className="bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 rounded-3xl shadow-2xl p-10 flex flex-col items-center w-full">
        <div className="bg-white rounded-full p-4 mb-4 shadow-lg">
          <FaFilePdf className="text-5xl text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-white">Download My Resume</h2>
        <p className="text-gray-100 mb-6 text-center">Get a copy of my latest resume, highlighting my experience in MERN, Laravel, Shopify, WordPress, Cloud, and DevOps.</p>
        <a
          href="/assets/pdf/Mian's Resume.pdf"
          download
          className="flex items-center gap-3 bg-blue-600 hover:bg-cyan-400 hover:text-blue-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition mb-2 text-lg group"
        >
          <FaDownload className="text-2xl group-hover:animate-bounce" />
          Download Resume
        </a>
        <span className="text-gray-200 text-xs">PDF, 1 page • Last updated 2025</span>
      </div>
    </motion.section>
  );
}
