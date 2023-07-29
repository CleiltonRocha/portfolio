import 
{ 
    ReactOriginalIcon, 
    TypescriptPlainIcon, 
    TailwindcssPlainIcon, 
    NextjsLineIcon, 
    NodejsPlainWordmarkIcon 
} from "react-devicons";

interface TagProps {
    repositoryName?: string;
    tagName?: string;
}

export function Tags({ repositoryName, tagName } : TagProps) {

    let tags = null;

    if (repositoryName === 'app-contacts-ui-react-native') {
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

      if (repositoryName === 'capsula-do-tempo') {
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

      if (repositoryName === 'desafios-bora-codar') {
        tags = (
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
              Front-end
            </div>
          </div>
        );
      }

      if (repositoryName === 'habits') {
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

      if (repositoryName === 'kanban-app') {
        tags = (
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
              Front-end
            </div>
          </div>
        );
      }

      if (repositoryName === 'twitter-ui-react') {
        tags = (
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
              Front-end
            </div>
          </div>
        );
      }

      if (tagName) {
        tags = (
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center desktop:px-6 desktop:py-2 mobile:px-4 mobile:py-2 rounded-full ring-[1.5px] ring-gray-700 font-semibold text-zinc-100">
              {tagName}
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

