import 
{ 
    ReactOriginalIcon, 
    TypescriptPlainIcon, 
    TailwindcssPlainIcon, 
    NextjsLineIcon, 
    NodejsPlainWordmarkIcon 
} from "react-devicons";

interface TagProps {
    projectName: string;
}

export function Tags({ projectName } : TagProps) {

  let tags = null;

  if (projectName === 'app-contacts-ui-react-native') {
      tags = (
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Mobile
          </div>
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Front-end
          </div>
        </div>
      );
    }

    if (projectName === 'capsula-do-tempo') {
      tags = (
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Mobile
          </div>
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Front-end
          </div>
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Back-end
          </div>
        </div>
      );
    }
    if (projectName === 'habits') {
      tags = (
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Front-end
          </div>
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Back-end
          </div>
        </div>
      );
    }
    if (projectName === 'kanban-app' || projectName === 'twitter-ui-react' || projectName === 'desafios-bora-codar') {
      tags = (
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            Front-end
          </div>
        </div>
      );
    }
    else {
      tags = (
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
            {projectName}
          </div>
        </div>
      );
    }
      
  return (
    <>
      {tags}
    </>
  )
};

