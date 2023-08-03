import { AnimatedTitles } from "./AnimatedTitles";
import { Project } from "./Project";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-20 items-center mt-36">
      <div className="w-full flex items-center justify-center">
        <AnimatedTitles text="Projetos Recentes"/>
      </div>
      <Project />
    </section>
  )
};
