'use client'

import Image from 'next/image'
import React from 'react'
import { CgClose } from 'react-icons/cg'

interface Props {
  image: string
  onClose: () => void
}

const CertificateModal = ({ image, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
      onClick={onClose} // ✅ CLICK OUTSIDE CLOSES
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl z-10"
      >
        <CgClose />
      </button>

      {/* Image Container */}
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // ❌ PREVENT CLOSE ON IMAGE CLICK
      >
        <Image
          src={image}
          alt="Certificate"
          width={900}
          height={600}
          className="rounded-lg shadow-2xl max-h-[85vh] w-auto"
        />
      </div>
    </div>
  )
}

export default CertificateModal
