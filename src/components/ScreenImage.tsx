"use client";
import { useState } from "react";
import Image from "next/image";
import FigmaScreen from "../assets/figma-screen.svg";
import CodeScreen from "../assets/code.svg";

export function ScreenImage() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="-z-1"
      style={{
        transition: "all 0.5s ease-in-out",
        transform: hovered ? "scale(1.1)" : "",
      }}
    >
      {hovered ? (
        <Image
          src={CodeScreen}
          alt="Code Screen"
          className="-z-10 animate-fade-in-up cursor-pointer rounded-xl border-2 border-gray-800 ease-in mobile:hidden desktop:block"
        />
      ) : (
        <Image
          src={FigmaScreen}
          alt="Figma Screen"
          className="-z-10 animate-fade-in-up cursor-pointer rounded-xl border-2 border-gray-800 ease-in mobile:hidden desktop:block"
        />
      )}
    </div>
  );
}
