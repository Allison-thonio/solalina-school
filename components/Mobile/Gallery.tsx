'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GALLERY_IMAGES } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

export function MobileGallery() {
  return (
    <section className="bg-[#080808] py-16 px-4">
      <SprocketDivider />
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <ScrollReveal containerClass="text-center mb-10">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
          >
            The Work
          </p>
          <h2
            className="font-serif text-2xl font-600"
            style={{ color: 'var(--cream)' }}
          >
            See It. Shoot It. Share It.
          </h2>
        </ScrollReveal>

        {/* 1-Up Gallery with Scroll Snap */}
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              className="flex-shrink-0 w-full aspect-square snap-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative w-full h-full overflow-hidden border group cursor-pointer"
                style={{ borderColor: 'var(--gold)', borderWidth: '2px' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-75"
                />

                {/* Frame Tag */}
                <motion.div
                  className="absolute bottom-3 right-3 px-2 py-1 text-xs tracking-widest"
                  style={{
                    backgroundColor: 'var(--ink)',
                    color: 'var(--gold)',
                    fontFamily: 'JetBrains Mono, monospace',
                    border: '1px solid var(--gold-40)',
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {img.frameTag}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
