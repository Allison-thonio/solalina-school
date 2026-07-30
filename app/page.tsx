'use client'

import { useEffect, useState } from 'react'
import { DesktopPage } from '@/components/Desktop/DesktopPage'
import { MobilePage } from '@/components/Mobile/MobilePage'

export default function Page() {
  const [viewport, setViewport] = useState<'desktop' | 'mobile' | null>(null)

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth
      setViewport(width < 768 ? 'mobile' : 'desktop')
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  if (viewport === null) return null

  return viewport === 'mobile' ? <MobilePage /> : <DesktopPage />
}
