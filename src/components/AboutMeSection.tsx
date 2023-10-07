import Image from "next/image";

import { Briefcase, Book } from "lucide-react";
import { AnimatedTitles } from "./AnimatedTitles";

import ProfileImage from "@/assets/profile-image.png";

export function AboutMeSection() {
  return (
    <section
      id="aboutme"
      className="relative mt-36 w-full mobile:flex mobile:flex-col mobile:gap-6 mobile:px-6 desktop:grid desktop:grid-cols-2 desktop:px-16"
    >
      <div className="img-with-mark relative before:animate-rotate mobile:before:-top-12 mobile:before:right-0 desktop:before:bottom-32 desktop:before:right-32">
        <Image
          src={ProfileImage}
          alt="Foto de Perfil - Cleilton Rocha"
          className="-z-index-1 sticky desktop:top-10"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start mobile:mt-10 mobile:gap-6 desktop:gap-16">
        <h1 className="animate-fade-in-down text-zinc-100 text-center font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm">
          Sobre mim
        </h1>
        <p className="font-medium leading-tight text-gray-700 mobile:pb-10 mobile:text-base desktop:text-2xl">
          Eu sou um profissional apaixonado por Design e front-end. Adoro criar
          designs bonitos e intuitivos para interfaces digitais e estou
          constantemente buscando novas formas de melhorar a experiência do
          usuário.
        </p>
        <div className="flex flex-col gap-12">
          <h1 className="text-2xl font-bold leading-tight text-zinc-100">
            <span className="text-gray-700">Experiências</span> e Formação
          </h1>
          <div className="flex items-start justify-start gap-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green">
                <Briefcase size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-blue"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green">
                <Briefcase size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-blue"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                <Book size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-white"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                <Book size={24} color="#060606" />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line-white"></div>
            </div>
            <div className="flex flex-col gap-14">
              <p className="mt-3 text-2xl font-bold leading-tight text-gray-500">
                2023
              </p>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
                  Front-end Developer | UI Designer
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-700 mobile:pb-10 mobile:text-base desktop:text-xl">
                  ETS Assessoria e Soluções em Informática
                </p>
              </div>
              <p className="text-2xl font-bold leading-tight text-gray-500 mobile:-mt-14 desktop:-mt-4">
                2019 - 2022
              </p>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
                  TI Support | UI Designer
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-700 mobile:pb-10 mobile:text-base desktop:text-xl">
                  Prefeitura Municipal de São Gonçalo do Amarante - Ceará
                </p>
              </div>
              <p className="text-2xl font-bold leading-tight text-gray-500 mobile:-mt-9 desktop:-mt-3">
                2020 - 2024
              </p>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
                  Bacharelado em Sistemas de Informação
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-700 mobile:pb-10 mobile:text-base desktop:text-xl">
                  Faculdade Lourenço Filho
                </p>
              </div>
              <p className="text-2xl font-bold leading-tight text-gray-500 mobile:-mt-9 desktop:-mt-3">
                2017 - 2019
              </p>
              <div>
                <h1 className="text-xl font-bold leading-tight text-zinc-100">
                  Técnico em Informática
                </h1>
                <p className="mt-2 font-medium leading-tight text-gray-700 mobile:pb-10 mobile:text-base desktop:text-xl">
                  E.E.E.P Walter Ramos de Araújo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
