'use client'

import SectionHeading from '@/components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#050709] py-6 custom-scrollbar">

      <SectionHeading>My Projects</SectionHeading>

      <div className="w-[80%] mx-auto mt-10">
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-8
        ">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Project
