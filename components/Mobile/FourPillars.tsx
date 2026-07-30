'use client'

import { motion } from 'framer-motion'
import { FOUR_PILLARS } from '@/app/data'
import { Camera, Mountain, Lightbulb, Users } from 'lucide-react'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

const iconMap: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-6 h-6" />,
  Mountain: <Mountain className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
}

export function MobileFourPillars() {
  const pillarVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section className="bg-[#080808] py-16 px-4">
      <SprocketDivider />
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <ScrollReveal containerClass="text-center mb-12">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
          >
            How It Works
          </p>
          <h2
            className="font-serif text-2xl font-600"
            style={{ color: 'var(--cream)' }}
          >
            Learn. Explore. Create. Grow.
          </h2>
        </ScrollReveal>

        {/* Two Column Grid on Mobile */}
        <div className="grid grid-cols-2 gap-4">
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
                className="border p-4 flex flex-col items-center text-center hover:border-[var(--gold)] transition-colors duration-300"
                style={{ borderColor: 'var(--gold-40)' }}
              >
                {/* Circular Badge */}
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-lg font-600"
                  style={{
                    backgroundColor: 'var(--gold-15)',
                    borderColor: 'var(--gold-40)',
                    border: '1px solid var(--gold-40)',
                    color: 'var(--gold)',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {pillar.letter}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="mb-2"
                  style={{ color: 'var(--gold)' }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {iconMap[pillar.icon]}
                </motion.div>

                {/* Label */}
                <h3
                  className="font-serif text-base font-600 mb-1"
                  style={{ color: 'var(--cream)' }}
                >
                  {pillar.label}
                </h3>

                {/* Description */}
                <p
                  className="text-xs leading-snug"
                  style={{ color: 'var(--cream-70)' }}
                >
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
