'use client'

import { motion } from 'framer-motion'
import { STAT_STRIP } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'

export function MobileExifStrip() {
  const statVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.08,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <ScrollReveal>
      <section className="bg-[#080808] py-10 px-4">
        <div className="max-w-lg mx-auto">
          <div
            className="border px-6 py-8 space-y-8"
            style={{ borderColor: 'var(--gold-40)' }}
          >
            {STAT_STRIP.map((stat, idx) => (
              <motion.div
                key={idx}
                className="border-b last:border-b-0 pb-6 last:pb-0"
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
                  className="text-xl font-600 mb-1"
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
