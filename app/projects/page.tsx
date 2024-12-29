import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    return (
        <div className='mt-8 grid p-8 md:grid-cols-2 lg:grid-cols-3'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}
