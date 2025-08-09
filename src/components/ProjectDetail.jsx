import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';

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

