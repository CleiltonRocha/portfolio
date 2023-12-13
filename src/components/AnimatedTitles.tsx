'use client'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export function AnimatedTitles({ children, className }: Props) {
  useEffect(() => {
    const title = document.querySelector('.title') as HTMLElement

    setTimeout(() => {
      title.classList.add('animate-reveal')
    }, 2000)
  }, [])

  return (
    <div
      className={` ${className} text-zinc-100 leading-none font-semibold desktop:leading-lg tracking-tighter desktop:text-xxl mobile:text-[3.5rem] mobile:leading-sm overflow-hidden relative`}
    >
      <h1 className="title leading-tight m-0 overflow-hidden">
        <span className="block animate-reveal">{children}</span>
      </h1>
    </div>
  )
}
