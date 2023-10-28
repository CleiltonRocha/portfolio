"use client";
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { Tags } from "./Tags";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import ImgBoraCodar from "@/assets/projetos/bora-codar.jpg";
import ImgHabits from "@/assets/projetos/habits.jpg";
import ImgCapsuladoTempo from "@/assets/projetos/capsula-do-tempo.jpg";
import ImgLoctrazWebsite from "@/assets/projetos/loctraz-website.jpg";

export function Project() {

  return (
    <section className="px-[100px]">
      <div className="sticky top-0 flex flex-col gap-4 items-start justify-end scroll-section p-10 w-full transition ease-in-out bg-gray-950 hover:bg-purple-700 duration-300 rounded-3xl">
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
        <a href="#" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div>
      <div className="sticky top-2 flex flex-col gap-4 items-start justify-end mt-4 p-10 w-full transition ease-in-out bg-gray-950 hover:bg-purple-600 duration-300 rounded-3xl">
        <Image src={ImgHabits} alt="Imagem do projeto Habits" className="rounded-2xl"/>
        <div className="flex items-center justify-start gap-4 mt-5">
          <Tags tagName="ReactJS" /> 
          <Tags tagName="React Native" /> 
          <Tags tagName="NodeJS" /> 
          <Tags tagName="Prisma" />
        </div>
        <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Habits</h1>
        <p className=" text-left font-normal text-zinc-200 text-xl max-w-[60%]">
          Uma coleção de desafios promovidos pela rocketseat. Todas as interfaces foram desenvolvidas em HTML, CSS e JS, de maneira responsiva e com interfaces incríveis! Estes projetos contribuiu muito para abranger meus conhecimentos em Front-end.
        </p>
        <a href="#" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div>
      <div className="sticky top-4 flex flex-col gap-4 items-start justify-end mt-4 p-10 w-full transition ease-in-out bg-gray-950 hover:bg-green-600 duration-300 rounded-3xl">
        <Image src={ImgCapsuladoTempo} alt="Imagem do projeto Cápsula do Tempo" className="rounded-2xl"/>
        <div className="flex items-center justify-start gap-4 mt-5">
          <Tags tagName="NextJS" /> 
          <Tags tagName="React Native" /> 
          <Tags tagName="NodeJS" /> 
          <Tags tagName="Prisma" />
        </div>
        <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Cápsula do Tempo</h1>
        <p className=" text-left font-normal text-zinc-200 text-xl max-w-[60%]">
          Uma coleção de desafios promovidos pela rocketseat. Todas as interfaces foram desenvolvidas em HTML, CSS e JS, de maneira responsiva e com interfaces incríveis! Estes projetos contribuiu muito para abranger meus conhecimentos em Front-end.
        </p>
        <a href="#" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div>
      <div className="sticky top-0 flex flex-col gap-4 items-start justify-end mt-4 p-10 w-full transition ease-in-out bg-gray-950 hover:bg-orange-600 duration-300 rounded-3xl">
        <Image src={ImgLoctrazWebsite} alt="Imagem do projeto Loctraz website" className="rounded-2xl"/>
        <div className="flex items-center justify-start gap-4 mt-5">
          <Tags tagName="UI Design" /> 
        </div>
        <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Loctraz website</h1>
        <p className=" text-left font-normal text-zinc-200 text-xl max-w-[60%]">
          Uma coleção de desafios promovidos pela rocketseat. Todas as interfaces foram desenvolvidas em HTML, CSS e JS, de maneira responsiva e com interfaces incríveis! Estes projetos contribuiu muito para abranger meus conhecimentos em Front-end.
        </p>
        <a href="#" className="py-4 mt-6 px-10 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full">Ver projeto</a>
      </div>
    </section>
  );
}
