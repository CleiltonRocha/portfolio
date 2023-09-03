import Image from 'next/image';

import { AnimatedTitles } from "./AnimatedTitles";
import { Navbar } from "./Navbar";

import blurHeroSectionTopRight from '../assets/blur-hero-section-top-right.svg'
import blurHeroSectionBottomLeft from '../assets/blur-hero-section-bottom-left.svg'
import profileRounded from '../assets/profile-rounded.png'
import { GithubIcon, InstagramIcon } from 'lucide-react';
import { LinkedinPlainIcon } from 'react-devicons';

export function HeroSection() {
  return (
    <section className="w-full items-center justify-center">
        <Image src={blurHeroSectionTopRight} alt="Radial Gradient" width={800} height={800} className="pointer-events-none absolute top-0 right-0 -z-1 animate-fade-in-down"/>
        <Image src={blurHeroSectionBottomLeft} alt="Radial Gradient" width={800} height={800} className="pointer-events-none absolute -bottom-90 left-0 -z-1 animate-fade-in-down"/>
        <Navbar />
        <div className="mt-40 flex flex-col items-center justify-center desktop:gap-6">
          <div className="flex flex-col items-center desktop:gap-2 mobile:gap-2 mobile:px-6">
            <Image src={profileRounded} alt="Profile Image" className="mobile:w-18 mobile:h-18" width={56} height={56}/>
            <AnimatedTitles>
              UI Designer and <br /> Front-end Developer
            </AnimatedTitles>
          </div>
          <p className="desktop:max-w-[50%] mobile:max-w-[450px] mobile:px-4 text-center desktop:text-2xl mobile:text-xl text-gray-700 font-medium animate-fade-in-down">
            Olá! Sou Cleilton Rocha! Eu transformo ideias em interfaces intuitivas e crio experiências de usuário incríveis.
          </p>
        </div>
        <div className="flex gap-3 mt-10 items-center justify-center">
          <a href="#">
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 hover:bg-transparent transition-all">
              <InstagramIcon size="1.5rem" color="#b0b6c9"/>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 hover:bg-transparent transition-all">
              <LinkedinPlainIcon size="1.5rem" color="#b0b6c9"/>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 hover:bg-transparent transition-all">
              <GithubIcon size="1.5rem" color="#b0b6c9"/>
            </div>
          </a>
        </div>
      </section>
  )
};
