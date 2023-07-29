"use client"
import { useState, useEffect } from 'react';
import { Technologies } from './Technologies';
import { Tags } from './Tags';
import { Heart } from 'lucide-react'
import { ImageProject } from './ImageProject';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }

export function Project() {

  const [repositories, setRepositories] = useState<Repository[]>([])
  const excludedRepositories = ['CleiltonRocha', 'gastoo', 'portfolio'];

  useEffect(() => {
    async function getRepositories () {
      const response = await fetch('https://api.github.com/users/CleiltonRocha/repos')
      const repositories = await response.json();
      setRepositories(repositories)
    }
    getRepositories();
  }, [])

  let counter = 1;

  return (
    <div className="flex flex-col items-center gap-8 justify-start w-full">
      {
        repositories.filter(repository => !excludedRepositories.includes(repository.name))
        .map(repository => {
          return(
            <a href={repository.html_url} key={repository.id} className="w-full sticky top-0">
                <div className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col-reverse gap-6 bg-blackpearl-950 w-full h-screen sticky card-projects">
                  <div className="flex flex-col items-start justify-center gap-12 desktop:pl-16 mobile:p-4">
                    <h1 className="text-zinc-50 desktop:text-2xl mobile:text-3xl font-semibold">{counter}</h1>
                      <Tags repositoryName={repository.name}/>
                    <div className="flex flex-col gap-6">
                      <h3 className="text-zinc-50 desktop:text-5xl mobile:text-3xl font-semibold leading-tight tracking-tighter">{formatRepositoryName(repository.name)}</h3>
                      <p className="text-gray-700 font-medium leading-tight desktop:text-2xl max-w-[95%] mobile:text-base">{repository.description}</p>
                    </div>
                    <div className="flex flex-col gap-6 mobile:pb-10">
                      <h4 className="text-zinc-50 text-2xl font-semibold leading-tight tracking-tighter">Tecnologias</h4>
                      <div className="flex flex-row gap-4">
                          <Technologies repositoryName={repository.name} />
                      </div>
                    </div>
                  </div>
                  <ImageProject projectName={repository.name } />
                </div>
                {counter = counter + 1}
            </a>
          )
        })
      }
      <a href="https://dribbble.com/shots/21866602-UI-Design-Loctraz-website" target="_blank" className="w-full sticky top-0">
        <div className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col-reverse gap-6 bg-blackpearl-950 w-full h-screen sticky card-projects">
          <div className="flex flex-col items-start justify-center gap-12 desktop:pl-16 mobile:p-4">
            <h1 className="text-zinc-50 desktop:text-2xl mobile:text-3xl font-semibold">{counter}</h1>
              <Tags tagName="Design"/>
            <div className="flex flex-col gap-6">
              <h3 className="text-zinc-50 desktop:text-5xl mobile:text-3xl font-semibold leading-tight tracking-tighter">Loctraz Website</h3>
              <p className="text-gray-700 font-medium leading-tight desktop:text-2xl mobile:text-base max-w-[95%] mobile:pb-10">
                Apresento com orgulho meu projeto de UI para a empresa Loctraz, desenvolvido no Figma. Com layouts criativos
                e intuitivos, a interface é cuidadosamente elaborada para refletir a identidade e valores da Loctraz, trazendo
                uma experiência visualmente atraente e envolvente, entregando aos usuários uma jornada excepcional!
              </p>
            </div>
          </div>
          <ImageProject projectName="loctraz-ui" />
        </div>
        {counter = counter + 1}
      </a>
      <a href="#" target="_blank" className="w-full sticky top-0">
        <div className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col-reverse gap-6 bg-blackpearl-950 w-full h-screen sticky card-projects">
          <div className="flex flex-col items-start justify-center gap-12 desktop:pl-16 mobile:p-4">
            <h1 className="text-zinc-50 desktop:text-2xl mobile:text-3xl font-semibold">{counter}</h1>
              <Tags tagName="Design"/>
            <div className="flex flex-col gap-6">
              <h3 className="text-zinc-50 desktop:text-5xl mobile:text-3xl font-semibold leading-tight tracking-tighter">Hero Section Design</h3>
              <p className="text-gray-700 font-medium leading-tight desktop:text-2xl mobile:text-base desktop:max-w-[95%] mobile:pb-10">
                Desenvolvi uma interface de estudos para uma clínica médica que destaca a maravilha do design! Com um visual
                envolvente e funcional, os profissionais de saúde desfrutarão de uma experiência de aprendizado única e 
                inspiradora. 
              </p>
              {/* <div className="flex gap-3">
                <Heart size={24} fill="#e11d48"/>
                <h6 className="text-zinc-50 font-semibold">Curtido por <span className="text-gray-600">Gilberto Prado</span></h6>
              </div> */}
            </div>
          </div>
          <div className="w-full bg-gray-700 h-full">
            <ImageProject projectName="hero-section-design" />
          </div>
        </div>
        {counter = counter + 1}
      </a>
    </div>
  )
}

function formatRepositoryName(name: string): string {
  const formattedName = name.replace(/-/g, ' ');
  const capitalizedWords = formattedName.split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1));

  return capitalizedWords.join(' ');
}