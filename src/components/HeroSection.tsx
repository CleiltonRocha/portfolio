import Image from "next/image";

import { AnimatedTitles } from "./AnimatedTitles";
import { Navbar } from "./Navbar";

import blurHeroSectionTopRight from "../assets/blur-hero-section-top-right.svg";
import blurHeroSectionBottomLeft from "../assets/blur-hero-section-bottom-left.svg";
import profileRounded from "../assets/profile-rounded.png";
import { GithubIcon, InstagramIcon } from "lucide-react";
import { LinkedinPlainIcon } from "react-devicons";

export function HeroSection() {
  return (
    <section className="h-screen w-full items-center justify-center">
      <Image
        src={blurHeroSectionTopRight}
        alt="Radial Gradient"
        width={800}
        height={800}
        className="-z-1 pointer-events-none absolute right-0 top-0 animate-fade-in-down"
      />
      <Image
        src={blurHeroSectionBottomLeft}
        alt="Radial Gradient"
        width={800}
        height={800}
        className="-bottom-90 -z-1 pointer-events-none absolute left-0 animate-fade-in-down"
      />
      <Navbar />
      <div className="mt-40 flex flex-col items-center justify-center desktop:gap-6">
        <div className="flex flex-col items-center mobile:gap-2 mobile:px-6 desktop:gap-2">
          <Image
            src={profileRounded}
            alt="Profile Image"
            className="mobile:w-18 mobile:h-18"
            width={56}
            height={56}
          />
          <AnimatedTitles>
            UI Designer and <br /> Front-end Developer
          </AnimatedTitles>
        </div>
        <p className="animate-fade-in-down text-center font-medium text-gray-700 mobile:max-w-[450px] mobile:px-4 mobile:text-xl desktop:max-w-[50%] desktop:text-2xl">
          Olá! Sou Cleilton Rocha! Eu transformo ideias em interfaces intuitivas
          e crio experiências de usuário incríveis.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3">
        <a href="#">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700 transition-all hover:bg-transparent">
            <InstagramIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
        <a href="#">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700 transition-all hover:bg-transparent">
            <LinkedinPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
        <a href="#">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700 transition-all hover:bg-transparent">
            <GithubIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </a>
      </div>
    </section>
  );
}
