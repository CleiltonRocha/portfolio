import Image from 'next/image';

import { AnimatedTitles } from "./AnimatedTitles";
import { Navbar } from "./Navbar";
import { ScreenImage } from "./ScreenImage";

import blurHeroSectionTopRight from '../assets/blur-hero-section-top-right.svg'
import blurHeroSectionBottomLeft from '../assets/blur-hero-section-bottom-left.svg'
import profileRounded from '../assets/profile-rounded.png'


export function HeroSection() {
  return (
    <section className="w-full items-center justify-center">
        <Image src={blurHeroSectionTopRight} alt="Radial Gradient" width={800} height={800} className="pointer-events-none absolute top-0 right-0 -z-1 animate-fade-in-down"/>
        <Image src={blurHeroSectionBottomLeft} alt="Radial Gradient" width={800} height={800} className="pointer-events-none absolute -bottom-90 left-0 -z-1 animate-fade-in-down"/>
        <Navbar />
        <div className="desktop:mt-60 mobile:mt-40 flex flex-col w-full items-center justify-center desktop:gap-20 mobile:gap-10">
          <div className="flex flex-col items-center desktop:gap-20 mobile:gap-2 desktop:text-xxs mobile:text-4xl mobile:px-6">
            <div className="flex flex-row desktop:gap-6 mobile:gap-2 items-center">
              <AnimatedTitles text="UI Designer and"/>
              <Image src={profileRounded} alt="Profile Image" className="mobile:w-18 mobile:h-18" width={56} height={56}/>
            </div>
              <AnimatedTitles text="Front-end Developer"/>
          </div>
          <p className="desktop:max-w-[50%] mobile:max-w-[450px] mobile:px-4 text-center lg:text-4xl mobile:text-xl text-gray-700 tracking-tighter leading-tight font-medium animate-fade-in-down">
            Olá! Sou Cleilton Rocha! Eu transformo ideias em interfaces intuitivas e crio experiências de usuário incríveis.
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-center desktop:mt-20 mobile:mt-20 mobile:px-6 animate-floating">
          <ScreenImage />
        </div>
      </section>
  )
};
