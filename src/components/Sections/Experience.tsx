import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award } from 'lucide-react';
import { EXPERIENCES } from '../../constants';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-28 px-6 bg-dark relative z-10 overflow-hidden">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            JOURNEY & LEADERSHIP
          </p>
          <h2 className="text-5xl font-bold text-white font-heading">
            Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={ref} className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-16 py-4">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker */}
              <span className="absolute -left-[45px] md:-left-[61px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-dark border border-primary text-primary shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300 z-10">
                <Award size={16} />
              </span>

              {/* Glassmorphic Card */}
              <div className="p-6 md:p-8 rounded-3xl border border-white/10 glass-card bg-[#161615]/70 hover:border-primary/30 transition-all duration-300 relative hover:shadow-[0_0_30px_rgba(0,245,160,0.05)]">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 font-heading">
                      {exp.role}
                    </h3>
                    <p className="text-primary/90 font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start md:self-center">
                    <Calendar size={14} className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300 group-hover:border-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
