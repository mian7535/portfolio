import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
// Example static projects data (should match Projects.jsx)
const projects = [
  {
    id: 'tour-management',
    title: 'Tour Management System',
    description: 'As a full stack Laravel developer, I have built a Tour Management System with admin dashboard, agency dashboard, and user dashboard functionality. The system also handles tour bookings and provides a seamless experience for agencies and travelers.',
    details: `The Tour Management System is a comprehensive web application designed for travel agencies, admins, and end users. As the full stack developer, I implemented:
- Admin Dashboard: Manage agencies, users, tours, and bookings with analytics and notifications.
- Agency Dashboard: Agencies can create and manage tours, view bookings, and interact with customers.
- User Dashboard: Users can browse tours, make bookings, and track their reservations.
- Booking Engine: Secure and robust tour booking with real-time availability.
- Responsive UI: Modern interface with Tailwind CSS and Alpine.js for smooth interactivity.

Built with Laravel (backend), Alpine.js (interactivity), Tailwind CSS (UI), MySQL (database), and Swiper (gallery), the system is fast, secure, and user-friendly.`,
    images: [
      '/assets/images/tour_1.png',
      '/assets/images/tour_2.png',
      '/assets/images/tour_3.png',
      '/assets/images/tour_4.png',
      '/assets/images/tour_5.png',
      '/assets/images/tour_6.png',
    ],
    features: [
      'Admin, agency, and user dashboards',
      'Tour creation and management',
      'Secure tour booking system',
      'Analytics and notifications',
      'Modern UI with Tailwind CSS and Alpine.js',
      'Image gallery with Swiper.js'
    ],
    packages: ['Laravel', 'Alpine.js', 'MySQL', 'Tailwind CSS', 'Swiper'],
    
    link: '#'
  },
  {
    id: 'rental-product-plugin',
    title: 'Rental Product Plugin',
    description: 'As a WordPress developer, I have built a plugin which serves product rental functionality. All rental products can be handled through the dashboard menu.',
    details: `Rental Product Plugin is a custom WordPress plugin developed to provide seamless product rental functionality for e-commerce sites. As the developer, I implemented:
- Dashboard integration for easy rental product management
- Elementor compatibility for flexible design
- Payment gateway integration for smooth transactions
- Responsive design for all devices

The plugin allows site owners to add, edit, and manage rental products directly from the WordPress dashboard, making it easy to offer rental services online.`,
    features: [
      'Dashboard menu for rental product management',
      'Elementor builder compatibility',
      'Custom plugin development',
      'Responsive design',
      'Payment gateway integration'
    ],
    images: [
      '/assets/images/rental_product_plugin_1.png'
    ],
    packages: ['Elementor', 'WordPress', 'Plugin Customization', 'Responsive Design', 'Payment Gateway'],
    
  },
  {
    id: 'shopify-product-theme',
    title: 'Shopify Product Theme',
    description: 'As a full stack developer, I have built a Shopify store with dynamic custom theme customization.',
    details: `Shopify Product Theme is a custom Shopify store solution featuring dynamic theme customization. As the full stack developer, I implemented:
- Custom Liquid templates for flexible product and collection layouts
- Advanced theme customization options from the Shopify admin
- Integration of JavaScript and CSS for enhanced interactivity and design
- Fully responsive and mobile-friendly design

This project enables store owners to easily update the look and feel of their store without code, while providing a seamless shopping experience for customers.`,
    features: [
      'Dynamic custom theme customization',
      'Custom Liquid templates',
      'JS and CSS enhancements',
      'Responsive and mobile-friendly design',
      'Easy admin configuration'
    ],
    images: [
      '/assets/images/shopify_product_theme_1.png'
    ],
    packages: ['Shopify', 'Liquid', 'ThemeCustomization', 'JS', 'CSS'],
    
  },
  {
    id: 'dixon-pim-project',
    title: 'Dixon Pim Project',
    description: 'As a backend developer, I handled a massive amount of data related to products and its categories. Implemented Distributors and REST API functionality related to products.',
    details: `Dixon Pim Project is a large-scale backend system for managing high-volume product and category data. As the backend developer, I implemented:
- Efficient data models for products and categories
- Distributor management and syndication system
- REST API endpoints for product data integration
- Automated product import/export workflows

The solution is built on WordPress and PHP, enabling seamless product management and third-party integrations for distributors and partners.`,
    features: [
      'Massive product and category data handling',
      'Distributor and syndication management',
      'REST API for product integration',
      'Automated import/export workflows',
      'Robust backend architecture'
    ],
    images: ['/assets/images/dixon_pim_1.png'],
    packages: ['PHP', 'WordPress', 'Product Management', 'Syndication System', 'API Integration'],
    
  },
  {
    id: 'laravel-vue-app',
    title: 'Laravel Vue App',
    description: 'As a frontend developer, I have built a Laravel Vue site with responsive design using Alpine.js and Tailwind CSS.',
    details: `Laravel Vue App is a modern web application built with Laravel as the backend and Vue.js as the frontend. As the frontend developer, I implemented:
- Responsive design with Tailwind CSS
- Dynamic UI with Vue.js and Alpine.js
- Swiper.js for interactive sliders
- Seamless integration between Laravel and Vue components

The project delivers a fast, interactive, and mobile-friendly user experience.`,
    features: [
      'Vue.js frontend with Laravel backend',
      'Responsive design with Tailwind CSS',
      'Alpine.js for interactivity',
      'Swiper.js for sliders',
      'Seamless Laravel-Vue integration'
    ],
    packages: ['Laravel', 'Vue', 'Tailwind CSS', 'Alpine.js', 'Swiper JS'],
    images: [
      '/assets/images/laravel_vue_app.png'
    ],
    
  },
  {
    id: 'woofcrate',
    title: 'Woofcrate',
    description: 'Created a fully functioning ecommerce website with Shopify and WordPress collaboration.',
    details: `Woofcrate is a fully functioning ecommerce website built through the collaboration of Shopify and WordPress. The project features:
- Seamless integration between Shopify and WordPress for product and content management
- Custom web flows for user experience optimization
- Payment gateway setup with Stripe integration
- Responsive design and dynamic product listings

This solution allows for flexible store management and a smooth customer journey across platforms.`,
    features: [
      'Shopify and WordPress integration',
      'Custom web flows',
      'Stripe payment gateway',
      'Responsive ecommerce design',
      'Dynamic product management'
    ],
    images: ['/assets/images/woofcrate_1.png'],
    packages: ['Shopify', 'WordPress', 'JavaScript', 'PHP', 'Ecommerce', 'Payment Gateway', 'Web Flow', 'Stripe Integration'],
    
  },
  {
    id: 'medical-biller',
    title: 'Medical Biller',
    description: 'A comprehensive SaaS platform built with Laravel, designed to streamline medical billing processes for clinics, companies, and professionals. The application features advanced dashboards, multi-role access (Doctor, Company, Job Seeker), dynamic job and company listings, integrated blog, and robust admin controls. Developed using Laravel, Alpine.js, Tailwind CSS, and MySQL, this project delivers a seamless and intuitive experience for every user type.',
    details: `Medical Biller is a full-featured SaaS web application tailored for the healthcare industry. As the lead full stack developer, I architected and implemented a scalable solution supporting multiple user roles (Doctors, Job Seekers, Companies), each with a custom dashboard and workflow. Key modules include:
- Job Listings: Doctors and job seekers can browse, post, and manage job opportunities.
- Company Directory: Companies can create profiles, post jobs, and manage applicants.
- Blog & Content: Integrated CMS for publishing articles and industry updates.
- Advanced Dashboards: Real-time analytics, notifications, and role-based features.
- Admin Controls: Comprehensive admin panel for managing users, content, and platform settings.

Built with Laravel (backend), Alpine.js (interactivity), Tailwind CSS (UI), and MySQL (database), the platform delivers a modern, secure, and user-friendly experience for all stakeholders.`,
    images: [
      '/assets/images/medical_biller_1.png',
      '/assets/images/medical_biller_2.png',
      '/assets/images/medical_biller_3.png'
    ],
    features: [
      'Multiple user roles: Doctor, Job Seeker, Company',
      'Role-based dashboards',
      'Job module',
      'Listing companies module',
      'Admin dashboard with full control',
      'Blog and content management',
      'Modern UI with Tailwind CSS and Alpine.js'
    ],
    packages: ['Laravel', 'PHP', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
    
    link: 'https://medicalbiller.co/'
  },
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);
  // Ref for top of detail
  const detailTopRef = useRef(null);
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (detailTopRef.current) {
      detailTopRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [projectId]);
  const [lightboxImg, setLightboxImg] = useState(null);
  // Track which images have loaded
  const [imageLoaded, setImageLoaded] = useState({});

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <section ref={detailTopRef} className="min-h-screen py-12 px-4 md:px-12 bg-gray-900 text-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:max-w-[85vw] max-w-[90vw] mx-auto"
      >
        {/* HERO SECTION */}
        <div className="w-full flex flex-col md:flex-row items-center gap-8 mb-10">
          {/* Main Project Image or Swiper */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
            {project.images && project.images.length > 0 && (
              <Swiper spaceBetween={10} slidesPerView={1} loop={true} className="project-swiper rounded-xl">
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-64">
                      {/* Skeleton shimmer */}
                      {!imageLoaded[img] && (
                        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-xl overflow-hidden">
                          <div className="w-full h-full bg-gray-800/30" style={{ filter: 'blur(4px)' }}></div>
                        </div>
                      )}
                      {/* Image */}
                      <img
                        src={img}
                        alt={project.title + ' screenshot'}
                        className={`w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105 rounded-xl ${!imageLoaded[img] ? 'opacity-0' : 'opacity-100'}`}
                        loading="lazy"
                        onLoad={() => setImageLoaded(prev => ({ ...prev, [img]: true }))}
                      />
                      {/* Eye Icon Always Top-Right */}
                      <button
                        className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg focus:outline-none"
                        onClick={() => {
                          setLightboxImg(img);
                          setLightboxOpen(true);
                        }}
                        aria-label="View image"
                        type="button"
                      >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          {/* Title and Description */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400 drop-shadow-lg">{project.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.packages && project.packages.map((pkg, idx) => (
                <span key={idx} className="bg-blue-700/80 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md">{pkg}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="w-full bg-gray-800/80 rounded-2xl shadow-lg p-8 mb-4">
          <h2 className="text-2xl font-bold mb-3 text-blue-300">About This Project</h2>
          <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">{project.details}</p>
        </div>

        {/* LIVE PROJECT LINK (moved above About section) */}
        {project.link && (
          <div className="w-full flex justify-center mb-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 font-bold py-4 px-10 rounded-2xl shadow-xl transition duration-200 text-xl backdrop-blur-md"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 015.656 5.656l-3 3a4 4 0 01-5.656-5.656" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 01-5.656-5.656l3-3a4 4 0 015.656 5.656" />
              </svg>
              <span>View Live Project</span>
            </a>
          </div>
        )}

        {/* FEATURES SECTION */}
        <div className="w-full bg-gray-800/80 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-300">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {project.features && project.features.map((f, idx) => (
              <li key={idx} className="pl-2">{f}</li>
            ))}
          </ul>
        </div>

        {/* GALLERY SECTION (if more than 1 image) */}
        {project.images && project.images.length > 1 && (
          <div className="w-full bg-gray-800/80 rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-blue-300">Gallery</h2>
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              className="gallery-swiper rounded-xl"
              breakpoints={{
                1024: {
                  slidesPerView: 2
                }
              }}
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-72">
                    {/* Skeleton shimmer */}
                    {!imageLoaded[img] && (
                      <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-xl overflow-hidden">
                        <div className="w-full h-full bg-gray-800/30" style={{ filter: 'blur(4px)' }}></div>
                      </div>
                    )}
                    {/* Image */}
                    <img
                      src={img}
                      alt={project.title + ' gallery'}
                      className={`w-full h-72 object-cover rounded-xl shadow-lg ${!imageLoaded[img] ? 'opacity-0' : 'opacity-100'}`}
                      loading="lazy"
                      onLoad={() => setImageLoaded(prev => ({ ...prev, [img]: true }))}
                    />
                    {/* Eye Icon Always Top-Right */}
                    <button
                      className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg focus:outline-none"
                      onClick={() => {
                        setLightboxImg(img);
                        setLightboxOpen(true);
                      }}
                      aria-label="View image"
                      type="button"
                    >
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}


      {/* Back Button Above Title */}
      <div className="mb-4">
        <button
          type="button"
          onClick={() => {
            const projects = document.getElementById('projects');
            if (projects) {
              projects.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/#projects');
              setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }
          }}
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 border border-blue-600 text-white font-semibold w-11 h-11 rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-all duration-200 text-lg group"
          aria-label="Back to Home"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-all"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-3xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full px-3 py-1 hover:bg-black/80 z-10"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close photo view"
            >
              &times;
            </button>
            <img
              src={lightboxImg}
              alt="Project large view"
              className="rounded-xl max-h-[80vh] w-auto h-auto shadow-2xl border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </motion.div>
  </section>
  );
}

