import Image from "next/image";

interface Experience {
  title: string;
  company: string;
  logo: string;
  period: string;
  responsibilities: string[];
  tags: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

export default function WorkExperienceSection({ experiences }: WorkExperienceProps) {
  return (
    <section className="py-16" id="experience">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Work Experience</h2>
        <p className="text-muted-foreground text-sm">My professional journey</p>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border/60 hidden md:block" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 group">
              {/* Timeline dot + logo */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-border/60 bg-muted group-hover:border-blue-500/30 transition-colors duration-300 z-10">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6 group-hover:border-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/5 transition-all duration-300">
                {/* Mobile logo */}
                <div className="flex md:hidden mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border/60 bg-muted">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="font-bold text-base">{exp.title}</h3>
                    <p className="text-blue-500 font-medium text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium whitespace-nowrap h-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-muted-foreground text-sm mb-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-blue-500 mt-1 flex-shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}