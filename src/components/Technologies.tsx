import {
  ReactOriginalIcon,
  TypescriptPlainIcon,
  TailwindcssPlainIcon,
  NextjsLineIcon,
  NodejsPlainWordmarkIcon,
  Html5PlainIcon,
  Css3PlainIcon,
  JavascriptPlainIcon,
} from "react-devicons";

interface TechnologyProps {
  projectName: string;
}

export function Technologies({ projectName }: TechnologyProps) {
  let technologies = null;

  if (projectName === "app-contacts-ui-react-native") {
    technologies = (
      <div className="flex flex-row gap-4">
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <TailwindcssPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
      </div>
    );
  }

  if (projectName === "capsula-do-tempo") {
    technologies = (
      <div className="flex flex-row gap-4">
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <NextjsLineIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <TailwindcssPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <NodejsPlainWordmarkIcon size="1.5rem" color="#b0b6c9" />
        </div>
      </div>
    );
  }

  if (projectName === "desafios-bora-codar") {
    technologies = (
      <div className="flex flex-row gap-4">
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <Html5PlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <Css3PlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <JavascriptPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
      </div>
    );
  }

  if (projectName === "habits") {
    technologies = (
      <div className="flex flex-row gap-4">
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <TailwindcssPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <NodejsPlainWordmarkIcon size="1.5rem" color="#b0b6c9" />
        </div>
      </div>
    );
  }

  if (projectName === "kanban-app" || projectName === "twitter-ui-react") {
    technologies = (
      <div className="flex flex-row gap-4">
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-900 ring-1 ring-gray-700">
          <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
        </div>
      </div>
    );
  }

  return <>{technologies}</>;
}
