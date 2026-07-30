'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CURRICULUM } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

export function DesktopCurriculum() {
  const itemVariants = {
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
    <section className="bg-[#080808] py-20 px-4" id="curriculum">
      <SprocketDivider />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Checklist */}
          <ScrollReveal>
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
              >
                Curriculum
              </p>
              <h2
                className="font-serif text-4xl font-600 mb-8"
                style={{ color: 'var(--cream)' }}
              >
                {CURRICULUM.heading}
              </h2>

              <ul className="space-y-4">
                {CURRICULUM.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex gap-4 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                    custom={idx}
                  >
                    {/* Aperture Iris Mark */}
                    <div className="mt-1 flex-shrink-0">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center border"
                        style={{ borderColor: 'var(--gold)', borderWidth: '1.5px' }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--gold)' }}
                        />
                      </div>
                    </div>
                    <span
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--cream-70)' }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal>
            <div className="relative aspect-square overflow-hidden border" style={{ borderColor: 'var(--gold-40)' }}>
              <Image
                src={CURRICULUM.supportImage}
                alt="Photography equipment and workspace"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
