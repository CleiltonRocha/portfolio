import { Project } from '../components/Project'

export function ProjectsSection() {
  return (
    <section className="flex flex-col items-center gap-20 overflow-hidden mobile:px-4 mobile:py-16 desktop:px-[100px] desktop:py-[100px]">
      <div className="flex w-full flex-col items-center gap-6">
        <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-6xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Projetos Recentes
        </h2>
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
