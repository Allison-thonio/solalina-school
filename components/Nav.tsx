'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SCHOOL_NAME } from '@/app/data'

interface NavProps {
  onEnrollClick: () => void
}

export function Nav({ onEnrollClick }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#080808] border-b border-[rgba(201,168,76,0.15)]'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <div className="flex-1">
          <h2
            className="font-serif font-600 text-sm tracking-widest"
            style={{ letterSpacing: '0.15em', color: 'var(--cream)' }}
          >
            {SCHOOL_NAME}
          </h2>
        </div>

        {/* Enroll CTA */}
        <button
          onClick={onEnrollClick}
          className="px-5 py-2 text-sm font-500 tracking-tight transition-all duration-300"
          style={{
            backgroundColor: 'var(--gold)',
            color: 'var(--ink)',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '0.03em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.25)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Enroll Now
        </button>
      </div>
    </motion.nav>
  )
}
