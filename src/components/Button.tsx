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
      className="flex items-center justify-center gap-3 py-3 px-8 bg-zinc-100 font-semibold text-black tracking-tighter rounded-full mt-5
      hover:scale-105 transition-all duration-300"
    >
      {name} {showIcon && icon}
    </a>
  )
}
