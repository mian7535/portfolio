import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaLaravel, FaShopify, FaWordpress, FaDocker, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

import React, { useState } from 'react';

export default function Hero() {
  const [profileViewOpen, setProfileViewOpen] = useState(false);
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 mx-auto max-w-[90vw] md:max-w-[85vw]"
    >
            {/* Profile Image with Click-to-View */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white mb-6 mt-12 cursor-pointer"
        onClick={() => setProfileViewOpen(true)}
      >
        <img
          src="/assets/images/mian-taimoor-ahmed-profile.png"
          alt="Mian Taimoor Ahmed profile photo"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Modal for Profile Image View */}
      {profileViewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-all"
          onClick={() => setProfileViewOpen(false)}
        >
          <div className="relative max-w-lg w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full px-3 py-1 hover:bg-black/80 z-10"
              onClick={() => setProfileViewOpen(false)}
              aria-label="Close photo view"
            >
              &times;
            </button>
            <img
              src="/assets/images/mian-taimoor-ahmed-profile.png"
              alt="Mian Taimoor Ahmed profile photo"
              className="rounded-xl max-h-[80vh] w-auto h-auto shadow-2xl border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center"
      >
        Empowering Brands with <span className="text-blue-400">Modern Web Solutions</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl md:text-2xl font-semibold mb-6 text-center text-blue-200"
      >
        Full-Stack Developer | Building Fast, Scalable & Beautiful Digital Products
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-xl text-md md:text-lg text-gray-300 mb-8 text-center"
      >
        Hi, I’m <span className="font-bold text-white">Mian Taimoor Ahmed</span> — a creative developer passionate about crafting seamless user experiences and robust applications. From startups to established brands, I help turn ambitious ideas into reality using the latest technologies.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        href="#projects"
        className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-colors duration-300 mb-8"
      >
        Explore My Projects
      </motion.a>
      <motion.div
        className="flex flex-row flex-wrap gap-6 mt-4 mb-8 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="React"><FaReact className="text-cyan-400" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="Node.js"><FaNodeJs className="text-green-500" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="MongoDB"><SiMongodb className="text-green-700" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="Express"><SiExpress className="text-gray-400" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="Laravel"><FaLaravel className="text-red-500" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="Shopify"><FaShopify className="text-green-600" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="WordPress"><FaWordpress className="text-blue-600" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="Docker"><FaDocker className="text-blue-400" /></motion.span>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl" title="Cloud"><FaCloud className="text-gray-300" /></motion.span>
      </motion.div>
    </section>
  );
}
