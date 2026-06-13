import { ReactNode } from 'react';

export interface Project {
  title: string;

  description: string;

  technologies: string[];

  category: 'web' | 'api';

  image: string;

  github: string;

  live: string;

  featured: boolean;

  badge?: string;

  buttonText?: string;

  gradient?: string;

  githubStyle?: string;
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

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

