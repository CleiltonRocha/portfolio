interface ButtonProps {
  name: string
  anchor?: string
  showIcon?: boolean
  icon?: React.ReactNode
  target?: string
}

export function Button({ name, anchor, showIcon, icon, target }: ButtonProps) {
  return (
    <a
      href={anchor}
      target={target}
      className="mt-5 flex items-center justify-center gap-3 rounded-full bg-zinc-100 px-8 py-3 font-semibold tracking-tighter text-black
      transition-all duration-300 hover:scale-105"
    >
      {name} {showIcon && icon}
    </a>
  )
}
