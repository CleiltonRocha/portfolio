import { AnimatedTitles } from "./AnimatedTitles";
import { CardSkills } from "./CardSkills";


export function SkillsSection() {
  return (
    <section id="skills" className="mt-36 desktop:h-screen bg-[url('../assets/bg-skills.png')] bg-no-repeat bg-contain bg-center mobile:px-4">
        <AnimatedTitles>
            Hard Skills
        </AnimatedTitles>
        <div className="mt-20">
            <div className="flex desktop:flex-row mobile:flex-col h-full w-full items-center justify-center gap-8">
                <div className="flex flex-col gap-8 mobile:items-center mobile:justify-center">
                    <CardSkills title="ReactJS" description="Admiro muito esse cara!" icon="react"/>
                    <CardSkills title="PHP" description="Um amigo diário" icon="php"/>
                </div>

                <div className="flex flex-col gap-8 mobile:items-center mobile:justify-center">
                    <CardSkills title="React Native" description="Este é Incrível!📱" icon="react"/>
                    <CardSkills title="TailwindCSS" description="Uma das melhores ferramentas que já conheci!" icon="tailwind"/>
                    <CardSkills title="TypeScript" description="This is magic! ✨" icon="typeScript"/>
                </div>

                <div className="flex flex-col gap-8 mobile:items-center mobile:justify-center">
                    <CardSkills title="NextJS" description="Todos os dias aprendendo mais sobre esse cara." icon="next"/>
                    <CardSkills title="Bootstrap" description="Um amigo de longa data." icon="bootstrap"/>
                </div>
            </div>
        </div>
    </section>
  )
};
