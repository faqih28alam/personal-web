import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

export default function WorkExperienceSection({
  experiences,
}: WorkExperienceProps) {
  return (
    <section className="py-16" id="experience">
      <h2 className="text-2xl font-bold mb-8">Work Experiences:</h2>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden border bg-muted">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h5 className="font-bold text-base">{exp.title}</h5>
                      <p className="text-green-600 dark:text-green-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground text-sm whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mb-4">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full text-xs px-3"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
