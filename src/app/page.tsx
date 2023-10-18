"use client"
import { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ScrollSmoother.create({
      content: "#smooth-content",
      smooth: 1.5,
      effects: true
    });
  }, [])
  
  return (
      <div id="smooth-content">
        <HeroSection />
        <ProjectsSection />
        <AboutMeSection />
        <SkillsSection />
      </div>
  );
}
