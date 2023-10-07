import { CardSkills } from "./CardSkills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mt-36 mobile:px-4 desktop:h-screen px-[100px]"
    >
      <h1 className="animate-fade-in-down text-zinc-100 text-center font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm">
        Hard Skills
      </h1>
      <div className="mt-20 w-full inline-flex flex-nowrap overflow-hidden py-3 relative slider">
        <div className="flex items-center desktop:ml-6 desktop:gap-6 justify-center animate-infinite-scroll-left">
          <CardSkills
            title="ReactJS"
            icon="react"
          />
          <CardSkills
            title="PHP"
            icon="php"
          />
          <CardSkills
            title="React Native"
            icon="react"
          />
          <CardSkills
            title="TailwindCSS"
            icon="tailwind"
          />
        </div>
        <div className="flex items-center justify-center desktop:ml-6 desktop:gap-6 animate-infinite-scroll-left" aria-hidden="true">
          <CardSkills
            title="ReactJS"
            icon="react"
          />
          <CardSkills
            title="PHP"
            icon="php"
          />
          <CardSkills
            title="React Native"
            icon="react"
          />
          <CardSkills
            title="TailwindCSS"
            icon="tailwind"
          />
        </div>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden relative slider mt-3">
        <div className="flex items-center justify-center desktop:gap-6 animate-infinite-scroll-right">
          <CardSkills
            title="Bootstrap"
            icon="bootstrap"
          />
          <CardSkills
            title="NextJS"
            icon="php"
          />
          <CardSkills
            title="Angular"
            icon="angular"
          />
          <CardSkills
            title="TypeScript"
            icon="typescript"
          />
        </div>
        <div className="flex items-center justify-center desktop:ml-6 desktop:gap-6 animate-infinite-scroll-right">
          <CardSkills
            title="Bootstrap"
            icon="bootstrap"
          />
          <CardSkills
            title="NextJS"
            icon="php"
          />
          <CardSkills
            title="Angular"
            icon="angular"
          />
          <CardSkills
            title="TypeScript"
            icon="typescript"
          />
        </div>
      </div>
    </section>

  );
}
