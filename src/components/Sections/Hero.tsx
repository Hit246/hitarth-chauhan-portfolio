import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="order-2 lg:order-1 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
              Available to get Hired
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 drop-shadow-lg"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent filter drop-shadow-none">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 drop-shadow-md"
          >
            {PERSONAL_INFO.role}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
            >
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile Image with 3D Card Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center relative z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-12 shadow-2xl">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/400/400?grayscale";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Full Stack Developer</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-xl"
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-20 h-16 bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-xl p-2"
            >
              <span className="text-xs text-slate-400">Exp.</span>
              <span className="font-bold text-accent">{PERSONAL_INFO.about.experience} Years</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500 z-10"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;