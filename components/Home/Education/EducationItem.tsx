"use client"

import React from 'react'
import Tilt from 'react-parallax-tilt'

interface Props {
  title: string
  institution: string
  year: string
  score?: string
  description: string
  current?: boolean
  isLeft: boolean
}

const EducationItem = ({
  title,
  institution,
  year,
  score,
  description,
  current,
  isLeft
}: Props) => {
  return (
    <div
      className={`relative flex flex-col md:w-1/2 ${
        isLeft ? 'md:self-start md:pr-12 md:text-right' : 'md:self-end md:pl-12'
      }`}
    >
      {/* Timeline dot */}
      <span
        className={`hidden md:block absolute top-4 w-4 h-4 rounded-full ${
          current
            ? 'bg-blue-500 scale-110'
            : 'bg-gray-400'
        } ${
          isLeft ? 'right-[-8px]' : 'left-[-8px]'
        }`}
      />

      {/* Year */}
      <span
  className="
    inline-block
    mb-4
    px-4
    py-1.5
    text-xs
    font-semibold
    text-white
    rounded-full
    bg-gradient-to-r from-purple-600 to-blue-600
    shadow-md
    tracking-wide
  "
>
  {year}
</span>


      {/* 🔥 PREMIUM SERVICE-STYLE CARD */}
      <Tilt
        tiltMaxAngleX={1}
        tiltMaxAngleY={1}
        className="
          shadow-2xl
          p-8
          rounded-xl
          bg-gradient-to-br from-purple-900/50 to-blue-900/50
          border border-purple-500/20
          hover:border-purple-400/40
          transition-all duration-300
          hover:scale-[1.03]
          group
        "
      >
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {title}
          </h3>

          <p className="text-sm text-gray-300">
            {institution}
          </p>

          {score && (
            <p className="text-sm font-semibold text-blue-300">
              {score}
            </p>
          )}

          <p className="text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </Tilt>
    </div>
  )
}

export default EducationItem
