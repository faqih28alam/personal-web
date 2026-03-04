"use client";

import Image from "next/image";
import { MapPin, FileText, Github, Linkedin, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface AboutProps {
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
    available: boolean;
    availableText: string;
    whatsapp: string;
    cvUrl: string;
    photo: string;
    github: string;
    linkedin: string;
    linkHub: string;
    linkHubFallback: string;
  };
}

export default function AboutSection({ personal }: AboutProps) {
  const [isLinkValid, setIsLinkValid] = useState(true);

  useEffect(() => {
    const checkLink = async () => {
      try {
        // Call your own internal API instead of the external link directly
        const res = await fetch(`/api/check-link?url=${encodeURIComponent(personal.linkHub)}`);
        const data = await res.json();
        setIsLinkValid(data.valid);
      } catch (error) {
        setIsLinkValid(false);
      }
    };

    if (personal.linkHub) checkLink();
  }, [personal.linkHub]);

  return (
    <section className="py-20 mt-4 relative">
      {/* Subtle background glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-16 relative">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Glow ring behind photo */}
            <div className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[360px] inset-0 md:inset-0 rounded-full md:rounded-2xl bg-blue-500/20 md:bg-blue-500/20 blur-xl md:blur-xl scale-105 md:scale-105" />
            <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[360px] rounded-full md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src={personal.photo}
                alt={personal.name}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          {personal.available && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dot-pulse" />
              {personal.availableText}
            </div>
          )}

          <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
            {personal.bio}
          </p>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} className="text-blue-500" />
            <span>{personal.location}</span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Let&apos;s Talk
              </Button>
            </a>
            <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full px-6 gap-2 border-border/60 hover:border-blue-500/50 hover:text-blue-500 transition-all duration-200">
                <FileText size={16} />
                Download CV
              </Button>
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={isLinkValid ? personal.linkHub : personal.linkHubFallback}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                title="All my links"
              >
                <LinkIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}