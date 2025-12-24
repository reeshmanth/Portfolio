'use client'

import Image from 'next/image'
import React from 'react'
import { FaDownload, FaExternalLinkAlt, FaEye, FaCopy } from 'react-icons/fa'


interface Props {
  cert: {
    title: string
    issuer?: string
    year?: string
    image: string
    credentialId?: string
    download?: string
    verify?: string
  }
  onClick: () => void
}

const CertificateCard = ({ cert, onClick }: Props) => {
const copyCredential = (e: React.MouseEvent) => {
  e.stopPropagation()
  if (cert.credentialId) {
    navigator.clipboard.writeText(cert.credentialId)
  }
}


  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black group">

      {/* Certificate Image (FULLY VISIBLE) */}
     <div className="relative w-full h-[210px] overflow-hidden rounded-xl">
  <Image
    src={cert.image}
    alt={cert.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 25vw"
  />
</div>


      {/* DARK HOVER OVERLAY */}
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
          {cert.title}
        </h3>
        <p className="text-sm text-gray-300 mt-1">
          {cert.issuer} • {cert.year}
        </p>
        {/* Credential ID */}
            {cert.credentialId && (
            <div className="mt-3 flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-md">
                <span className="text-gray-300 truncate max-w-[180px]">
                ID: {cert.credentialId}
                </span>
                <button
                onClick={copyCredential}
                className="text-gray-400 hover:text-white"
                title="Copy Credential ID"
                >
                <FaCopy />
                </button>
            </div>
            )}

        {/* ACTION BUTTONS */}
        <div className="mt-4 flex gap-3">
          {/* View */}
          <button
            onClick={onClick}
            className="flex items-center gap-1 px-3 py-1.5 text-xs rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            <FaEye /> View
          </button>

          {/* Download */}
          {cert.download && (
            <a
              href={cert.download}
              download
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1.5 text-xs rounded bg-green-600 text-white hover:bg-green-700"
            >
              <FaDownload /> Download
            </a>
          )}

          {/* Verify */}
          {cert.verify && (
            <a
              href={cert.verify}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1.5 text-xs rounded bg-purple-600 text-white hover:bg-purple-700"
            >
              <FaExternalLinkAlt /> Verify
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CertificateCard
