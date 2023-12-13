'use client'
import Image from 'next/image'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Tags } from './Tags'
import { Button } from './Button'

import ImgBoraCodar from '@/assets/projects/projetos-img/bora-codar.jpg'
import ImgHabits from '@/assets/projects/projetos-img/habits.jpg'
import ImgCoffeeDelivery from '@/assets/projects/projetos-img/coffee-delivery.jpg'
import ImgGithubBlog from '@/assets/projects/projetos-img/github-blog.jpg'

export function Project() {
  return (
    <section className="w-full flex flex-col gap-20 desktop:px-20">
      <div className="w-full flex flex-col gap-16">
        <div className="flex items-center justify-between w-full desktop:flex-row mobile:flex-col mobile:gap-10">
          <div className="flex items-center gap-10 desktop:flex-row mobile:flex-col">
            <h1 className="text-6xl text-center font-medium bg-gradient-to-r leading-tight from-blue-200 via-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              Github Blog
            </h1>
            <div className="flex items-center gap-4">
              <Tags tagName="ReactJS" />
              <Tags tagName="TypeScript" />
              <Tags tagName="Styled Components" />
            </div>
          </div>
          <h1 className="text-gray-800 text-7xl font-semibold">#01</h1>
        </div>
        <Image
          src={ImgGithubBlog}
          alt=""
          height={800}
          className="w-full rounded-3xl"
        />
      </div>
      <div className="w-full flex flex-col gap-16">
        <div className="flex items-center justify-between w-full desktop:flex-row mobile:flex-col mobile:gap-10">
          <div className="flex items-center gap-10 desktop:flex-row mobile:flex-col">
            <h1 className="text-6xl text-center font-medium bg-gradient-to-r leading-tight from-yellow-200 via-blue-100 to-pink-200 inline-block text-transparent bg-clip-text">
              Coffee Delivery
            </h1>
            <div className="flex items-center gap-4">
              <Tags tagName="ReactJS" />
              <Tags tagName="TypeScript" />
              <Tags tagName="Styled Components" />
            </div>
          </div>
          <h1 className="text-gray-800 text-7xl font-semibold">#02</h1>
        </div>
        <Image
          src={ImgCoffeeDelivery}
          alt=""
          height={800}
          className="w-full rounded-3xl"
        />
      </div>
      <div className="w-full flex flex-col gap-16">
        <div className="flex items-center justify-between w-full desktop:flex-row mobile:flex-col mobile:gap-10">
          <div className="flex items-center gap-10 desktop:flex-row mobile:flex-col">
            <h1 className="text-6xl text-center font-medium bg-gradient-to-r leading-tight from-purple-200 via-purple-500 to-purple-800 inline-block text-transparent bg-clip-text">
              Habits
            </h1>
            <div className="flex items-center gap-4">
              <Tags tagName="ReactJS" />
              <Tags tagName="TypeScript" />
              <Tags tagName="NodeJS" />
              <Tags tagName="RadixUI" />
              <Tags tagName="TailwindCSS" />
            </div>
          </div>
          <h1 className="text-gray-800 text-7xl font-semibold">#03</h1>
        </div>
        <Image
          src={ImgHabits}
          alt=""
          height={800}
          className="w-full rounded-3xl"
        />
      </div>
      <div className="w-full flex flex-col gap-16">
        <div className="flex items-center justify-between w-full desktop:flex-row mobile:flex-col mobile:gap-10">
          <div className="flex items-center gap-10 desktop:flex-row mobile:flex-col">
            <h1 className="text-6xl text-center font-medium bg-gradient-to-r leading-tight from-orange-300 via-purple-500 to-purple-800 inline-block text-transparent bg-clip-text">
              Desafios
            </h1>
            <div className="flex items-center gap-4">
              <Tags tagName="HTML" />
              <Tags tagName="CSS" />
              <Tags tagName="Java Script" />
            </div>
          </div>
          <h1 className="text-gray-800 text-7xl font-semibold">#04</h1>
        </div>
        <Image
          src={ImgBoraCodar}
          alt=""
          height={600}
          className="w-full rounded-3xl"
        />
      </div>
    </section>
  )
}
