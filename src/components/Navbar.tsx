import Image from 'next/image';

import Logo from '../assets/logo.svg'

export function Navbar() {
  return (
    <div className="flex flex-row w-full items-center justify-center relative overflow-hidden">
          <nav className="flex flex-row items-center justify-between desktop:max-w-[573px] mobile:max-w-[380px] rounded-full z-10 desktop:gap-6 mobile:gap-3 top-10 p-4 fixed bg-blackpearl-950/30 backdrop-blur-lg">
            <Image src={Logo} alt="Logo"/>
            <a href="#" className="desktop:py-3 desktop:px-6 mobile:py-2 mobile:px-4 text-zinc-50 rounded-full transition-colors ease hover:bg-zinc-50/5 hover:bg-bg-zinc-50/6">Projects</a>
            <a href="#" className="desktop:py-3 desktop:px-6 mobile:py-2 mobile:px-4 text-zinc-50 rounded-full transition ease hover:bg-zinc-50/5 hover:transition-colors">About me</a>
            <a href="#" className="desktop:py-3 desktop:px-6 mobile:py-2 mobile:px-4 text-zinc-50 rounded-full transition ease hover:bg-zinc-50/5">Skills</a>
          </nav>
        </div>
  )
};
