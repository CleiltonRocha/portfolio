"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

import Image from "next/image";

import reactIcon from "@/assets/icons/react-icon.svg";
import typeScriptIcon from "@/assets/icons/ts.svg";
import nextIcon from "@/assets/icons/ts.svg";
import tailwindIcon from "@/assets/icons/tailwindcss.svg";
import boostrapIcon from "@/assets/icons/bootstrap.svg";
import phpIcon from "@/assets/icons/php.svg";

type CardSkillsProps = {
  title: string;
  icon: string;
};

export function CardSkills(props: CardSkillsProps) {
  let iconPath = "";

  if (props.icon === "react") {
    iconPath = reactIcon;
  }
  if (props.icon === "php") {
    iconPath = phpIcon;
  }
  if (props.icon === "typescript") {
    iconPath = typeScriptIcon;
  }
  if (props.icon === "bootstrap") {
    iconPath = boostrapIcon;
  }
  if (props.icon === "next") {
    iconPath = nextIcon;
  }
  if (props.icon === "tailwind") {
    iconPath = tailwindIcon;
  }
  if (props.icon === "angular") {
    iconPath = tailwindIcon;
  }

  return (
    <Tilt
      className="flex h-[192px] items-center justify-start gap-4 rounded-xl border-2 border-gray-800 bg-zinc-50/5 mobile:w-[360px] mobile:px-6 mobile:py-10 desktop:w-[400px] desktop:px-10 desktop:py-12"
    >
      <Image src={iconPath} alt={props.icon} />
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold leading-tight text-zinc-100">
          {props.title}
        </h1>
      </div>
    </Tilt>
  );
}
