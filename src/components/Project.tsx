"use client"
import Image from 'next/image'

import { useEffect, useRef } from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tags } from "./Tags";
import { Button } from './Button';

import ImgBoraCodar from "@/assets/projects/desafios-bora-codar.jpg";
import ImgHabits from "@/assets/projects/habits.jpg";
import ImgCapsuladoTempo from "@/assets/projects/capsula-do-tempo.jpg";
import ImgLoctrazWebsite from "@/assets/projects/ui-design-loctraz.jpg";
import ImgTodoList from "@/assets/projects/todo-list.jpg";
import ImgIgniteFeed from "@/assets/projects/ignite-feed.jpg";

export function Project() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imgzoom1 = document.querySelectorAll(".group");

    imgzoom1.forEach((element) => {
      console.log('ELEMENT', element)

        gsap.set(element, { height:0 });
      
        gsap.to(element, {
            duration: 2,
            height: "100%",
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top bottom-=200"
            }
        });
    })

  }, []);



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
          <Button name="Ver Projeto" anchor="https://github.com/CleiltonRocha/desafios-bora-codar" target="_blank"/>
        </div>
      </div>
      <div className="group relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
        <Image src={ImgHabits} alt="Imagem do projeto habits" className="transition duration-500 ease-in-out group-hover:scale-110"/>
        <div className="flex flex-col gap-3 items-start justify-end w-full h-full rounded-2xl py-4 px-4 bg-gradient-to-t from-blackpearl-950 to-transparent absolute -bottom-[100%] transition-all duration-500 invisible group-hover:visible group-hover:bottom-0">
          <div className="flex items-center justify-start gap-4 w-full flex-wrap">
            <Tags tagName="ReactJS" />
            <Tags tagName="TypeScript" /> 
            <Tags tagName="React Native" /> 
            <Tags tagName="NodeJS" /> 
            <Tags tagName="Prisma" />
            <Tags tagName="TailwindCSS" />
          </div>
          <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Habits</h1>
          <p className="text-left font-normal text-zinc-200 text-[0.875rem]">
            Uma aplicação web e mobile desenvolvida com React JS, TypeScript, ViteJS, Fastify, Node, Prisma Radix UI e React Native no mobile. Esta aplicação foi desenvolvida no NLW Setup, um evento promovido pela Rocketseat
          </p>
          <Button name="Ver Projeto" anchor="https://github.com/CleiltonRocha/habits" target="_blank"/>
        </div>
      </div>
      <div className="group relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
        <Image src={ImgCapsuladoTempo} alt="Imagem do projeto Cápsula do Tempo" className="transition duration-500 ease-in-out group-hover:scale-110"/>
        <div className="flex flex-col gap-3 items-start justify-end w-full h-full rounded-2xl py-4 px-4 bg-gradient-to-t from-blackpearl-950 to-transparent absolute -bottom-[100%] transition-all duration-500 invisible group-hover:visible group-hover:bottom-0">
          <div className="flex items-center justify-start gap-4 w-full flex-wrap">
            <Tags tagName="NextJS" />
            <Tags tagName="TypeScript" />
            <Tags tagName="React Native" /> 
            <Tags tagName="NodeJS" />
            <Tags tagName="Fastify" />
            <Tags tagName="TailwindCSS" />
            <Tags tagName="Nativewind" />
            <Tags tagName="Prisma" />
          </div>
          <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Cápsula do Tempo</h1>
          <p className="text-left font-normal text-zinc-200 text-[0.875rem]">
            Projeto desenvolvido no NLW Spacetime, um evento promovido pela Rocketseat.
          </p>
          <Button name="Ver Projeto" anchor="https://github.com/CleiltonRocha/capsula-do-tempo" target="_blank"/>
        </div>
      </div>
      <div className="group relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
        <Image src={ImgLoctrazWebsite} alt="Imagem do projeto Website Loctraz" className="transition duration-500 ease-in-out group-hover:scale-110"/>
        <div className="flex flex-col gap-3 items-start justify-end w-full h-full rounded-2xl py-4 px-4 bg-gradient-to-t from-blackpearl-950 to-transparent absolute -bottom-[100%] transition-all duration-500 invisible group-hover:visible group-hover:bottom-0">
          <div className="flex items-center justify-start gap-4 w-full flex-wrap">
            <Tags tagName="Design" />
            <Tags tagName="Figma" />
          </div>
          <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Loctraz Website</h1>
          <p className="text-left font-normal text-zinc-200 text-[0.875rem]">
            Interface do site da empresa Loctraz feita no Figma.
          </p>
          <Button name="Ver Projeto" anchor="https://dribbble.com/shots/21866602-UI-Design-Loctraz-website" target="_blank"/>
        </div>
      </div>
      <div className="group relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
        <Image src={ImgTodoList} alt="Imagem do projeto Website Loctraz" className="transition duration-500 ease-in-out group-hover:scale-110"/>
        <div className="flex flex-col gap-3 items-start justify-end w-full h-full rounded-2xl py-4 px-4 bg-gradient-to-t from-blackpearl-950 to-transparent absolute -bottom-[100%] transition-all duration-500 invisible group-hover:visible group-hover:bottom-0">
          <div className="flex items-center justify-start gap-4 w-full flex-wrap">
            <Tags tagName="ReactJS" />
            <Tags tagName="TypeScript" />
            <Tags tagName="Vite" />
          </div>
          <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Todo list</h1>
          <p className="text-left font-normal text-zinc-200 text-[0.875rem]">
            Solução para o desafio de um sistema de listagem de tarefas com React
          </p>
          <Button name="Ver Projeto" anchor="https://todo-list-web-red.vercel.app" target="_blank"/>
        </div>
      </div>
      <div className="group relative overflow-hidden bg-cover bg-no-repeat rounded-2xl">
        <Image src={ImgIgniteFeed} alt="Imagem do projeto Website Loctraz" className="transition duration-500 ease-in-out group-hover:scale-110"/>
        <div className="flex flex-col gap-3 items-start justify-end w-full h-full rounded-2xl py-4 px-4 bg-gradient-to-t from-blackpearl-950 to-transparent absolute -bottom-[100%] transition-all duration-500 invisible group-hover:visible group-hover:bottom-0">
          <div className="flex items-center justify-start gap-4 w-full flex-wrap">
            <Tags tagName="ReactJS" />
            <Tags tagName="TypeScript" />
            <Tags tagName="Vite" />
          </div>
          <h1 className="text-zinc-100 font-bold text-3xl tracking-tighter mt-3">Ignite Feed</h1>
          <p className="text-left font-normal text-zinc-200 text-[0.875rem]">
            Uma pequena aplicação em RactJS para fixar os conhecimentos de useState. A aplicação permite
            comentar, apagar e curtir posts.
          </p>
          <Button name="Ver Projeto" anchor="https://todo-list-web-red.vercel.app" target="_blank"/>
        </div>
      </div>
    </section>
  );
}
