"use client"
import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap-trial/SplitText";


type Props = {
  children: React.ReactNode;
};

export function AnimatedTitles({ children }: Props) {

  useLayoutEffect(() => {

    gsap.registerPlugin(SplitText);

    let splitText = new SplitText(".title", {type: "chars"})
    let chars = splitText.chars;


    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.02,
    })

  }, [])

  return (
    <div className="text-zinc-100 text-center leading-none font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm overflow-hidden">
      <h1 className="title m-0 leading-tight"> 
        {children}
      </h1>
    </div>
  );
}
