import Image from "next/image";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section className="py-16" id="projects">
      <h2 className="text-2xl font-bold mb-8">My Projects:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Project Image */}
            <div
              className="relative w-full h-48 flex items-center justify-center p-6"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  unoptimized // allow GIFs to animate
                />
              </div>
            </div>

            <CardContent className="p-5">
              <h5 className="font-bold text-base mb-1">{project.title}</h5>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full text-xs px-3"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">

                {project.isPrivate ? (
                  <>
                    <Lock size={14} />
                    <span>Private Repository</span>
                  </>
                ) : (
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    <>
                      <Github size={14} />
                      <span>Repositoryy</span>
                    </>
                  </a>
                )}

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
