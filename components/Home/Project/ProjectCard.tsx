'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FiExternalLink,
  FiGithub,
  FiDownload,
  FiBookOpen,
} from 'react-icons/fi'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    image: string
    url: string
    description: string
    technologies: string[]
    github?: string
    readme?: string
    download?: string
  }
  index: number
}

/* ---------------- ICON BUTTON ---------------- */

interface IconButtonProps {
  href: string
  label: string
  icon: React.ReactNode
  bg: string
}

const IconButton: React.FC<IconButtonProps> = ({
  href,
  label,
  icon,
  bg,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`
        group
        flex items-center
        h-10
        w-10 hover:w-32
        px-3
        ${bg}
        rounded-full
        overflow-hidden
        transition-all duration-300 ease-in-out
      `}
    >
      <span className="text-lg shrink-0">{icon}</span>

      <span
        className="
          ml-2.5
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-200 delay-100
          text-sm font-medium
        "
      >
        {label}
      </span>
    </Link>
  )
}

/* ---------------- PROJECT CARD ---------------- */

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="
      bg-gradient-to-br from-blue-950/50 to-purple-950/50
      p-6 rounded-xl
      hover:scale-105
      transition-all duration-300
      border border-blue-500/20
      hover:border-blue-400/40
      group
    ">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Link href={project.url} target="_blank">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              View Project
            </span>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-5">
          {/* Live */}
          <IconButton
            href={project.url}
            label="Live"
            icon={<FiExternalLink />}
            bg="bg-blue-600 hover:bg-blue-700 text-white"
          />

          {/* Readme */}
          {project.readme && (
            <IconButton
              href={project.readme}
              label="Readme"
              icon={<FiBookOpen />}
              bg="bg-purple-600 hover:bg-purple-700 text-white"
            />
          )}

          {/* Git */}
          {project.github && (
            <IconButton
              href={project.github}
              label="Git"
              icon={<FiGithub />}
              bg="bg-gray-700 hover:bg-gray-600 text-white"
            />
          )}

          {/* Download */}
          {project.download && (
            <IconButton
              href={project.download}
              label="Download"
              icon={<FiDownload />}
              bg="bg-green-600 hover:bg-green-700 text-white"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
