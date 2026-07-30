'use client'

import { motion, Variants } from 'framer-motion'
import { FOUR_PILLARS } from '@/app/data'
import { Camera, Mountain, Lightbulb, Users } from 'lucide-react'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

const iconMap: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-8 h-8" />,
  Mountain: <Mountain className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
}

export function DesktopFourPillars() {
  const pillarVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.08,
        duration: 0.6,
      },
    }),
  }

  return (
    <section className="bg-[#080808] py-20 px-4">
      <SprocketDivider />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal containerClass="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
          >
            How It Works
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-600"
            style={{ color: 'var(--cream)' }}
          >
            Learn. Explore. Create. Grow.
          </h2>
        </ScrollReveal>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOUR_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={pillarVariants}
              custom={idx}
            >
              <div
                className="border p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden"
                style={{ borderColor: 'var(--gold-40)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.04)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold-40)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
                />
                {/* Circular Badge with Letter */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-600"
                  style={{
                    backgroundColor: 'var(--gold-15)',
                    borderColor: 'var(--gold-40)',
                    border: '1px solid var(--gold-40)',
                    color: 'var(--gold)',
                  }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(201,168,76,0.4)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {pillar.letter}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="mb-4"
                  style={{ color: 'var(--gold)' }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {iconMap[pillar.icon]}
                </motion.div>

                {/* Label */}
                <h3
                  className="font-serif text-xl font-600 mb-3"
                  style={{ color: 'var(--cream)' }}
                >
                  {pillar.label}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--cream-70)', fontSize: '0.95rem' }}>
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
