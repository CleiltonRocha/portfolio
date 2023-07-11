"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SliderItems } from './SliderItems';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }

export function Slider() {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth((carousel.current?.scrollWidth || 0) - (carousel.current?.offsetWidth || 0))
    }, [])

    const [repositories, setRepositories] = useState<Repository[]>([])
    const excludedRepositories = ['CleiltonRocha', 'gastoo', 'portfolio'];
    useEffect(() => {
        async function getRepositories () {
            const response = await fetch('https://api.github.com/users/CleiltonRocha/repos')
            const repositories = await response.json();
            setRepositories(repositories)
        }
        getRepositories();
    }, [])

    return (
        <div 
            className="flex flex-col items-center gap-8 justify-start w-full"
        >
            {
                repositories.filter(repository => !excludedRepositories.includes(repository.name))
                .map(repository => {
                    return(
                        <SliderItems key={repository.id} githubUrl={repository.html_url} repositoryName={formatRepositoryName(repository.name)} repositoryDescription={repository.description} />
                    )
                })
            }
        </div>
    )
}

function formatRepositoryName(name: string): string {
    const formattedName = name.replace(/-/g, ' ');
    const capitalizedWords = formattedName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalizedWords.join(' ');
  }