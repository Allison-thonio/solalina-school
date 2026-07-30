'use client'

import { motion } from 'framer-motion'
import { STAT_STRIP } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'

export function DesktopExifStrip() {
  const statVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.06,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <ScrollReveal>
      <section className="bg-[#080808] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="border px-8 py-8 flex items-center justify-between gap-8"
            style={{ borderColor: 'var(--gold-40)' }}
          >
            {STAT_STRIP.map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex-1 text-center sm:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={statVariants}
                custom={idx}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: 'var(--gold)', letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-2xl sm:text-3xl font-600 mb-1"
                  style={{ color: 'var(--gold)' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs"
                  style={{ color: 'var(--cream-70)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
