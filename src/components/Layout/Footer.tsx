import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
              Hitarth Chauhan
            </h2>
            <p className="text-slate-400 max-w-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex space-x-6">
            <SocialLink href={PERSONAL_INFO.social.github} icon={<Github size={20} />} />
            <SocialLink href={PERSONAL_INFO.social.linkedin} icon={<Linkedin size={20} />} />
            <SocialLink href={PERSONAL_INFO.social.instagram} icon={<Instagram size={20} />} />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Hitarth Chauhan. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-500 mx-1 fill-red-500" /> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;
