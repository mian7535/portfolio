import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects.json';
import { FiSearch } from 'react-icons/fi';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects = useMemo(() => {
    let result = [...projects];
    
    // Apply category filter
    if (selectedFilter !== 'All') {
      result = result.filter(p => p.categories && p.categories.includes(selectedFilter));
    }
    
    // Apply search term filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(project => {
        const searchInTitle = project.title?.toLowerCase().includes(term) || false;
        const searchInDesc = project.description?.toLowerCase().includes(term) || false;
        const searchInTech = project.packages?.some(pkg => 
          pkg.toLowerCase().includes(term)
        ) || false;
        
        return searchInTitle || searchInDesc || searchInTech;
      });
    }
    
    // Reset visible projects when filters change
    setVisibleProjects(4);
    
    return result;
  }, [selectedFilter, searchTerm]);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => prevVisible + 4);
  };
  
  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  return (
    <motion.section
      className="py-16 bg-gray-900 dark:bg-gray-900 bg-gray-100 text-gray-900 dark:text-white flex flex-col items-center max-w-[90vw] md:max-w-[85vw] mx-auto relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="projects"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center w-full border border-blue-400/30">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-blue-300" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-blue-400/30 rounded-full bg-white/5 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search projects by title, description, or technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-2"></div>
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mt-6 mb-10 w-full justify-center">
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
          {projectsToShow.length === 0 ? (
            <div className="col-span-full text-center text-gray-300 py-12 text-lg">No projects found for this category.</div>
          ) : (
            projectsToShow.map((project, idx) => (
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
          )))}
          
          {filteredProjects.length > visibleProjects && (
            <div className="col-span-full flex justify-center mt-6">
              <button
                onClick={loadMoreProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Smooth scrolling style */}
      <style>{`html { scroll-behavior: smooth; }`}</style>
    </motion.section>
  );
}

