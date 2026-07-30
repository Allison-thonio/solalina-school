'use client'

import { useRef } from 'react'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { MobileHero } from './Hero'
import { MobileExifStrip } from './ExifStrip'
import { MobileFourPillars } from './FourPillars'
import { MobileGallery } from './Gallery'
import { MobileCurriculum } from './Curriculum'
import { MobileProgramDetails } from './ProgramDetails'
import { MobileEnrollForm } from './EnrollForm'

export function MobilePage() {
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
        <MobileHero onEnrollClick={handleEnrollClick} onSeeCurriculumClick={handleSeeCurriculumClick} />
        <MobileExifStrip />
        <MobileFourPillars />
        <MobileGallery />
        <MobileCurriculum />
        <MobileProgramDetails />
        <MobileEnrollForm />
      </main>
      <Footer onEnrollClick={handleEnrollClick} />
    </div>
  )
}
