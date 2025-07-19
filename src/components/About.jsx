import React from 'react';
// Up arrow button added at end of About section for scroll-to-hero functionality.
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCode, FaCloud, FaGraduationCap, FaCheckCircle, FaUsers } from 'react-icons/fa';

export default function About() {
  // Floating up-arrow button logic
  const [showUp, setShowUp] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <motion.section
      className="py-16 bg-gray-900 text-white flex flex-col justify-center items-center mx-auto max-w-[90vw] md:max-w-[85vw]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="about"
    >
      <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-cyan-400">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Main Content */}
        <div className="flex-1 space-y-7">
          <p className="text-lg text-gray-300 text-center md:text-left">
            Over the past several years, I’ve built <span className="text-cyan-400 font-semibold">digital products</span> for startups and established brands, specializing in <span className="text-cyan-300">MERN</span>, <span className="text-cyan-300">Laravel</span>, <span className="text-cyan-300">Shopify</span>, <span className="text-cyan-300">WordPress</span>, and <span className="text-cyan-300">cloud solutions</span>.
          </p>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {/* Quick Facts Card */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300 flex items-center gap-2">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Quick Facts
              </h3>
              <ul className="space-y-3 text-left w-full max-w-xs">
                <li className="flex items-center gap-2"><span className="text-cyan-400"><FaMapMarkerAlt /></span><span className="font-medium">Remote</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400"><FaCode /></span>3+ years of <span className="font-medium">coding experience</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400"><FaCloud /></span>Cloud & DevOps <span className="font-medium">enthusiast</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400"><FaGraduationCap /></span>Lifelong <span className="font-medium">learner</span></li>
              </ul>
            </div>
            {/* Values Card */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300 flex items-center gap-2">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                My Values
              </h3>
              <ul className="space-y-3 text-left w-full max-w-xs">
                <li className="flex items-center gap-2"><span className="text-cyan-400"><FaCheckCircle /></span>Clean, <span className="font-medium">scalable code</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400"><FaUsers /></span>Great <span className="font-medium">user experience</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400"><FaGraduationCap /></span>Continuous <span className="font-medium">improvement</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* More About Me Section */}
      <div className="mt-12 bg-gray-800 rounded-xl shadow-lg p-8 w-full">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">More About Me</h3>
        <p className="text-gray-300 mb-3">
          My journey in tech started with curiosity and a love for problem-solving. Over the years, I've worked with startups and established companies, building products that make a real impact. I'm passionate about clean code, automation, and continuous learning.
        </p>
        <p className="text-gray-300 mb-3">
          I enjoy collaborating with diverse teams and thrive in environments where innovation and creativity are encouraged. Outside of coding, I love exploring new technologies, mentoring others, and contributing to open-source projects.
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-cyan-400">Currently:</span> I'm focused on cloud-native solutions, DevOps best practices, and building scalable web applications with the MERN stack and Laravel.
        </p>
      </div>

    </motion.section>
    {showUp && (
      <button
        onClick={() => {
          const hero = document.getElementById('hero');
          if (hero) hero.scrollIntoView({ behavior: 'smooth' });
        }}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-white/30"
        aria-label="Scroll to top / hero"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    )}
    </>
  );
}

