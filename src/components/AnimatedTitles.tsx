"use client"
import React, { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";

type Props =  {
    text: string;
}

export function AnimatedTitles({ text }: Props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const highlight = ["and", "Recentes", "Sobre", "you", "want"];
  const words = text.split(" ");

  let wordMobileStyle = 'mobile:text-4xl';

  if (text === 'Projetos Recentes') {
    wordMobileStyle = 'mobile:text-6xl'
  }


  return (
    <div
    className={`font-bold desktop:text-xxs ${wordMobileStyle} text-center mr-3 text-zinc-50 tracking-tighter`}
    data-aos-delay="300"
    data-aos="fade-up"
  >
    {words.map((word, index) => (
      <span
        key={index}
        className={`${highlight.includes(word) ? 'text-gray-500' : ''}`}
      >
        {word}{' '}
      </span>
    ))}
  </div>
  )
  
}