import Image from 'next/image'

import { Briefcase, Book } from "lucide-react";
import { AnimatedTitles } from "./AnimatedTitles";

import ProfileImage from '@/assets/profile-image.png'



export function AboutMeSection() {
  return (
    <section id="aboutme" className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col mobile:gap-6 mt-36 desktop:px-16 mobile:px-6 w-full relative">
        <div className="relative img-with-mark before:animate-rotate desktop:before:bottom-32 desktop:before:right-32 mobile:before:-top-12 mobile:before:right-0">
          <Image src={ProfileImage} alt="Foto de Perfil - Cleilton Rocha" className="sticky desktop:top-10 -z-index-1"/>
        </div>
        <div className="w-full flex flex-col desktop:gap-16 mobile:gap-6 mobile:mt-10 items-start justify-start">
          <AnimatedTitles>
            Sobre mim
          </AnimatedTitles>
          <p className="text-gray-700 font-medium leading-tight desktop:text-2xl mobile:text-base mobile:pb-10">
            Eu sou um profissional apaixonado por Design e front-end. Adoro criar designs bonitos e intuitivos para interfaces 
            digitais e estou constantemente buscando novas formas de melhorar a experiência do usuário.
          </p>
          <div className="flex flex-col gap-12">
            <h4 className="text-zinc-100 font-bold leading-tight text-2xl"><span className="text-gray-700">Experiências</span> e Formação</h4>
            <div className="flex items-start justify-start gap-4">
              <div className="flex flex-col gap-1 items-center justify-center">
                <div className="h-14 w-14 bg-blackpearl-400 rounded-full flex items-center justify-center">
                  <Briefcase size={24} color="#FFFFFF"/>
                </div>
                <div className="w-1 h-[165px] bg-gradient-time-line-blue rounded-md"></div>
                <div className="h-14 w-14 bg-blackpearl-400 rounded-full flex items-center justify-center">
                  <Briefcase size={24} color="#FFFFFF"/>
                </div>
                <div className="w-1 h-[165px] bg-gradient-time-line-blue rounded-md"></div>
                <div className="h-14 w-14 bg-zinc-100 rounded-full flex items-center justify-center">
                  <Book size={24} color="#02040f"/>
                </div>
                <div className="w-1 h-[165px] bg-gradient-time-line-white rounded-md"></div>
                <div className="h-14 w-14 bg-zinc-100 rounded-full flex items-center justify-center">
                  <Book size={24} color="#02040f"/>
                </div>
                <div className="w-1 h-[165px] bg-gradient-time-line-white rounded-md"></div>
              </div>
              <div className="flex flex-col gap-14">
                <h3 className="text-gray-500 leading-tight font-bold text-2xl mt-3">2023</h3>
                <div>
                  <h4 className="text-zinc-100 leading-tight font-bold text-xl">Front-end Developer | UI Designer</h4>
                  <p className="text-gray-700 font-medium leading-tight desktop:text-xl mobile:text-base mobile:pb-10 mt-2">
                    ETS Assessoria e Soluções em Informática
                  </p>
                </div>
                <h3 className="text-gray-500 leading-tight font-bold text-2xl desktop:-mt-4 mobile:-mt-14">2019 - 2022</h3>
                <div>
                  <h4 className="text-zinc-100 leading-tight font-bold text-xl">TI Support | UI Designer</h4>
                  <p className="text-gray-700 font-medium leading-tight desktop:text-xl mobile:text-base mobile:pb-10 mt-2">
                    Prefeitura Municipal de São Gonçalo do Amarante - Ceará
                  </p>
                </div>
                <h3 className="text-gray-500 leading-tight font-bold text-2xl desktop:-mt-3 mobile:-mt-9">2020 - 2024</h3>
                <div>
                  <h4 className="text-zinc-100 leading-tight font-bold text-xl">Bacharelado em Sistemas de Informação</h4>
                  <p className="text-gray-700 font-medium leading-tight desktop:text-xl mobile:text-base mobile:pb-10 mt-2">
                    Faculdade Lourenço Filho
                  </p>
                </div>
                <h3 className="text-gray-500 leading-tight font-bold text-2xl desktop:-mt-3 mobile:-mt-9">2017 - 2019</h3>
                <div>
                  <h4 className="text-zinc-100 leading-tight font-bold text-xl">Técnico em Informática</h4>
                  <p className="text-gray-700 font-medium leading-tight desktop:text-xl mobile:text-base mobile:pb-10 mt-2">
                    E.E.E.P Walter Ramos de Araújo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
};
