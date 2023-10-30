import { Anchor } from "lucide-react";

interface ButtonProps {
    name: string;
    anchor?: string
    showIcon?: boolean;
    icon?: React.ReactNode;
}

export function Button({ name, anchor, showIcon, icon }: ButtonProps) {
    return (
        <a href={anchor} 
            className="flex items-center justify-center gap-3 py-3 px-8 bg-zinc-100 font-semibold text-blackpearl-950 tracking-tighter rounded-full mt-5
            hover:scale-105 transition-all duration-300">
            {name} {showIcon && icon}
        </a>
    )
}