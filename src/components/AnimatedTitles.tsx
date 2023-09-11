import React from "react";
type Props = {
  children: React.ReactNode;
};

export function AnimatedTitles({ children }: Props) {
  return (
    <div className="animate-fade-in-down bg-gradient-to-r from-zinc-50 to-gray-700 bg-clip-text text-center font-bold leading-lg tracking-tighter text-transparent desktop:text-xxs">
      {children}
    </div>
  );
}
