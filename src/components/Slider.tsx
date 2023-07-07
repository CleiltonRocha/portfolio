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
    const excludedRepositories = ['CleiltonRocha', 'gastoo'];
    useEffect(() => {
        async function getRepositories () {
            const response = await fetch('https://api.github.com/users/CleiltonRocha/repos')
            const repositories = await response.json();
            setRepositories(repositories)
        }
        getRepositories();
    }, [])

    return (
        <motion.div 
            ref={carousel}
            className="flex flex-row items-center gap-8 mt-24 justify-start pb-[100px] cursor-grab pr-[100px]" whileTap={{cursor: "grabbing"}}
            drag="x"
            dragConstraints={{right: 0, left: -width- 100}}
        >
            {
                repositories.filter(repository => !excludedRepositories.includes(repository.name))
                .map(repository => {
                    return(
                        <SliderItems key={repository.id} githubUrl={repository.html_url} repositoryName={formatRepositoryName(repository.name)} repositoryDescription={repository.description} />
                    )
                })
            }
        </motion.div>
    )
}

function formatRepositoryName(name: string): string {
    const formattedName = name.replace(/-/g, ' ');
    const capitalizedWords = formattedName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalizedWords.join(' ');
  }