"use client"
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { Cursor } from "@/components/Cursor";
import { Preloader } from "@/components/Preloader";
import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando um tempo de carregamento, você pode ajustar isso de acordo com suas necessidades
    setTimeout(() => {
      setLoading(false);
    }, 2800); // Defina um tempo igual ao tempo do Preloader
  }, []);

  return (

    <>
      <Preloader />
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
