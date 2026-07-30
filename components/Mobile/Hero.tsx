'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HERO_SECTION } from '@/app/data'

interface MobileHeroProps {
  onSeeCurriculumClick: () => void
  onEnrollClick: () => void
}

export function MobileHero({ onSeeCurriculumClick, onEnrollClick }: MobileHeroProps) {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image - Portrait Crop */}
      <Image
        src={HERO_SECTION.backgroundImageMobile}
        alt="Photography hero"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(8,8,8,0.95)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-sm mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-widest uppercase mb-6"
          style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {HERO_SECTION.eyebrow}
        </motion.p>

        {/* Headline - Stacked */}
        <div className="mb-4">
          {HERO_SECTION.headline.map((word, idx) => (
            <motion.h1
              key={idx}
              className="font-serif font-600 text-4xl tracking-tight"
              style={{ color: 'var(--cream)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + idx * 0.1,
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-sm mb-8 leading-relaxed"
          style={{ color: 'var(--cream-70)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {HERO_SECTION.subheadline}
        </motion.p>

        {/* CTAs - Stacked on mobile */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            onClick={onEnrollClick}
            className="w-full px-6 py-2.5 text-xs font-600 tracking-tight transition-all duration-300"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--ink)',
              fontSize: '0.8rem',
              letterSpacing: '0.03em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {HERO_SECTION.primaryCTA}
          </button>
          <button
            onClick={onSeeCurriculumClick}
            className="w-full px-6 py-2.5 text-xs font-600 tracking-tight transition-all duration-300 border"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--gold)',
              fontSize: '0.8rem',
              letterSpacing: '0.03em',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {HERO_SECTION.secondaryCTA}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
