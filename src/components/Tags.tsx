interface TagProps {
  projectName: string;
}

export function Tags({ projectName }: TagProps) {
  let tags = null;

  if (projectName === "app-contacts-ui-react-native") {
    tags = (
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Mobile
        </div>
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Front-end
        </div>
      </div>
    );
  } else if (projectName === "capsula-do-tempo") {
    tags = (
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Mobile
        </div>
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Front-end
        </div>
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Back-end
        </div>
      </div>
    );
  } else if (projectName === "habits") {
    tags = (
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Front-end
        </div>
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Back-end
        </div>
      </div>
    );
  } else if (
    projectName === "kanban-app" ||
    projectName === "twitter-ui-react" ||
    projectName === "desafios-bora-codar"
  ) {
    tags = (
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          Front-end
        </div>
      </div>
    );
  } else {
    tags = (
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-center rounded-full font-semibold text-zinc-100 ring-[1.5px] ring-gray-700 mobile:px-4 mobile:py-2 desktop:px-6 desktop:py-2">
          {projectName}
        </div>
      </div>
    );
  }

  return <>{tags}</>;
}
