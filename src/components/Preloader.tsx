"use client"

import { useEffect } from "react";

export function Preloader() {


    useEffect(() => {
        let intro = document.querySelector('.intro') as HTMLElement ;
        let logo = document.querySelector('.logo-header') as HTMLElement; 
        let logoSpan = document.querySelectorAll('.logo');

        if (intro && logoSpan.length > 0) {

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.add('active');
                    }, (idx + 1) * 200);
                });

                setTimeout(() => {
                    logoSpan.forEach((span, idx) => {
                        setTimeout(() => {
                            span.classList.remove('active');
                            span.classList.add('fade');
                        }, (idx + 1) * 50);
                    })
                }, 2000)

                setTimeout(() => {
                    intro!.style.top = '-100vh'
                }, 2300)
            })
        }
    }, []);

    return (
        <div className="intro fixed z-50 left-0 top-0 w-screen h-screen bg-zinc-50 flex items-center justify-center">
            <h1 className="logo-header text-zinc-100">
                <span className="logo text-blackpearl-950 text-4xl font-bold leading-tight tracking-tighter">Cleilton</span> <span className="logo text-blackpearl-950 text-4xl font-bold leading-tight ml-2 tracking-tighter">Rocha</span>
            </h1>
        </div>
    )
}