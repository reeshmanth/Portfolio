'use client'

import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface Props {
  path: {
    id: string
    title: string
    image: string
    description: string
  }
  onView: () => void
}

const LearningPathCard = ({ path, onView }: Props) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black group">

      {/* LOGO IMAGE (same size as certificate image) */}
      <div className="relative w-full h-[210px] overflow-hidden rounded-xl flex items-center justify-center bg-white">
        <Image
          src={path.image}
          alt={path.title}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 25vw"
        />
      </div>

      {/* HOVER OVERLAY (same as certificate card) */}
      <div
        className="
          absolute inset-0
          bg-black/85
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-center items-center
          text-center px-4
        "
      >
        <h3 className="text-white font-semibold text-lg">
          {path.title}
        </h3>

        <p className="text-sm text-gray-300 mt-2">
          {path.description}
        </p>

        {/* VIEW PATH */}
        <button
          onClick={onView}
          className="mt-4 flex items-center gap-2 px-4 py-1.5
                     text-xs rounded bg-blue-600 text-white
                     hover:bg-blue-700"
        >
          View Path <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default LearningPathCard
