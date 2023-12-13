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
    <div className="bg-radial-gradient intro fixed z-50 left-0 top-0 w-screen bg-black h-screen flex items-center justify-center">
      <h1 className="logo-header text-zinc-100">
        <span className="logo text-6xl text-center bg-gradient-to-r leading-tight from-orange-300 via-purple-500 to-purple-800 inline-block text-transparent bg-clip-text">
          Cleilton
        </span>{' '}
        <span className="logo text-6xl ml-4 text-center bg-gradient-to-r leading-tight from-purple-800 to-purple-500 inline-block text-transparent bg-clip-text">
          Rocha
        </span>
      </h1>
    </div>
  )
}
