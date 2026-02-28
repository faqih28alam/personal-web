import content from "@/data/content.json";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import MyProjectSection from "@/components/MyProjectSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar personal={content.personal} />
      <main className="container mx-auto px-4 max-w-6xl">
        <div className="pt-28 pb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold mb-4">
            Portfolio
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            {content.personal.name}
          </h1>
          <h2 className="text-lg font-semibold text-muted-foreground">
            {content.personal.title}
          </h2>
        </div>
        <AboutSection personal={content.personal} />
        <TechStackSection techStack={content.techStack} />
        <WorkExperienceSection experiences={content.experiences} />
        <MyProjectSection projects={content.projects} />
        <CTASection personal={content.personal} />
      </main>
      <Footer personal={content.personal} />
    </>
  );
}