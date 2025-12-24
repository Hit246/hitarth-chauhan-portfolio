import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[450px] w-full"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full duration-500 transition-all"
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          perspective: 1000,
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-xl"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="h-1/2 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: flipped ? 'scale(1)' : undefined }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title}/800/600`;
              }}
            />
          </div>
          <div className="h-1/2 p-6 flex flex-col justify-between bg-gradient-to-b from-dark/90 to-dark">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold font-heading text-white">{project.title}</h3>
                {project.featured && (
                  <span className="px-2 py-0.5 text-xs bg-accent/20 text-accent rounded-full border border-accent/30">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-sm line-clamp-3 mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 text-slate-300">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-slate-300">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Indicator to flip */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-white">Flip for details</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-dark border border-primary/30 shadow-2xl p-8 flex flex-col justify-center items-center text-center"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        >
          <div className="absolute inset-0 bg-dark/90" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
            <p className="text-slate-300 mb-6 text-sm">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                title="View Code"
              >
                <Github size={20} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors text-white shadow-lg shadow-primary/30"
                title="View Live Site"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'api'>('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative z-10 bg-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-accent font-medium mb-2">PORTFOLIO</h3>
            <h2 className="text-4xl font-bold font-heading">Featured Works</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-2 mt-6 md:mt-0 bg-white/5 p-1 rounded-lg backdrop-blur-sm border border-white/10"
          >
            {['all', 'web', 'api'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${filter === f
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
