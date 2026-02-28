"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  tags: string[];
  githubUrl: string;
  isPrivate: boolean;
  liveUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function MyProjectSection({ projects }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter, projects]);

  const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div className="relative w-full h-full">
        {/* Skeleton shimmer */}
        {isLoading && (
          <div className="justify-items-center">
            <div className="absolute inset-0 rounded-lg bg-muted animate-pulse" />
            <p className="text-white">Load Image ... </p>
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-contain rounded-lg group-hover:scale-105 transition-all duration-500 ${isLoading ? "opacity-0" : "opacity-100"
            }`}
          unoptimized
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    );
  };

  return (
    <section className="py-16" id="projects">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Projects</h2>
        <p className="text-muted-foreground text-sm">Things I&apos;ve built</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${activeFilter === tag
              ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
              : "bg-transparent text-muted-foreground border-border/60 hover:border-blue-500/40 hover:text-foreground"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          No projects found for &quot;{activeFilter}&quot;
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
          {filtered.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Project Image */}
              <div
                className="relative w-full h-36 md:h-48 flex items-center justify-center p-6 overflow-hidden"
                style={{ backgroundColor: project.bgColor }}
              >
                <ProjectImage src={project.image} alt={project.title} />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-bold text-base mb-1.5">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="hidden md:flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => setActiveFilter(tag)}
                      className="px-2.5 py-0.5 rounded-full text-xs border border-border/50 text-muted-foreground hover:border-blue-500/40 hover:text-blue-500 cursor-pointer transition-colors duration-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-1 border-t border-border/40">
                  <div className="pt-3">
                    {project.isPrivate ? (
                      <span className="flex items-center gap-1.5 text-muted-foreground text-xs cursor-not-allowed opacity-50 select-none">
                        <Lock size={13} />
                        Private Repository
                      </span>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-muted-foreground text-xs hover:text-foreground transition-colors"
                      >
                        <Github size={13} />
                        Repository
                      </a>
                    )}
                  </div>

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <div className="pt-3 ml-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-blue-500 text-xs font-semibold hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}