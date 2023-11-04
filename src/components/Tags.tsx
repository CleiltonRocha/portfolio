interface TagProps {
  tagName: string;
}

export function Tags({ tagName }: TagProps) {
  return(
    <div className="flex flex-row gap-4">
      <div className="flex items-center text-xs justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-zinc-100/10 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
        {tagName}
      </div>
    </div>
  );
}
