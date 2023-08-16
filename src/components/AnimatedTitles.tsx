"use client"
import React, { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";
import { text } from "stream/consumers";

type Props =  {
    text: string;
}

export function AnimatedTitles({ text }: Props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div
    className={`font-bold mobile:text-5xl desktop:text-xxs leading-tight text-center tracking-tighter from-zinc-50 to-gray-700 bg-gradient-to-r bg-clip-text text-transparent desktop:max-w-[60%] mobile:max-w-[90%]`}
    data-aos-delay="300"
    data-aos="fade-up"
  >
    {text}
  </div>
  )
  
}