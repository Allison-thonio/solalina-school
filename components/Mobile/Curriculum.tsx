'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CURRICULUM } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

export function MobileCurriculum() {
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
    <section className="bg-[#080808] py-16 px-4" id="curriculum">
      <SprocketDivider />
      <div className="max-w-lg mx-auto">
        {/* Heading */}
        <ScrollReveal containerClass="mb-8">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
          >
            Curriculum
          </p>
          <h2
            className="font-serif text-2xl font-600"
            style={{ color: 'var(--cream)' }}
          >
            {CURRICULUM.heading}
          </h2>
        </ScrollReveal>

        {/* Checklist */}
        <div className="mb-8">
          <ul className="space-y-3">
            {CURRICULUM.items.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex gap-3 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
                custom={idx}
              >
                {/* Aperture Iris Mark */}
                <div className="mt-0.5 flex-shrink-0">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center border"
                    style={{ borderColor: 'var(--gold)', borderWidth: '1.5px' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--gold)' }}
                    />
                  </div>
                </div>
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--cream-70)' }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Image */}
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
    </section>
  )
}
