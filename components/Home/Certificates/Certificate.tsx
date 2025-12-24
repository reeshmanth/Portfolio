'use client'

import SectionHeading from '@/components/Helper/SectionHeading'
import SideHeading from '@/components/Helper/SideHeading'
import React, { useState } from 'react'

import { certificatesData } from '@/Data/CertificatesData'
import { learningPathsData } from '@/Data/learningPathsData'

import CertificateCard from './CertificateCard'
import CertificateModal from './CertificateModal'
import LearningPathCard from './LearningPathCard'

const groups = [
  { key: "global", label: "Global Certifications" },
  { key: "academic", label: "Academic & Course Certifications" },
  { key: "coursera", label: "Coursera Specialization" },
  { key: "learning", label: "Learning Paths" },
]

const Certificates = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activePath, setActivePath] = useState<string | null>(null)

  /* ================= LEARNING PATH PAGE ================= */
  if (activePath) {
    const pathCerts = certificatesData.filter(
      cert => cert.path === activePath
    )

    return (
      <div className="flex-1 overflow-y-auto bg-[#0f0715] py-6 custom-scrollbar">
        <div className="w-[80%] mx-auto">

          <button
            onClick={() => setActivePath(null)}
            className="mb-6 text-sm text-blue-400 hover:underline"
          >
            ← Back to Learning Paths
          </button>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pathCerts.map(cert => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onClick={() => setActiveImage(cert.image)}
              />
            ))}
          </div>

        </div>

        {activeImage && (
          <CertificateModal
            image={activeImage}
            onClose={() => setActiveImage(null)}
          />
        )}
      </div>
    )
  }

  /* ================= VIEW ALL CATEGORY PAGE ================= */
  if (activeCategory) {
    const allCerts = certificatesData.filter(
      cert => cert.category === activeCategory
    )

    return (
      <div className="flex-1 overflow-y-auto bg-[#0f0715] py-6 custom-scrollbar">
        <div className="w-[80%] mx-auto">

          <button
            onClick={() => setActiveCategory(null)}
            className="mb-6 text-sm text-blue-400 hover:underline"
          >
            ← Back to Certificates
          </button>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allCerts.map(cert => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onClick={() => setActiveImage(cert.image)}
              />
            ))}
          </div>

        </div>

        {activeImage && (
          <CertificateModal
            image={activeImage}
            onClose={() => setActiveImage(null)}
          />
        )}
      </div>
    )
  }

  /* ================= MAIN PAGE ================= */
  return (
    <div className="flex-1 overflow-y-auto bg-[#0f0715] py-6 custom-scrollbar">
      <SectionHeading>Certificates</SectionHeading>

      <div className="w-[80%] mx-auto mt-10 space-y-12">
        {groups.map(group => {

          /* LEARNING PATHS */
          if (group.key === "learning") {
            return (
              <div key={group.key}>
                <SideHeading text={group.label} />

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {learningPathsData.map(path => (
                    <LearningPathCard
                      key={path.id}
                      path={path}
                      onView={() => setActivePath(path.id)} // ✅ FIXED
                    />
                  ))}
                </div>
              </div>
            )
          }

          /* NORMAL CERTIFICATES */
          const filtered = certificatesData.filter(
            cert => cert.category === group.key
          )

          if (filtered.length === 0) return null

          const visible =
            group.key === "global"
              ? filtered
              : filtered.slice(0, 7)

          return (
            <div key={group.key}>
              <SideHeading text={group.label} />

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visible.map(cert => (
                  <CertificateCard
                    key={cert.id}
                    cert={cert}
                    onClick={() => setActiveImage(cert.image)}
                  />
                ))}

                {group.key !== "global" && filtered.length > 7 && (
                  <button
                    onClick={() => setActiveCategory(group.key)}
                    className="
                      flex flex-col items-center justify-center
                      rounded-xl border border-dashed border-white/30
                      text-white/70 hover:text-white
                      hover:border-white transition-all
                      h-[210px]
                    "
                  >
                    <span className="text-lg font-semibold">View All</span>
                    <span className="text-sm mt-1">
                      ({filtered.length} certificates)
                    </span>
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {activeImage && (
        <CertificateModal
          image={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  )
}

export default Certificates
