'use client'

import { useEffect } from 'react'

export function Preloader() {
  useEffect(() => {
    const intro = document.querySelector('.intro') as HTMLElement
    const logoSpan = document.querySelectorAll('.logo')

    if (intro && logoSpan.length > 0) {
      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(
            () => {
              span.classList.add('active')
            },
            (idx + 1) * 200,
          )
        })

        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(
              () => {
                span.classList.remove('active')
                span.classList.add('fade')
              },
              (idx + 1) * 50,
            )
          })
        }, 2000)

        setTimeout(() => {
          intro!.style.top = '-100vh'
        }, 2300)
      })
    }
  }, [])

  return (
    <div className="intro fixed z-50 left-0 top-0 w-screen bg-black h-screen flex items-center justify-center">
      <h1 className="logo-header text-zinc-100">
        <span className="logo tracking-tighter text-6xl text-center inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Cleilton
        </span>
        <span className="logo tracking-tighter text-6xl ml-4 text-center inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Rocha
        </span>
      </h1>
    </div>
  )
}
