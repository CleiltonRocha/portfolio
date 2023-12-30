'use client'
import { useEffect } from 'react'
import Image from 'next/image'

import { AnimatedTitles } from './AnimatedTitles'

import { GithubIcon, Linkedin, Dribbble } from 'lucide-react'

import profileRounded from '@/assets/profile-rounded.png'
import { InfiniteScroll } from './InfiniteScroll'

export function HeroSection() {
  useEffect(() => {
    const paragraph = document.querySelector(
      '.paragraph-animated',
    ) as HTMLElement
    const image = document.querySelector('.profile-rounded') as HTMLElement

    setTimeout(() => {
      paragraph.classList.add('animate-reveal')
      image.classList.add('animate-reveal')
    }, 2000)
  }, [])

  return (
    <section className="mobile:pb-16 h-screen w-full flex flex-col desktop:items-center mobile:items-center justify-center desktop:px-10 mobile:px-4 relative">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="flex items-center justify-center desktop:gap-6 mobile:gap-8 relative">
        <div className="flex flex-col desktop:items-center mobile:items-center mobile:gap-2 desktop:gap-2 ">
          <Image
            src={profileRounded}
            alt="Imagem Cleilton Rocha Arredondada"
            className="profile-rounded filter grayscale"
            width={80}
            height={80}
          />
          <AnimatedTitles className="desktop:text-center mobile:text-center">
            <span className="">UI Designer</span> &<br />
            <span className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Front-end Developer
            </span>
          </AnimatedTitles>
          <p className="mt-6 paragraph-animated desktop:text-center mobile:text-center mobile:max-w-[90%] text-xl desktop:max-w-[60%] text-gray-300">
            Olá! Sou Cleilton Rocha! Eu transformo ideias em interfaces
            intuitivas e crio experiências de usuário incríveis.
          </p>
        </div>
      </div>
      <div className="mt-16 flex items-start justify-start gap-4">
        {/* <a
          href="https://www.linkedin.com/in/cleilton-rocha/"
          aria-label="Link para Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-fit h-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full">
            <div className="flex items-center justify-center bg-gradient-to-b from-neutral-950 to-gray-950/40 h-[60px] w-[60px]">
              <Linkedin size={24} className="text-slate-300" />
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/cleilton-rocha/"
          aria-label="Link para Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-fit h-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full">
            <div className="flex items-center justify-center bg-gradient-to-b from-neutral-950 to-gray-950/40 h-[60px] w-[60px]">
              <GithubIcon size={24} className="text-slate-300" />
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/cleilton-rocha/"
          aria-label="Link para Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-fit h-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full">
            <div className="flex items-center justify-center bg-gradient-to-b from-neutral-950 to-gray-950/40 h-[60px] w-[60px]">
              <Dribbble size={24} className="text-slate-300" />
            </div>
          </div>
        </a> */}
      </div>
      <InfiniteScroll />
    </section>
  )
}
