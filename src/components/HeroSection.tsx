'use client'
import { useEffect } from 'react'
import Image from 'next/image'

import { AnimatedTitles } from './AnimatedTitles'

import { LinkedinPlainIcon } from 'react-devicons'
import { GithubIcon, InstagramIcon } from 'lucide-react'

import profileRounded from '@/assets/profile-rounded.png'

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
    <section className="bg-[url('../assets/bg-hero.svg')] bg-cover mobile:pb-16 h-screen w-full flex flex-col desktop:items-center mobile:items-center justify-center desktop:px-[100px] mobile:px-4 relative">
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
            <span className="">UI Designer</span> &<br />{' '}
            <span className="bg-gradient-to-r leading-tight from-orange-300 via-purple-300 to-purple-500 inline-block text-transparent bg-clip-text">
              Front-end
            </span>{' '}
            Developer
          </AnimatedTitles>
          <p className="paragraph-animated desktop:text-center mobile:text-center font-normal text-gray-400 mobile:max-w-[90%] mobile:text-xl desktop:max-w-[60%] desktop:text-2xl">
            Olá! Sou Cleilton Rocha! Eu transformo ideias em interfaces
            intuitivas e crio experiências de usuário incríveis.
          </p>
        </div>
      </div>
      <div className="mt-10 flex items-start justify-start gap-3">
        <a
          href="https://www.instagram.com/uidesign.cr/"
          aria-label="Link para Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-50/5 transition-all duration-300 hover:scale-110">
            <InstagramIcon size="1.5rem" color="#ffffff" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/cleilton-rocha/"
          aria-label="Link para Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-50/5 transition-all duration-300 hover:scale-110">
            <LinkedinPlainIcon size="1.5rem" color="#ffffff" />
          </div>
        </a>
        <a
          href="https://github.com/CleiltonRocha"
          aria-label="Link para Github"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-50/5 transition-all duration-300 hover:scale-110">
            <GithubIcon size="1.5rem" color="#ffffff" />
          </div>
        </a>
      </div>
      <div className="w-full h-[100px] bg-gradient-to-t from-black via-black/30 to-transparent absolute bottom-0"></div>
    </section>
  )
}
