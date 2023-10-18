"use client";
import Image from 'next/image'
import { useState, useEffect, useLayoutEffect } from "react";
import { Technologies } from "./Technologies";
import { Tags } from "./Tags";
import { Heart } from "lucide-react";
import { ImageProject } from "./ImageProject";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import ImgAppContacts from "@/assets/projects/contacts.jpg";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function Project() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".project", {
      margin: "64px",
      borderRadius: "24px",
      backgroundColor: '#8b5cf6',
      scrollTrigger: {
        trigger: ".project",
        start: "top bottom", // Comece a animação quando o centro da div atingir o topo da tela
        end: "center center", // Termine a animação quando o centro da div estiver no centro da tela
        scrub: true,
      }
    })

  }, [])

  return (
    <div className="flex w-full flex-col items-center justify-start gap-8">
      <a
        href=""
        className=""
      >
        <div className="project mobile:flex p-8 mobile:h-full mobile:flex-col-reverse desktop:grid desktop:h-screen desktop:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-12 mobile:p-4 desktop:pl-16 ">
            <Tags projectName="Front-end" />
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold leading-tight tracking-tighter text-zinc-50 mobile:text-3xl desktop:text-5xl">
                APP Contacts UI React Native
              </h1>
              <p className="max-w-[95%] font-medium leading-tight text-gray-600 mobile:text-base desktop:text-2xl">
                Projeto tal
              </p>
            </div>
            <div className="flex flex-col gap-6 mobile:pb-10">
              <h1 className="text-2xl font-semibold leading-tight tracking-tighter text-zinc-50">
                Tecnologias
              </h1>
              <div className="flex flex-row gap-4">
                <Technologies projectName="TailwindCSS" />
              </div>
            </div>
          </div>
            <Image alt="Project Image" src={ImgAppContacts} className="h-full object-cover rounded-xl"/>
        </div>
      </a>
      {/* <a
        href=""
        className=""
      >
        <div className="card-projects w-full bg-green rounded-3xl mobile:flex p-8 mobile:h-full mobile:flex-col-reverse desktop:grid desktop:h-screen desktop:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-12 mobile:p-4 desktop:pl-16 ">
            <Tags projectName="Front-end" />
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold leading-tight tracking-tighter text-zinc-50 mobile:text-3xl desktop:text-5xl">
                APP Contacts UI React Native
              </h1>
              <p className="max-w-[95%] font-medium leading-tight text-gray-600 mobile:text-base desktop:text-2xl">
                Projeto tal
              </p>
            </div>
            <div className="flex flex-col gap-6 mobile:pb-10">
              <h1 className="text-2xl font-semibold leading-tight tracking-tighter text-zinc-50">
                Tecnologias
              </h1>
              <div className="flex flex-row gap-4">
                <Technologies projectName="TailwindCSS" />
              </div>
            </div>
          </div>
          <Image alt="Project Image" src={ImgAppContacts} className="h-full object-cover rounded-xl"/>
        </div>
      </a>
      <a
        href=""
        className=""
      >
        <div className="card-projects w-full bg-indigo-700 rounded-3xl mobile:flex p-8 mobile:h-full mobile:flex-col-reverse desktop:grid desktop:h-screen desktop:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-12 mobile:p-4 desktop:pl-16 ">
            <Tags projectName="Front-end" />
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold leading-tight tracking-tighter text-zinc-50 mobile:text-3xl desktop:text-5xl">
                APP Contacts UI React Native
              </h1>
              <p className="max-w-[95%] font-medium leading-tight text-gray-600 mobile:text-base desktop:text-2xl">
                Projeto tal
              </p>
            </div>
            <div className="flex flex-col gap-6 mobile:pb-10">
              <h1 className="text-2xl font-semibold leading-tight tracking-tighter text-zinc-50">
                Tecnologias
              </h1>
              <div className="flex flex-row gap-4">
                <Technologies projectName="TailwindCSS" />
              </div>
            </div>
          </div>
          <Image alt="Project Image" src={ImgAppContacts} className="h-full object-cover rounded-xl"/>
        </div>
      </a> */}
    </div>
  );
}
