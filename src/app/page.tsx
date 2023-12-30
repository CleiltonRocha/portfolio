'use client'
import { useEffect, useState } from 'react'

import { HeroSection } from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AboutMeSection } from '@/components/AboutMeSection'
import { SkillsSection } from '@/components/SkillsSection'
import { Cursor } from '@/components/Cursor'
import { Preloader } from '@/components/Preloader'

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
