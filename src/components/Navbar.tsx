import Image from "next/image";

import Logo from "../assets/logo.svg";

export function Navbar() {
  return (
    <div className="relative flex w-full flex-row items-center justify-center overflow-hidden">
      <nav className="fixed top-10 flex flex-row items-center justify-between rounded-full bg-zinc-50/5 p-4 backdrop-blur-lg mobile:max-w-[380px] mobile:gap-1 desktop:max-w-[573px] desktop:gap-4">
        <a
          href="#projects"
          className="font-medium hover:bg-bg-zinc-50/6 rounded-full text-zinc-50 transition-colors hover:bg-zinc-50/5 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-3"
        >
          Projetos
        </a>
        <a
          href="#aboutme"
          className="text- rounded-full text-zinc-50 transition hover:bg-zinc-50/5 hover:transition-colors mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-3"
        >
          Sobre mim
        </a>
        <a
          href="#skills"
          className="text- rounded-full text-zinc-50 transition hover:bg-zinc-50/5 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-3"
        >
          Hard Skills
        </a>
      </nav>
    </div>
  );
}
