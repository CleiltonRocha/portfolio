import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { Cursor } from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <div id="smooth-content">
        <HeroSection />
        <ProjectsSection />
        <AboutMeSection />
        <SkillsSection />
      </div>
    </>
  );
}
