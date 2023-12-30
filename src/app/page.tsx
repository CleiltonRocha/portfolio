'use client'
import { useEffect, useState } from 'react'

import { Cursor } from '@/components/Cursor'
import { Preloader } from '@/components/Preloader'
import { AboutMeSection } from '@/sections/AboutMeSection'
import { HeroSection } from '@/sections/HeroSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { SkillsSection } from '@/sections/SkillsSection'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2800)
  }, [])

  return (
    <>
      <Preloader />
      <Cursor />
      <div>
        <HeroSection />
        <ProjectsSection />
        <AboutMeSection />
        <SkillsSection />
      </div>
    </>
  )
}
