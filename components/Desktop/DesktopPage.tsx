'use client'

import { useRef } from 'react'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { DesktopHero } from './Hero'
import { DesktopExifStrip } from './ExifStrip'
import { DesktopFourPillars } from './FourPillars'
import { DesktopGallery } from './Gallery'
import { DesktopCurriculum } from './Curriculum'
import { DesktopProgramDetails } from './ProgramDetails'
import { DesktopEnrollForm } from './EnrollForm'

export function DesktopPage() {
  const enrollSectionRef = useRef<HTMLDivElement>(null)
  const curriculumSectionRef = useRef<HTMLDivElement>(null)

  const handleEnrollClick = () => {
    const enrollSection = document.getElementById('enroll')
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSeeCurriculumClick = () => {
    const curriculumSection = document.getElementById('curriculum')
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[#080808] text-[#F5F0E8]">
      <Nav onEnrollClick={handleEnrollClick} />
      <main>
        <DesktopHero onEnrollClick={handleEnrollClick} onSeeCurriculumClick={handleSeeCurriculumClick} />
        <DesktopExifStrip />
        <DesktopFourPillars />
        <DesktopGallery />
        <DesktopCurriculum />
        <DesktopProgramDetails />
        <DesktopEnrollForm />
      </main>
      <Footer onEnrollClick={handleEnrollClick} />
    </div>
  )
}
