"use client";
import { useState, useEffect } from "react";
import { Technologies } from "./Technologies";
import { Tags } from "./Tags";
import { Heart } from "lucide-react";
import { ImageProject } from "./ImageProject";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function Project() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const excludedRepositories = ["CleiltonRocha", "gastoo", "portfolio", "api-node-study"];

  useEffect(() => {
    async function getRepositories() {
      const response = await fetch(
        "https://api.github.com/users/CleiltonRocha/repos"
      );
      const repositories = await response.json();
      setRepositories(repositories);
    }
    getRepositories();
  }, []);

  let counter = 1;

  return (
    <div className="flex w-full flex-col items-center justify-start gap-8">
      {repositories
        .filter((repository) => !excludedRepositories.includes(repository.name))
        .map((repository) => {
          return (
            <a
              href={repository.html_url}
              key={repository.id}
              className="sticky top-0 w-full"
            >
              <div className="card-projects sticky w-full gap-6 bg-blackpearl-950 mobile:flex mobile:h-full mobile:flex-col-reverse desktop:grid desktop:h-screen desktop:grid-cols-2">
                <div className="flex flex-col items-start justify-center gap-12 mobile:p-4 desktop:pl-16">
                  <h1 className="font-semibold text-zinc-50 mobile:text-3xl desktop:text-2xl">
                    {counter}
                  </h1>
                  <Tags projectName={repository.name} />
                  <div className="flex flex-col gap-6">
                    <h1 className="font-semibold leading-tight tracking-tighter text-zinc-50 mobile:text-3xl desktop:text-5xl">
                      {formatRepositoryName(repository.name)}
                    </h1>
                    <p className="max-w-[95%] font-medium leading-tight text-gray-600 mobile:text-base desktop:text-2xl">
                      {repository.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mobile:pb-10">
                    <h4 className="text-2xl font-semibold leading-tight tracking-tighter text-zinc-50">
                      Tecnologias
                    </h4>
                    <div className="flex flex-row gap-4">
                      <Technologies projectName={repository.name} />
                    </div>
                  </div>
                </div>
                <ImageProject projectName={repository.name} />
              </div>
              {(counter = counter + 1)}
            </a>
          );
        })}
      <a
        href="https://dribbble.com/shots/21866602-UI-Design-Loctraz-website"
        target="_blank"
        className="sticky top-0 w-full"
      >
        <div className="card-projects sticky w-full gap-6 bg-blackpearl-950 mobile:flex mobile:h-full mobile:flex-col-reverse desktop:grid desktop:h-screen desktop:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-12 mobile:p-4 desktop:pl-16">
            <h1 className="font-semibold text-zinc-50 mobile:text-3xl desktop:text-2xl">
              {counter}
            </h1>
            <Tags projectName="Design" />
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold leading-tight tracking-tighter text-zinc-50 mobile:text-3xl desktop:text-5xl">
                Loctraz Website
              </h1>
              <p className="max-w-[95%] font-medium leading-tight text-gray-600 mobile:pb-10 mobile:text-base desktop:text-2xl">
                Apresento com orgulho meu projeto de UI para a empresa Loctraz,
                desenvolvido no Figma. Com layouts criativos e intuitivos, a
                interface é cuidadosamente elaborada para refletir a identidade
                e valores da Loctraz, trazendo uma experiência visualmente
                atraente e envolvente, entregando aos usuários uma jornada
                excepcional!
              </p>
            </div>
          </div>
          <ImageProject projectName="loctraz-ui" />
        </div>
        {(counter = counter + 1)}
      </a>
      <a href="#" target="_blank" className="sticky top-0 w-full">
        <div className="card-projects sticky top-0 w-full gap-6 bg-blackpearl-950 mobile:flex mobile:h-full mobile:flex-col-reverse desktop:grid desktop:h-screen desktop:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-12 mobile:p-4 desktop:pl-16">
            <h1 className="font-semibold text-zinc-50 mobile:text-3xl desktop:text-2xl">
              {counter}
            </h1>
            <Tags projectName="Design" />
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold leading-tight tracking-tighter text-zinc-50 mobile:text-3xl desktop:text-5xl">
                Hero Section Design
              </h1>
              <p className="font-medium leading-tight text-gray-600 mobile:text-base desktop:max-w-[95%] desktop:text-2xl">
                Desenvolvi uma interface de estudos para uma clínica médica que
                destaca a maravilha do design! Com um visual envolvente e
                funcional, os profissionais de saúde desfrutarão de uma
                experiência de aprendizado única e inspiradora.
              </p>
            </div>
            <div className="top-4 flex gap-3">
              <Heart size={24} fill="#e11d48" />
              <h2 className="font-semibold text-xl text-zinc-50">
                Curtido por{" "}
                <span className="text-gray-600">Gilberto Prado</span>
              </h2>
            </div>
          </div>
          <div className="h-full w-full bg-gray-700">
            <ImageProject projectName="hero-section-design" />
          </div>
        </div>
        {(counter = counter + 1)}
      </a>
    </div>
  );
}

function formatRepositoryName(name: string): string {
  const formattedName = name.replace(/-/g, " ");
  const capitalizedWords = formattedName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return capitalizedWords.join(" ");
}
