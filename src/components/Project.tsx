"use client";
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { Technologies } from "./Technologies";
import { Tags } from "./Tags";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import ImgAppContacts from "@/assets/projects/contacts.jpg";

export function Project() {

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "150vw",
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-x-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner h-screen w-[400vw] relative flex">
          <div className="scroll-section bg-red-100 h-screen w-screen">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section bg-red-300 h-screen w-screen flex items-center justify-center">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section bg-red-400 h-screen w-screen flex items-center justify-center">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section bg-red-500 h-screen w-screen flex items-center justify-center">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
