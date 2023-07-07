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
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <Css3PlainIcon size="1.5rem" color="#b0b6c9" />
            </div>
          </div>
        );
      }
      if (props.repositoryName === 'Capsula Do Tempo') {
        technologies = (
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <NextjsLineIcon size="1.5rem" color="#b0b6c9" />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <TypescriptPlainIcon size="1.5rem" color="#b0b6c9" />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <TailwindcssPlainIcon size="1.5rem" color="#b0b6c9" />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <ReactOriginalIcon size="1.5rem" color="#b0b6c9" />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 w-14 h-14 rounded-full ring-1 ring-gray-700">
              <NodejsPlainWordmarkIcon size="1.5rem" color="#b0b6c9" />
            </div>
          </div>
        );
      }


    return(
        <div className="w-[1240px] h-[676px] p-[2px] flex align-items-center justify-center bg-gradient-border rounded-3xl backdrop-blur-md bg-opacity-60">
            <div className="flex flex-row gap-16 items-start w-[1240px] h-[676px] bg-gradient rounded-3xl backdrop-blur-md bg-opacity-60 p-16">
                <div className="h-full w-[464px] bg-gray-700 rounded-xl">
                    {/* Imagem do projeto aqui */}
                </div>
                <div className="flex flex-col items-start h-full gap-12 max-w-[536px]">
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
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-zinc-100 transition duration-300 ease-out border-2 border-gray-700 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-zinc-50 group-hover:translate-x-0 ease">
                            <ArrowRight size="1.5rem" color="#02040f"/>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-zinc-100 transition-all duration-300 transform group-hover:translate-x-full ease">Acessar repositório</span>
                        <span className="relative invisible">Acessar repositório</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
