import { AnimatedTitles } from "./AnimatedTitles";
import { Project } from "./Project";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-36 flex flex-col items-center gap-20">
      <div className="flex w-full items-center justify-center">
        <h1 className="animate-fade-in-down text-zinc-100 text-center font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm">
          Projetos Recentes
        </h1>
      </div>
      <Project />
    </section>
  );
}
