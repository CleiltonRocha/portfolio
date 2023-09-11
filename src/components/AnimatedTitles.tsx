import React from 'react';
type Props =  {
  children: React.ReactNode;
}

export function AnimatedTitles({ children }: Props) {

  return (
    <div className="font-bold desktop:text-xxs text-center leading-lg tracking-tighter from-zinc-50 to-gray-700 bg-gradient-to-r bg-clip-text text-transparent animate-fade-in-down">
     {children}
    </div>
  )
  
}