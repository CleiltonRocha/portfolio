import Image from "next/image";

import { Navbar } from "./Navbar";

import profileRounded from "../assets/profile-rounded.png";;

import { GithubIcon, InstagramIcon } from "lucide-react";
import { LinkedinPlainIcon } from "react-devicons";

export function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-[url('../assets/bg-hero.svg')] bg-contain bg-center bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-center justify-center desktop:gap-6 mobile:gap-8">
        <div className="flex flex-col items-center mobile:gap-2 mobile:px-6 desktop:gap-2">
          <Image
            src={profileRounded}
            alt="Profile Image"
            className="mobile:w-18 mobile:h-18 border-4 border-blackpearl-950 ring-2 ring-green rounded-full"
            width={56}
            height={56}
          />
          <h1 className="animate-fade-in-down text-zinc-100 text-center font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm">
            UI Designer <span className="text-green">and</span> <br /> Front-end Developer
          </h1>
        </div>
        <p className="animate-fade-in-down text-center font-medium text-gray-600 mobile:max-w-[450px] mobile:px-4 mobile:text-xl desktop:max-w-[60%] desktop:text-2xl">
          Olá! Sou Cleilton Rocha! Eu transformo ideias em interfaces intuitivas e crio experiências de usuário incríveis.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3">
        <a href="https://www.instagram.com/uidesign.cr/" aria-aria-label="Link para Instagram">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 transition-all hover:bg-gray-700">
            <InstagramIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/cleilton-rocha/" aria-aria-label="Link para Linkedin">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 transition-all hover:bg-gray-700">
            <LinkedinPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
        <a href="https://github.com/CleiltonRocha" aria-aria-label="Link para Github" target="_blank">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 transition-all hover:bg-gray-700">
            <GithubIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
      </div>
    </section>
  );
}
