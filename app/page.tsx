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
        <div className="pt-28 pb-4">
          <h1 className="text-4xl font-extrabold">Welcome to the Page</h1>
          <p className="text-muted-foreground mt-2">
            This content is unique content for introduce my self.
          </p>
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
