"use client";
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { Tags } from "./Tags";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import ImgBoraCodar from "@/assets/projects/desafios-bora-codar.jpg";
import ImgHabits from "@/assets/projects/habits.jpg";
import ImgCapsuladoTempo from "@/assets/projects/capsula-do-tempo.jpg";
import ImgLoctrazWebsite from "@/assets/projects/ui-design-loctraz.jpg";
import { Button } from './Button';

export function Project() {

  return (
    <section className="desktop:grid desktop:grid-cols-3 mobile:flex mobile:flex-col gap-4">
      <div className="group relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
        <Image src={ImgBoraCodar} alt="Imagem do projeto desafios bora codar" className="transition duration-500 ease-in-out group-hover:scale-110"/>
        <div className="flex flex-col gap-3 items-start justify-end w-full h-full rounded-2xl py-4 px-4 bg-gradient-to-t from-blackpearl-950 to-transparent absolute -bottom-[100%] transition-all duration-500 invisible group-hover:visible group-hover:bottom-0">
          <div className="flex items-center justify-start gap-4">
            <Tags tagName="HTML" /> 
            <Tags tagName="CSS" /> 
            <Tags tagName="JavaScript" /> 
          </div>
          <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Desafios Bora Codar</h1>
          <p className="text-left font-normal text-zinc-200 text-[0.875rem]">
            Uma coleção de desafios promovidos pela rocketseat. Todas as interfaces foram desenvolvidas em HTML, CSS e JS, de maneira responsiva e com interfaces incríveis! Estes projetos contribuiu muito para abranger meus conhecimentos em Front-end.
          </p>
          <Button name="Ver Projeto" anchor="https://github.com/CleiltonRocha/desafios-bora-codar" />
        </div>
      </div>
      <div className="group relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
        <Image src={ImgHabits} alt="Imagem do projeto habits" className="transition duration-500 ease-in-out group-hover:scale-110"/>
        <div className="flex flex-col gap-3 items-start justify-end w-full h-full rounded-2xl py-4 px-4 bg-gradient-to-t from-blackpearl-950 to-transparent absolute -bottom-[100%] transition-all duration-500 invisible group-hover:visible group-hover:bottom-0">
          <div className="flex items-center justify-start gap-4 w-full flex-wrap">
            <Tags tagName="ReactJS" /> 
            <Tags tagName="React Native" /> 
            <Tags tagName="NodeJS" /> 
            <Tags tagName="Prisma" />
          </div>
          <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Habits</h1>
          <p className="text-left font-normal text-zinc-200 text-[0.875rem]">
            Uma aplicação web e mobile desenvolvida com React JS, TypeScript, ViteJS, Fastify, Node, Prisma Radix UI e React Native no mobile. Esta aplicação foi desenvolvida no NLW Setup, um evento promovido pela Rocketseat
          </p>
          <Button name="Ver Projeto" anchor="https://github.com/CleiltonRocha/desafios-bora-codar" />
        </div>
      </div>
      <Image src={ImgHabits} alt="Imagem do projeto desafios bora codar" className="rounded-2xl"/>
      <Image src={ImgCapsuladoTempo} alt="Imagem do projeto desafios bora codar" className="rounded-2xl"/>
      <Image src={ImgLoctrazWebsite} alt="Imagem do projeto desafios bora codar" className="rounded-2xl"/>
      {/* <div className="flex flex-col gap-4 items-start justify-end bg-[url('../assets/projects/desafios-bora-codar.jpg')] scroll-section p-10 w-full transition ease-in-out bg-gray-950 hover:bg-purple-700 duration-300 rounded-3xl">
        <Image src={ImgBoraCodar} alt="Imagem do projeto desafios bora codar" className="rounded-2xl"/>
        <div className="flex items-center justify-start gap-4 mt-5">
          <Tags tagName="HTML" /> 
          <Tags tagName="CSS" /> 
          <Tags tagName="JavaScript" /> 
        </div>
        <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Desafios Bora Codar</h1>
        <p className="text-left font-normal text-zinc-200 text-xl max-w-[60%]">
          Uma coleção de desafios promovidos pela rocketseat. Todas as interfaces foram desenvolvidas em HTML, CSS e JS, de maneira responsiva e com interfaces incríveis! Estes projetos contribuiu muito para abranger meus conhecimentos em Front-end.
        </p>
        <a href="https://github.com/CleiltonRocha/desafios-bora-codar" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div> */}
      {/* <div className="flex flex-col gap-4 items-start justify-end mt-4 p-10 w-full transition ease-in-out bg-gray-950 hover:bg-purple-600 duration-300 rounded-3xl">
        <Image src={ImgHabits} alt="Imagem do projeto Habits" className="rounded-2xl"/>
        <div className="flex items-center justify-start gap-4 mt-5">
          <Tags tagName="ReactJS" /> 
          <Tags tagName="React Native" /> 
          <Tags tagName="NodeJS" /> 
          <Tags tagName="Prisma" />
        </div>
        <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Habits</h1>
        <p className="text-left font-normal text-zinc-200 text-xl max-w-[60%]">
          Uma aplicação web e mobile desenvolvida com React JS, TypeScript, ViteJS, Fastify, Node, Prisma Radix UI e React Native no mobile. Esta aplicação foi desenvolvida no NLW Setup, um evento promovido pela Rocketseat
        </p>
        <a href="https://github.com/CleiltonRocha/habits" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div>
      <div className="flex flex-col gap-4 items-start justify-end mt-4 p-10 w-full transition ease-in-out bg-gray-950 hover:bg-green-600 duration-300 rounded-3xl">
        <Image src={ImgCapsuladoTempo} alt="Imagem do projeto Cápsula do Tempo" className="rounded-2xl"/>
        <div className="flex items-center justify-start gap-4 mt-5">
          <Tags tagName="NextJS" /> 
          <Tags tagName="React Native" /> 
          <Tags tagName="NodeJS" /> 
          <Tags tagName="Prisma" />
        </div>
        <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Cápsula do Tempo</h1>
        <p className=" text-left font-normal text-zinc-200 text-xl max-w-[60%]">
          Projeto desenvolvido no NLW Spacetime, um evento promovido pela Rocketseat.
        </p>
        <a href="https://github.com/CleiltonRocha/capsula-do-tempo" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div>
      <div className="sticky top-0 flex flex-col gap-4 items-start justify-end mt-4 p-10 w-full transition ease-in-out bg-gray-950 hover:bg-orange-600 duration-300 rounded-3xl">
        <Image src={ImgLoctrazWebsite} alt="Imagem do projeto Loctraz website" className="rounded-2xl"/>
        <div className="flex items-center justify-start gap-4 mt-5">
          <Tags tagName="UI Design" /> 
        </div>
        <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Loctraz website</h1>
        <p className=" text-left font-normal text-zinc-200 text-xl max-w-[60%]">
          Interface do site da empresa Loctraz feita no Figma.
        </p>
        <a href="https://dribbble.com/shots/21866602-UI-Design-Loctraz-website" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div> */}
    </section>
  );
}
