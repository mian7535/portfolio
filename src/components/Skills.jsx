import React from 'react';
import { FaReact, FaNodeJs, FaLaravel, FaShopify, FaWordpress, FaDocker, FaLinux, FaCloud, FaPhp, FaAngular, FaVuejs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiAmazonaws, SiMysql } from 'react-icons/si';

const skills = [
  { icon: <FaReact className="text-cyan-400" />, name: 'React' },
  { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
  { icon: <FaAngular className="text-red-600" />, name: 'Angular' },
  { icon: <FaVuejs className="text-green-400" />, name: 'Vue.js' },
  { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
  { icon: <SiExpress className="text-gray-400" />, name: 'Express' },
  { icon: <FaLaravel className="text-red-500" />, name: 'Laravel' },
  { icon: <FaShopify className="text-green-600" />, name: 'Shopify' },
  { icon: <FaWordpress className="text-blue-600" />, name: 'WordPress' },
  { icon: <FaDocker className="text-blue-400" />, name: 'Docker' },
  { icon: <FaCloud className="text-orange-400" />, name: 'AWS Cloud Servers' },
  { icon: <FaLinux className="text-yellow-400" />, name: 'Linux' },
  { icon: <SiMysql className="text-blue-600" />, name: 'MySQL' },
  { icon: <FaPhp className="text-indigo-400" />, name: 'PHP' },
];


export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-900 flex flex-col items-center px-4 mx-auto max-w-[90vw] md:max-w-[85vw]">
      <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="text-base font-medium text-gray-100 mt-1 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
