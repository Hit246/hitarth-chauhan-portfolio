import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Heart, Zap, Coffee, Terminal, Globe } from 'lucide-react';
import { PERSONAL_INFO, FEATURES } from '../../constants';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Text Content */}
          <div>
            <motion.h3 variants={itemVariants} className="text-accent font-medium mb-2">
              ABOUT ME
            </motion.h3>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold font-heading mb-6">
              Transforming Complex Problems into Simple Solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed mb-6">
              {PERSONAL_INFO.about.description}
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed mb-8">
              {PERSONAL_INFO.about.additional}
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-3xl font-bold text-primary mb-1">{PERSONAL_INFO.about.projectsCompleted}</h4>
                <p className="text-sm text-slate-400">Projects Completed</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-3xl font-bold text-accent">{PERSONAL_INFO.about.experience}</h4>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {index === 0 && <Code size={24} />}
                    {index === 1 && <Heart size={24} />}
                    {index === 2 && <Zap size={24} />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
