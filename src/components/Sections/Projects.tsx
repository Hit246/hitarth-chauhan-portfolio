import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-dark/50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] text-cyan-400 mb-3">
            PORTFOLIO
          </p>

          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >
              {/* Card */}
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0b1120]">

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                  {/* Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black/40 backdrop-blur-md z-20 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Featured */}
                  {project.featured && (
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-sm mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        flex-1 h-12 rounded-xl
                        bg-gradient-to-r ${project.gradient}
                        hover:scale-[1.02]
                        transition-all duration-300
                        flex items-center justify-center gap-2
                        text-white font-medium
                        shadow-lg
                      `}
                    >
                      <ExternalLink size={16} />
                      {project.buttonText}
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        w-11 h-11 rounded-xl border
                        transition flex items-center justify-center text-white
                        ${project.githubStyle}
                      `}
                    >
                      <Github size={18} />
                    </a>

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;