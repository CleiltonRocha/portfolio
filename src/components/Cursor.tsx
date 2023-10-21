"use client"

import React, {useEffect} from "react"
import {gsap} from 'gsap'


export function Cursor() {

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a');
        const cursorText = document.querySelector('.cursor-text') as HTMLElement;
      
      
        const onMouseMove = (event: MouseEvent) => {
          const { clientX, clientY } = event;
          gsap.to(".cursor", { x: clientX, y: clientY});
        };
      
        const onMouseEnterLink = (event: MouseEvent) => {
            gsap.to(".cursor", { scale: 2 });
        };
      
        const onMouseLeaveLink = (event: MouseEvent) => {
          gsap.to(".cursor", { scale: 1 });
          cursorText.style.display = 'none';
        };
      
        document.addEventListener('mousemove', onMouseMove);
      
        links.forEach((link) => {
            console.log('LINK',link)
          link.addEventListener('mouseenter', onMouseEnterLink);
          link.addEventListener('mouseleave', onMouseLeaveLink);
        });
      }, []);
      

    return (
        <div id="cursor" className="custom-cursor cursor"> 
            <span className="cursor-text">View</span>
        </div>
    )
}