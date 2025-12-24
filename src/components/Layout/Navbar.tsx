import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 glass-card border-b border-white/10' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="relative z-50 group">
            <span className="text-2xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-primary transition-all duration-500">
              HC.
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={PERSONAL_INFO.resume}
              className="px-5 py-2 rounded-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center space-y-8"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-slate-300 hover:text-white hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
               href={PERSONAL_INFO.resume}
               onClick={() => setIsOpen(false)}
               className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
            >
              Resume
            </a>
            
            <div className="flex space-x-6 mt-8">
              <a href={PERSONAL_INFO.social.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href={PERSONAL_INFO.social.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
