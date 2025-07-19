import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'tour-management',
    categories: ['Laravel'],
    title: 'Tour Management System',
    description: 'As a full stack Laravel developer, I have built a Tour Management System with admin dashboard, agency dashboard, and user dashboard functionality. The system also handles tour bookings and provides a seamless experience for agencies and travelers.',
    packages: ['Laravel', 'Alpine.js', 'MySQL', 'Tailwind CSS', 'Swiper'],
    images: ['/assets/images/tour_1.png'],
  },
  {
    id: 'rental-product-plugin',
    categories: ['WordPress'],
    title: 'Rental Product Plugin',
    description: 'As a WordPress developer, I have built a plugin which serves product rental functionality. All rental products can be handled through the dashboard menu.',
    packages: ['Elementor', 'WordPress', 'Plugin Customization', 'Responsive Design', 'Payment Gateway'],
    images: ['/assets/images/rental_product_plugin_1.png'],
  },
  {
    id: 'shopify-product-theme',
    categories: ['Shopify'],
    title: 'Shopify Product Theme',
    description: 'As a full stack developer, I have built a Shopify store with dynamic custom theme customization.',
    packages: ['Shopify', 'Liquid', 'ThemeCustomization', 'JS', 'CSS'],
    images: ['/assets/images/shopify_product_theme_1.png'],
  },
  {
    id: 'dixon-pim-project',
    categories: ['WordPress'],
    title: 'Dixon Pim Project',
    images: ['/assets/images/dixon_pim_1.png'],
    description: 'As a backend developer, I handled a massive amount of data related to products and its categories. Implemented Distributors and REST API functionality related to products.',
    packages: ['PHP', 'WordPress', 'Product Management', 'Syndication System', 'API Integration'],
  },
  {
    id: 'laravel-vue-app',
    categories: ['Laravel', 'Vue'],
    title: 'Laravel Vue App',
    description: 'As a frontend developer, I have built a Laravel Vue site with responsive design using Alpine.js and Tailwind CSS.',
    packages: ['Laravel', 'Vue', 'Tailwind CSS', 'Alpine.js', 'Swiper JS', 'Inertia'],
    images: ['/assets/images/laravel_vue_app.png'],
  },
  {
    id: 'woofcrate',
    title: 'Woofcrate',
    images: ['/assets/images/woofcrate_1.png'],
    description: 'Created a fully functioning ecommerce website with Shopify and WordPress collaboration.',
    categories: ['Shopify', 'WordPress', 'Ecommerce'],
    packages: ['Shopify', 'WordPress', 'JavaScript', 'PHP', 'Ecommerce', 'Payment Gateway', 'Web Flow', 'Stripe Integration'],
  },
  {
    id: 'repair-greek',
    title: 'Repair Greek',
    categories: ['React', 'MERN Stack'],
    packages: ['React', 'Tailwind CSS', 'Tailwind Motion', 'Responsive Design'],
    description: 'Repait Greek is a modern web application built with React, Tailwind CSS, and Tailwind Motion. The project features a fully responsive design, smooth motion effects, and a clean, user-friendly interface, making it ideal for both desktop and mobile users.',
    images: ['/assets/images/repair_greek_1.png'],
  },
  {
    id: '90seats',
    title: '90seats',
    categories: ['React', 'MERN Stack'],
    packages: ['React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'Responsive Design'],
    description: '90seats is a robust full-stack web application for seat booking and management. Built using the MERN stack, it features a modern React frontend, fast Node.js/Express backend, and MongoDB for scalable data storage. The UI is crafted with TailwindCSS for a responsive, mobile-friendly experience.',
    images: [
      '/assets/images/90seats_1.png',
      '/assets/images/90seats_2.png',
      '/assets/images/90seats_3.png',
      '/assets/images/90seats_4.png',
      '/assets/images/90seats_5.png',
      '/assets/images/90seats_6.png',
    ],
  },
  {
    id: 'medical-biller',
    title: 'Medical Biller',
    description: 'A comprehensive Laravel-based SaaS platform for medical billing, featuring multi-role access (Doctor, Company, Job Seeker), advanced dashboards, dynamic job and company listings, integrated blogs, and robust admin controls. Built with modern technologies (Laravel, Alpine.js, Tailwind CSS, MySQL), this project streamlines medical billing operations and empowers users with intuitive interfaces and powerful management tools.',
    categories: ['Laravel'],
    packages: ['Laravel', 'PHP', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
    images: ['/assets/images/medical_biller_1.png'],
    link: 'https://medicalbiller.co/',
  },
  // --- Added by Cascade ---
  {
    id: 'balady',
    title: 'Balady',
    description: 'Balady is an advanced training platform where users can register, enroll in courses, access lessons, pass exams, and get certified. It provides a seamless e-learning experience with progress tracking and certification.',
    categories: ['Angular' , 'Laravel'],
    packages: ['Frontend: Angular', 'Bootstrap', "REST API's", 'Backend: Laravel', 'MySQL'],
    images: [
      '/assets/images/balady_1.png',
      '/assets/images/balady_2.png',
      '/assets/images/balady_3.png',
      '/assets/images/balady_4.png',
      '/assets/images/balady_5.png',
    ],
  },
  {
    id: 'balady-dashboard',
    title: 'Balady Dashboard',
    description: 'Balady Dashboard is the admin panel for the Balady training platform. Admins can manage exams, answer questions, handle users, courses, lessons, and view analytics for platform performance and user progress.',
    categories: ['Laravel', 'Bootstrap', 'MySQL'],
    packages: ['Laravel', 'Bootstrap', 'MySQL'],
    images: [
      '/assets/images/baladyapp_1.png',
      '/assets/images/baladyapp_2.png',
      '/assets/images/baladyapp_3.png',
      '/assets/images/baladyapp_4.png',
      '/assets/images/baladyapp_5.png',
      '/assets/images/baladyapp_6.png',
    ],
  }
];



const FILTERS = [
  'All',
  'MERN Stack',
  'Laravel',
  'Vue',
  'Angular',
  'Shopify',
  'WordPress',
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.categories && p.categories.includes(selectedFilter));

  return (
    <motion.section
      className="py-16 bg-gray-900 flex flex-col items-center max-w-[90vw] md:max-w-[85vw] mx-auto relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="projects"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center w-full border border-blue-400/30">
        <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-10 w-full justify-center">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full font-semibold border-2 transition text-sm md:text-base
                ${selectedFilter === filter
                  ? 'bg-blue-500 border-blue-400 text-white shadow-lg'
                  : 'bg-transparent border-blue-400 text-blue-300 hover:bg-blue-400/20'}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center text-gray-300 py-12 text-lg">No projects found for this category.</div>
          )}
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              className="flex flex-col bg-gradient-to-br from-blue-800/60 to-cyan-500/10 rounded-2xl p-6 shadow-md hover:shadow-xl border border-blue-400/10 transition"
            >
              {/* Project Cover Image or Placeholder */}
              <div className="w-full h-32 rounded-xl bg-gradient-to-tr from-blue-400/40 to-cyan-400/10 mb-4 flex items-center justify-center overflow-hidden">
                {project.images && project.images[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title + ' cover'}
                    className="w-full h-32 object-cover rounded-xl shadow-lg"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-5xl text-white/30">🚀</span>
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.packages && project.packages.map((pkg, i) => (
                  <span key={i} className="bg-cyan-700/40 text-cyan-100 text-xs px-2 py-1 rounded-full">{pkg}</span>
                ))}
              </div>
              <Link to={`/project/${project.id}`} className="bg-blue-500 hover:bg-cyan-400 hover:text-blue-900 text-white font-semibold py-2 px-6 rounded-full shadow transition mt-auto text-center">View Project</Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smooth scrolling style */}
      <style>{`html { scroll-behavior: smooth; }`}</style>
    </motion.section>
  );
}

