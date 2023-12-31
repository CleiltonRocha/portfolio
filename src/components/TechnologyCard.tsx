interface TechnologyProps {
  name: string
  icon: React.ReactNode
}

export function TechnologyCard({ name, icon }: TechnologyProps) {
  return (
    <div className="flex items-center justify-center gap-4 rounded-xl bg-gray-950 py-4 ring-1 ring-zinc-800 mobile:w-full desktop:w-fit desktop:px-8">
      {icon}
      <h1 className="text-xl font-bold text-zinc-50">{name}</h1>
    </div>
  )
}
