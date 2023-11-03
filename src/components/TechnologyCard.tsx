import {
  ReactOriginalIcon,
  TypescriptPlainIcon,
  TailwindcssPlainIcon,
  NextjsLineIcon,
  NodejsPlainWordmarkIcon,
  Html5PlainIcon,
  Css3PlainIcon,
  JavascriptPlainIcon,
} from "react-devicons";

interface TechnologyProps {
  name: string,
  icon: React.ReactNode
}

export function TechnologyCard({ name, icon  }: TechnologyProps) {

  return (
    <div className="flex gap-4 items-center justify-center py-4 desktop:px-8 desktop:w-fit mobile:w-full bg-gray-900 rounded-xl ring-1 ring-zinc-800">
      {icon}
      <h1 className="text-zinc-50 text-xl font-bold">{name}</h1>
    </div>
  );
}
