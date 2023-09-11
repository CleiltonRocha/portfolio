import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
}
