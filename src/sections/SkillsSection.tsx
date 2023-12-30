import {
  AdonisjsOriginalIcon,
  AngularjsPlainIcon,
  BootstrapPlainIcon,
  CakephpPlainIcon,
  MysqlPlainIcon,
  NextjsOriginalIcon,
  NodejsPlainIcon,
  PostgresqlPlainIcon,
  ReactOriginalIcon,
  SassOriginalIcon,
  TailwindcssPlainIcon,
  TypescriptPlainIcon,
} from 'react-devicons'

import { AnimatedTitles } from '../components/AnimatedTitles'
import { TechnologyCard } from '../components/TechnologyCard'

export function SkillsSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 py-20 mobile:px-4 desktop:px-16">
      <AnimatedTitles>Hard Skills</AnimatedTitles>
      <p className="w-full font-normal text-gray-400 mobile:max-w-[90%] mobile:text-center mobile:text-xl desktop:max-w-[60%] desktop:text-center desktop:text-2xl">
        Algumas tecnologias com que trabalho atualmente e tecnologias em que
        possuo conhecimento.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        <TechnologyCard
          name="NodeJS"
          icon={<NodejsPlainIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="AdonisJS"
          icon={<AdonisjsOriginalIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="CakePHP"
          icon={<CakephpPlainIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="TypeScript"
          icon={<TypescriptPlainIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="NextJS"
          icon={<NextjsOriginalIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="React/ReactNative"
          icon={<ReactOriginalIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="Angular"
          icon={<AngularjsPlainIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="TailwindCSS"
          icon={<TailwindcssPlainIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="Bootstrap"
          icon={<BootstrapPlainIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="Sass"
          icon={<SassOriginalIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="PostgreSQL"
          icon={<PostgresqlPlainIcon color="#ffffff" size="40" />}
        />
        <TechnologyCard
          name="MySQL"
          icon={<MysqlPlainIcon color="#ffffff" size="40" />}
        />
      </div>
    </section>
  )
}
