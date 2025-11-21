export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  achievements: string[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  category: 'ml' | 'analytics' | 'research';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}