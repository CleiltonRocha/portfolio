import { AnimatedTitles } from "./AnimatedTitles";
import { Project } from "./Project";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-36 flex flex-col items-center gap-20">
      <div className="flex w-full items-center justify-center">
        <AnimatedTitles>Projetos Recentes</AnimatedTitles>
      </div>
      <Project />
    </section>
  );
}
