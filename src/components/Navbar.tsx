import Image from "next/image";

import Logo from "../assets/logo.svg";

export function Navbar() {
  return (
    <div className="relative flex w-full flex-row items-center justify-center overflow-hidden">
      <nav className="fixed top-10 z-10 flex flex-row items-center justify-between rounded-full bg-blackpearl-950/30 p-4 backdrop-blur-lg mobile:max-w-[380px] mobile:gap-3 desktop:max-w-[573px] desktop:gap-6">
        <Image src={Logo} alt="Logo" />
        <a
          href="#projects"
          className="ease hover:bg-bg-zinc-50/6 rounded-full text-zinc-50 transition-colors hover:bg-zinc-50/5 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-3"
        >
          Projects
        </a>
        <a
          href="#aboutme"
          className="ease rounded-full text-zinc-50 transition hover:bg-zinc-50/5 hover:transition-colors mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-3"
        >
          About me
        </a>
        <a
          href="#skills"
          className="ease rounded-full text-zinc-50 transition hover:bg-zinc-50/5 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-3"
        >
          Skills
        </a>
      </nav>
    </div>
  );
}
