"use client"
import React, { useLayoutEffect, useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";

import { CardSkills } from "./CardSkills";




export function SkillsSection() {

  const slider = useRef(null);

  return (
    // <section
    //   id="skills"
    //   className="mt-36 mobile:px-4 desktop:h-screen px-[100px]"
    // >
    //   <h1 className="animate-fade-in-down text-zinc-100 text-center font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm">
    //     Hard Skills
    //   </h1>
    //   <div className="mt-20 w-full inline-flex flex-nowrap overflow-hidden py-3 relative slider">
    //     <div ref={slider} className="slider flex items-center desktop:ml-6 desktop:gap-6 justify-center ">
    //       <CardSkills
    //         title="ReactJS"
    //         icon="react"
    //       />
    //       <CardSkills
    //         title="PHP"
    //         icon="php"
    //       />
    //       <CardSkills
    //         title="React Native"
    //         icon="react"
    //       />
    //       <CardSkills
    //         title="TailwindCSS"
    //         icon="tailwind"
    //       />
    //       <CardSkills
    //         title="AAAA"
    //         icon="tailwind"
    //       />
    //       <CardSkills
    //         title="BBBBB"
    //         icon="tailwind"
    //       />
    //     </div>
    //   </div>
      
    // </section>
    <></>

  );
}
