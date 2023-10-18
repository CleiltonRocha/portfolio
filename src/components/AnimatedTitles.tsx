"use client"
import {useRef, useEffect} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


type Props = {
  children: React.ReactNode;
};

export function AnimatedTitles({ children }: Props) {

  useEffect(() => {
    gsap.from('.title', {
      y: "300px",
      skewY: 20,
      duration: .1
    })
    gsap.to('.title', {
      skewY: 0,
      y: "0px",
    })
  },[])

  return (
    <div className="text-zinc-100 text-center leading-none font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm overflow-hidden relative">
      <h1 className="title leading-tight"> 
        {children}
      </h1>
    </div>
  );
}
