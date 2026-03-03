import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  featured: boolean;
  live: string;
  github: string;
  status: "published" | "draft";
  color: string;
  client: string;
  year: string;
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "1",
    title: "AurisFi — Fintech Platform",
    description:
      "A full-scale fintech dashboard with real-time portfolio tracking, AI-driven insights, multi-currency support, and enterprise-grade security infrastructure.",
    image: "https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcCUyMGRhc2hib2FyZCUyMG1vZGVybiUyMFVJJTIwZGFya3xlbnwxfHx8fDE3NzI1NzQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Web App",
    featured: true,
    live: "#",
    github: "",
    status: "published",
    color: "#D4AF37",
    client: "AurisFi Inc.",
    year: "2024",
  },
  {
    id: "2",
    title: "LuxHaven — Real Estate",
    description:
      "Premium real estate marketplace featuring 3D property tours, AI-powered property matching, seamless agent-buyer communication, and legal document automation.",
    image: "https://images.unsplash.com/photo-1740842311434-522bb411af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZSUyMGludGVyZmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzI1NzQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Ruby on Rails", "Stripe", "AWS"],
    category: "Web App",
    featured: true,
    live: "#",
    github: "",
    status: "published",
    color: "#C0C0C0",
    client: "LuxHaven Group",
    year: "2024",
  },
  {
    id: "3",
    title: "Velox — SaaS Platform",
    description:
      "Enterprise analytics and workflow automation SaaS with drag-and-drop pipeline builder, custom report generation, and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBwbGF0Zm9ybSUyMFNhYVMlMjBkYXJrJTIwVUl8ZW58MXx8fHwxNzcyNTc0NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "Python", "Redis", "Docker"],
    category: "SaaS",
    featured: true,
    live: "#",
    github: "",
    status: "published",
    color: "#D4AF37",
    client: "Velox Systems",
    year: "2023",
  },
  {
    id: "4",
    title: "Kova — Mobile App",
    description:
      "Cross-platform fitness & wellness app with personalized AI coaching, live workout sessions, biometric integrations, and social challenges.",
    image: "https://images.unsplash.com/photo-1627757757997-369fb38812e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWduJTIwc3RhcnR1cHxlbnwxfHx8fDE3NzI1NzQ1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Node.js", "ML Kit", "Firebase"],
    category: "Mobile",
    featured: false,
    live: "#",
    github: "",
    status: "published",
    color: "#C0C0C0",
    client: "Kova Health",
    year: "2023",
  },
  {
    id: "5",
    title: "Nordel — E-Commerce",
    description:
      "High-performance luxury e-commerce platform with immersive product experiences, live inventory, personalised recommendations, and one-click checkout.",
    image: "https://images.unsplash.com/photo-1705234384435-e06172b6d2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjByZXRhaWwlMjBvbmxpbmUlMjBzdG9yZSUyMG1vZGVybiUyMHdlYnNpdGV8ZW58MXx8fHwxNzcyNTc0NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Shopify", "Stripe", "Vercel"],
    category: "E-Commerce",
    featured: false,
    live: "#",
    github: "",
    status: "published",
    color: "#D4AF37",
    client: "Nordel Brands",
    year: "2023",
  },
  {
    id: "6",
    title: "Pinnacle — Corp. Site",
    description:
      "Comprehensive corporate identity and web presence for a global consulting firm — complete with multilingual support, investor portal, and careers platform.",
    image: "https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29ycG9yYXRlJTIwb2ZmaWNlJTIwYXJjaGl0ZWN0dXJlJTIwZGFyayUyMG1vZGVybnxlbnwxfHx8fDE3NzI1NzQ1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Contentful", "i18n", "AWS"],
    category: "Website",
    featured: false,
    live: "#",
    github: "",
    status: "published",
    color: "#C0C0C0",
    client: "Pinnacle Partners",
    year: "2022",
  },
];

interface ProjectsContextType {
  projects: Project[];
  addProject: (p: Omit<Project, "id">) => void;
  updateProject: (id: string, p: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  reorderProjects: (projects: Project[]) => void;
}

const ProjectsContext = createContext<ProjectsContextType | null>(null);

const STORAGE_KEY = "throne_projects";

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_PROJECTS;
    } catch {
      return DEFAULT_PROJECTS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const addProject = (p: Omit<Project, "id">) => {
    const newProject: Project = { ...p, id: Date.now().toString() };
    setProjects((prev) => [newProject, ...prev]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const reorderProjects = (newOrder: Project[]) => {
    setProjects(newOrder);
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, addProject, updateProject, deleteProject, reorderProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used inside ProjectsProvider");
  return ctx;
}
