
import { 
  ReactOriginalIcon, 
  TypescriptPlainIcon, 
  TailwindcssPlainIcon, 
  NextjsLineIcon, 
  NodejsPlainWordmarkIcon, 
  Html5PlainIcon, 
  Css3PlainIcon, 
  JavascriptPlainIcon
} from 'react-devicons';

interface TechnologyProps {
    repositoryName: string
}

export function Technologies({ repositoryName } : TechnologyProps) {

    let technologies = null;

    if (repositoryName === 'app-contacts-ui-react-native') {
      technologies = (
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <TailwindcssPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </div>
      );
    }

    if (repositoryName === 'capsula-do-tempo') {
      technologies = (
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <NextjsLineIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
            <TailwindcssPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <NodejsPlainWordmarkIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </div>
      );
    }

    if (repositoryName === 'desafios-bora-codar') {
      technologies = (
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <Html5PlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <Css3PlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <JavascriptPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </div>
      );
    }

    if (repositoryName === 'habits') {
      technologies = (
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
            <TailwindcssPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <NodejsPlainWordmarkIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </div>
      );
    }

    if (repositoryName === 'kanban-app' || repositoryName === 'twitter-ui-react') {
      technologies = (
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700 cursor-pointer">
            <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
          </div>
        </div>
      );
    }

    return(
        <>
            {technologies} 
        </>
    )
}