"use client"
import { GithubIcon, InstagramIcon } from "lucide-react";
import { LinkedinPlainIcon } from "react-devicons";
import { AnimatedTitles } from "./AnimatedTitles";
import { useEffect } from "react";

export function HeroSection() {

  useEffect(() => {
    const paragraph = document.querySelector('.paragraph-animated') as HTMLElement

    setTimeout(() => {
      paragraph!.classList.add('animate-reveal')
    }, 2000); 
  }, []);
  
  return (
    <section className="h-screen w-full flex flex-col items-start justify-center bg-[url('../assets/bg-hero.jpg')] bg-cover bg-center bg-no-repeat px-[100px]">
      <div className="flex items-center justify-start desktop:gap-6 mobile:gap-8 relative">
        <div className="flex flex-col items-start mobile:gap-2 desktop:gap-2 desktop:mt-16">
          <AnimatedTitles>
            <span className="text-gray-300">UI Designer</span> and<br /> <span className="text-gray-300">Front-end</span> Developer
          </AnimatedTitles>
          <p className="paragraph-animated text-left font-medium text-gray-600 mobile:max-w-[450px] mobile:text-xl desktop:max-w-[60%] desktop:text-2xl">
            Olá! Sou Cleilton Rocha! Eu transformo ideias em interfaces intuitivas e crio experiências de usuário incríveis.
          </p>
        </div>
      </div>
      <div className="mt-10 flex items-start justify-start gap-3">
        <a href="https://www.instagram.com/uidesign.cr/" aria-label="Link para Instagram">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 transition-all hover:bg-gray-700">
            <InstagramIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/cleilton-rocha/" aria-label="Link para Linkedin">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 transition-all hover:bg-gray-700">
            <LinkedinPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
        <a href="https://github.com/CleiltonRocha" aria-label="Link para Github" target="_blank">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 transition-all hover:bg-gray-700">
            <GithubIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
      </div>
    </section>
  );
}
