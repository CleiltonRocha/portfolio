import Image from 'next/image'
import {
  AdonisjsOriginalIcon,
  AngularjsPlainIcon,
  BootstrapPlainIcon,
  Css3PlainIcon,
  FigmaPlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  NextjsLineIcon,
  NodejsPlainIcon,
  PostgresqlPlainIcon,
  ReactOriginalIcon,
  SassOriginalIcon,
  TailwindcssPlainIcon,
} from 'react-devicons'
import colors from 'tailwindcss/colors'

import styledComponentsIcon from '@/assets/icons/styled-components.svg'

export function InfiniteScroll() {
  return (
    <>
      <ul className="h-24">
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border hover:shadow-md hover:shadow-indigo-400/50">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <Html5PlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">HTML</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <Css3PlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">CSS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <JavascriptPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">JavaScript</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <ReactOriginalIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">ReactJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <NextjsLineIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">NextJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <AngularjsPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Angular</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <TailwindcssPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">TailwindCSS</span>
            </div>
          </div>
        </li>
      </ul>
      <ul className="alt mt-1 h-24">
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <BootstrapPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Bootstrap</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <SassOriginalIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Sass</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
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
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <FigmaPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">Figma</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <NodejsPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">NodeJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <AdonisjsOriginalIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                color={colors.indigo['300']}
              />
              <span className="text-indigo-200">AdonisJS</span>
            </div>
          </div>
        </li>
        <li className="animate-infiniteScroll">
          <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-gray-700 to-gray-700/30 bg-origin-border">
            <div className="flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-neutral-950 to-gray-950/40 text-slate-300 ">
              <PostgresqlPlainIcon
                className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
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
