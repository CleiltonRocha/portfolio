"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt'

import Image from 'next/image';

import reactIcon from "@/assets/icons/react-icon.svg";
import typeScriptIcon from "@/assets/icons/ts.svg";
import nextIcon from "@/assets/icons/ts.svg";
import tailwindIcon from "@/assets/icons/tailwindcss.svg";
import boostrapIcon from "@/assets/icons/bootstrap.svg";
import phpIcon from "@/assets/icons/php.svg";

type CardSkillsProps = {
    title: string
    description: string
    icon: string
}

export function CardSkills(props: CardSkillsProps) {

    let iconPath = "";
    
    if (props.icon === 'react') {
        iconPath = reactIcon;
    }
    if (props.icon === 'php') {
        iconPath = phpIcon;
    }
    if (props.icon === 'typeScript') {
        iconPath = typeScriptIcon;
    }
    if (props.icon === 'bootstrap') {
        iconPath = boostrapIcon;
    }
    if (props.icon === 'next') {
        iconPath = nextIcon;
    }
    if (props.icon === 'tailwind') {
        iconPath = tailwindIcon;
    }

  return (
    <Tilt 
        className="desktop:w-[400px] mobile:w-[360px] h-[192px] flex items-center justify-start gap-4 desktop:px-10 mobile:px-6 mobile:py-10 desktop:py-12 skills-card rounded-xl 
        backdrop-filter backdrop-blur-lg border-2 border-b-0 border-r-0 border-opacity-30 border-gray-700"
    >
        <Image src={iconPath} alt={props.icon}/>
        <div className="flex flex-col items-start gap-2">
            <h4 className="text-zinc-100 leading-tight text-2xl font-bold">{props.title}</h4>
            <span className="text-xl text-gray-700 font-medium leading-tight">{props.description}</span>
        </div>
    </Tilt>
  )
};
