'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HERO_SECTION } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'

interface DesktopHeroProps {
  onSeeCurriculumClick: () => void
  onEnrollClick: () => void
}

export function DesktopHero({ onSeeCurriculumClick, onEnrollClick }: DesktopHeroProps) {
  const cornerBracketVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.08,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  const focusReticleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
    pulse: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src={HERO_SECTION.backgroundImageDesktop}
        alt="Photography hero"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(8,8,8,0.85)]" />

      {/* Film Grain */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url(data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/></filter><rect width="100%" height="100%" fill="rgba(0,0,0,0.04)" filter="url(%23noiseFilter)"/></svg>)' }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* AF Corner Brackets */}
        <div className="absolute -top-24 -left-24 w-20 h-20 border-t-2 border-l-2" style={{ borderColor: 'var(--gold)' }} />
        <motion.div
          className="absolute -top-24 -left-24 w-20 h-20 border-t-2 border-l-2"
          initial="hidden"
          animate="visible"
          variants={cornerBracketVariants}
          custom={0}
          style={{ borderColor: 'var(--gold)' }}
        />

        <motion.div
          className="absolute -top-24 -right-24 w-20 h-20 border-t-2 border-r-2"
          initial="hidden"
          animate="visible"
          variants={cornerBracketVariants}
          custom={1}
          style={{ borderColor: 'var(--gold)' }}
        />

        <motion.div
          className="absolute -bottom-24 -left-24 w-20 h-20 border-b-2 border-l-2"
          initial="hidden"
          animate="visible"
          variants={cornerBracketVariants}
          custom={2}
          style={{ borderColor: 'var(--gold)' }}
        />

        <motion.div
          className="absolute -bottom-24 -right-24 w-20 h-20 border-b-2 border-r-2"
          initial="hidden"
          animate="visible"
          variants={cornerBracketVariants}
          custom={3}
          style={{ borderColor: 'var(--gold)' }}
        />

        {/* Focus Reticle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--gold)] rounded-full"
          initial="hidden"
          animate={['visible', 'pulse']}
          variants={focusReticleVariants}
        />

        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-widest uppercase mb-8"
          style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {HERO_SECTION.eyebrow}
        </motion.p>

        {/* Headline - Staggered Words */}
        <div className="mb-6 flex justify-center gap-3 flex-wrap">
          {HERO_SECTION.headline.map((word, idx) => (
            <motion.h1
              key={idx}
              className="font-serif font-600 text-5xl sm:text-6xl lg:text-7xl tracking-tight"
              style={{ color: 'var(--cream)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + idx * 0.08,
                duration: 0.7,
                ease: 'easeOut',
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-12"
          style={{ color: 'var(--cream-70)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {HERO_SECTION.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            onClick={onEnrollClick}
            className="px-8 py-3 text-sm font-600 tracking-tight transition-all duration-300"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--ink)',
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
            {HERO_SECTION.primaryCTA}
          </button>
          <button
            onClick={onSeeCurriculumClick}
            className="px-8 py-3 text-sm font-600 tracking-tight transition-all duration-300 border"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--gold)',
              fontSize: '0.85rem',
              letterSpacing: '0.03em',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-15)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {HERO_SECTION.secondaryCTA}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
