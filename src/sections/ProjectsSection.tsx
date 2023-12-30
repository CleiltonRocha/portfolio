import { AnimatedTitles } from '../components/AnimatedTitles'
import { Project } from '../components/Project'

export function ProjectsSection() {
  return (
    <section className="flex flex-col items-center gap-20 overflow-hidden mobile:px-4 mobile:py-16 desktop:px-[100px] desktop:py-[100px]">
      <div className="flex w-full items-center justify-between gap-6 mobile:flex-col desktop:flex-row">
        <AnimatedTitles className="mobile:text-center desktop:text-left">
          Projetos Recentes
        </AnimatedTitles>
        <div className="flex flex-col gap-4 mobile:items-center desktop:max-w-[40%] desktop:items-start">
          <p className="font-normal text-gray-400 mobile:text-center mobile:text-base desktop:text-left desktop:text-xl">
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
