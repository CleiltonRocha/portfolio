import Image from 'next/image'

import styledComponentsIcon from '@/assets/icons/styled-components.svg'
import colors from 'tailwindcss/colors'

import {
  AdonisjsOriginalIcon,
  AngularjsPlainIcon,
  BootstrapPlainIcon,
  Css3PlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  NextjsLineIcon,
  NodejsPlainIcon,
  PostgresqlPlainIcon,
  ReactOriginalIcon,
  SassOriginalIcon,
  TailwindcssPlainIcon,
  FigmaPlainIcon,
} from 'react-devicons'

export function InfiniteScroll() {
  return (
    <>
      <ul>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <Html5PlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">HTML</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <Css3PlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">CSS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <JavascriptPlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">JavaScript</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <ReactOriginalIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">ReactJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <NextjsLineIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">NextJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <AngularjsPlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Angular</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <TailwindcssPlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">TailwindCSS</span>
            </div>
          </div>
        </li>
      </ul>

      <ul className="alt mt-4">
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <BootstrapPlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Bootstrap</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <SassOriginalIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Sass</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <Image
                src={styledComponentsIcon}
                alt="Ícone da biblioteca styled components"
                width={32}
                height={32}
              />
              <span className="text-indigo-200">Styled C.</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <FigmaPlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Figma</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <NodejsPlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">NodeJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <AdonisjsOriginalIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">AdonisJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="w-[95%] h-16 border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border overflow-hidden rounded-lg">
            <div className="flex items-center justify-center gap-4 bg-gradient-to-b text-slate-300 from-neutral-950 to-gray-950/40 h-16 ">
              <PostgresqlPlainIcon
                className="desktop:w-10 desktop:h-10 mobile:w-8 mobile:h-8"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">PostgreSQL</span>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}
