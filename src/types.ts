import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'web' | 'api' | 'mobile';
  image: string;
  github: string;
  live: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
