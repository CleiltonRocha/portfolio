import Image from 'next/image';
import blurHeroSectionTopRight from '../assets/blur-hero-section-top-right.svg';
import blurHeroSectionBottomLeft from '../assets/blur-hero-section-bottom-left.svg';
import Logo from '../assets/logo.svg';
import ProfileRounded from '../assets/profile-rounded.png';
import { AnimatedTitles } from '../components/AnimatedTitles';
import { Slider } from '../components/Slider';
import { ScreenImage } from '../components/ScreenImage';

export default function Home() {
  return (
    <div>
      <section 
        className="w-full items-center justify-center">
        <Image src={blurHeroSectionTopRight} alt="Radial Gradient" width={800} height={800} className="pointer-events-none absolute top-0 right-0 -z-1 animate-fade-in-down"/>
        <Image src={blurHeroSectionBottomLeft} alt="Radial Gradient" width={800} height={800} className="pointer-events-none absolute -bottom-90 left-0 -z-1 animate-fade-in-down"/>
        <div className="flex flex-row w-full items-center justify-center relative overflow-hidden">
          <nav className="flex flex-row items-center justify-between desktop:max-w-[573px] mobile:max-w-[380px] rounded-full z-10 desktop:gap-6 mobile:gap-3 top-10 p-4 fixed bg-blackpearl-950/30 backdrop-blur-lg border-2 border-gray-950/30">
            <Image src={Logo} alt="Logo"/>
            <a href="#" className="desktop:py-3 desktop:px-6 mobile:py-2 mobile:px-4 text-zinc-50 rounded-full transition-colors ease hover:bg-zinc-50/5 hover:bg-bg-zinc-50/6">Projects</a>
            <a href="#" className="desktop:py-3 desktop:px-6 mobile:py-2 mobile:px-4 text-zinc-50 rounded-full transition ease hover:bg-zinc-50/5 hover:transition-colors">About me</a>
            <a href="#" className="desktop:py-3 desktop:px-6 mobile:py-2 mobile:px-4 text-zinc-50 rounded-full transition ease hover:bg-zinc-50/5">Skills</a>
          </nav>
        </div>
        <div className="desktop:mt-60 mobile:mt-40 flex flex-col w-full items-center justify-center desktop:gap-20 mobile:gap-10">
          <div className="flex flex-col items-center desktop:gap-20 mobile:gap-2 desktop:text-xxs mobile:text-4xl mobile:px-6">
            <div className="flex flex-row desktop:gap-6 mobile:gap-2 items-center">
              <AnimatedTitles text="UI Designer and"/>
              <Image src={ProfileRounded} alt="Profile Image" className="mobile:w-18 mobile:h-18" width={56} height={56}/>
            </div>
              <AnimatedTitles text="Front-end Developer"/>
          </div>
          <p className="desktop:max-w-[900px] mobile:max-w-[400px] mobile:px-4 text-center lg:text-4xl mobile:text-xl text-gray-700 tracking-tighter leading-tight font-medium animate-fade-in-down">
            I’am Cleilton Rocha! I transform ideas into intuitive interfaces and I create a extraordinary user experiences.
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-center desktop:mt-20">
          <ScreenImage />
        </div>
      </section>
      <section className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col items-start desktop:px-[100px] mobile:px-4 mt-40">
        <h1 className="font-bold mr-3 sticky top-10 desktop:max-w-[300px] text-zinc-50 desktop:text-xxs leading-lg tracking-tighter">
          <span className="text-gray-500">Developer</span> Projects
        </h1>
        <Slider />
      </section>
      <section className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col items-start desktop:px-[100px] mobile:px-4 mt-36">
        <Slider />
        <div className="w-full flex flex-row justify-end sticky top-10">
          <h1 className="font-bold text-right sticky top-10 desktop:max-w-[400px] text-zinc-50 desktop:text-xxs leading-lg tracking-tighter">
            Design Projects
          </h1>
        </div>
      </section>
    </div>
  )
}
