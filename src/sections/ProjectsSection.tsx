import { ArrowUpRight, Tags } from 'lucide-react'

import { AnimatedTitles } from '../components/AnimatedTitles'
import { Button } from '../components/Button'
import { Project } from '../components/Project'

export function ProjectsSection() {
  return (
    <section className="overflow-hidden flex flex-col items-center gap-20 desktop:py-[100px] mobile:py-16 desktop:px-[100px] mobile:px-4">
      <div className="flex desktop:flex-row mobile:flex-col w-full items-center justify-between gap-6">
        <AnimatedTitles className="desktop:text-left mobile:text-center">
          Projetos Recentes
        </AnimatedTitles>
        <div className="flex flex-col desktop:items-start mobile:items-center gap-4 desktop:max-w-[40%]">
          <p className="text-gray-400 desktop:text-xl mobile:text-base desktop:text-left mobile:text-center font-normal">
            Alguns projetos selecionados que mostram minha paixão por criar
            experiências, aprender novas tecnologias e elevar o desenvolvimento
            front-end a um novo nível.
          </p>
        </div>
      </div>
      <Project />
    </section>
  )
}
