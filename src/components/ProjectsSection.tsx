import { ArrowUpRight } from "lucide-react";

import { AnimatedTitles } from "./AnimatedTitles";
import { Button } from "./Button";
import { Project } from "./Project";

export function ProjectsSection() {
  return (
    <section className="overflow-hidden bg-radial-gradient bg-gray-950 flex flex-col items-center gap-20 desktop:py-[100px] mobile:py-16 desktop:px-[100px] mobile:px-4">
      <div className="flex desktop:flex-row mobile:flex-col w-full items-center justify-between gap-6">
        <AnimatedTitles className="desktop:text-left mobile:text-center">
          Projetos Recentes
        </AnimatedTitles>
        <div className="flex flex-col desktop:items-start mobile:items-center gap-4 desktop:max-w-[40%]">
          <p className="text-gray-400 desktop:text-xl mobile:text-base desktop:text-left mobile:text-center font-normal">
            Aqui estão alguns projetos selecionados que mostram minha paixão por criar experiências, 
            aprender novas tecnologias e elevar o desenvolvimento front-end a um novo nível. Se precisar ver mais, sinta-se 
            a vontade para acessar o meu github.
          </p>
          <Button name="Acessar Github" showIcon={true} icon={<ArrowUpRight />} anchor="https://github.com/CleiltonRocha/desafios-bora-codar" />
        </div>
      </div>
      <Project />
    </section>
  );
}
