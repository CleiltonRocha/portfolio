import { ArrowRight, ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Css3PlainIcon, NextjsLineIcon, NodejsOriginalWordmarkIcon, NodejsPlainWordmarkIcon, ReactOriginalIcon, TailwindcssPlainIcon, TypescriptPlainIcon } from "react-devicons";

type SliderItemsProps = {
    repositoryName: string
    repositoryDescription: string
    githubUrl: string
}

export function SliderItems(props: SliderItemsProps) {

    let technologies = null;

    console.log(props.repositoryName);

    if (props.repositoryName === 'App Contacts Ui React Native') {
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
          </div>
        );
      }
      if (props.repositoryName === 'Capsula Do Tempo') {
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


    return(
      <a href={props.githubUrl} className="w-full sticky top-10">
        <div className="w-full h-fit p-[2px] flex align-items-center justify-center bg-gradient-border rounded-3xl backdrop-blur-md bg-opacity-60 sticky top-10 card-projects">
            <div className="flex flex-col gap-6 items-start w-full h-fit bg-gradient rounded-3xl backdrop-blur-md bg-opacity-60 p-16 sticky top-10">
                <div className="h-[400px] w-full bg-gray-700 rounded-xl">
                    {/* Imagem do projeto aqui */}
                </div>
                <div className="flex flex-col items-start h-full gap-12">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-zinc-50 text-5xl font-semibold leading-tight tracking-tighter">{props.repositoryName}</h3>
                        <p className="text-gray-700 font-medium leading-tight text-2xl">{props.repositoryDescription}</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-zinc-50 text-2xl font-semibold leading-tight tracking-tighter">Tecnologias</h4>
                        <div className="flex flex-row gap-4">
                            {technologies}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </a>
    )
}
