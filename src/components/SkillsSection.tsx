import { AnimatedTitles } from "./AnimatedTitles";
import { CardSkills } from "./CardSkills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mt-36 bg-[url('../assets/bg-skills.png')] bg-contain bg-center bg-no-repeat mobile:px-4 desktop:h-screen"
    >
      <h1 className="animate-fade-in-down text-zinc-100 text-center font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm">
        Hard Skills
      </h1>
      <div className="mt-20">
        <div className="flex h-full w-full items-center justify-center gap-8 mobile:flex-col desktop:flex-row">
          <div className="flex flex-col gap-8 mobile:items-center mobile:justify-center">
            <CardSkills
              title="ReactJS"
              icon="react"
            />
            <CardSkills title="PHP" icon="php" />
          </div>

          <div className="flex flex-col gap-8 mobile:items-center mobile:justify-center">
            <CardSkills
              title="React Native"
              icon="react"
            />
            <CardSkills
              title="TailwindCSS"
              icon="tailwind"
            />
            <CardSkills
              title="TypeScript"
              icon="typeScript"
            />
          </div>

          <div className="flex flex-col gap-8 mobile:items-center mobile:justify-center">
            <CardSkills
              title="NextJS"
              icon="next"
            />
            <CardSkills
              title="Bootstrap"
              icon="bootstrap"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
