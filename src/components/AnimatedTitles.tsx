"use client"
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};


export function AnimatedTitles({ children }: Props) {
  
  useEffect(() => {
    const title = document.querySelector('.title') as HTMLElement

    setTimeout(() => {
      title!.classList.add('animate-reveal')
    }, 2000); 
  }, []);

  return (
    <div className="text-zinc-100 text-left whitespace-nowrap leading-none font-bold desktop:leading-lg tracking-tighter text-transparent desktop:text-xxs mobile:text-[2.5rem] mobile:leading-sm overflow-hidden relative">
      <h1 className="title leading-tight m-0 overflow-hidden"> 
        <span className="block animate-reveal">{children}</span>
      </h1>
    </div>
  );
}
