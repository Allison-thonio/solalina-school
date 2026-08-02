'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { GALLERY_IMAGES } from '@/app/data'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

export function DesktopGallery() {
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 12 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
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
            The Work
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-600"
            style={{ color: 'var(--cream)' }}
          >
            See It. Shoot It. Share It.
          </h2>
        </ScrollReveal>

        {/* Gallery Grid - 4 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageVariants}
              custom={idx}
            >
              <div
                className="relative aspect-square overflow-hidden border group cursor-pointer transition-shadow duration-300"
                style={{ borderColor: 'var(--gold)', borderWidth: '2px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(201,168,76,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-all duration-500 group-hover:scale-[1.05] group-hover:brightness-75"
                />

                {/* Frame Tag */}
                <motion.div
                  className="absolute bottom-4 right-4 px-3 py-1 text-xs tracking-widest"
                  style={{
                    backgroundColor: 'var(--ink)',
                    color: 'var(--gold)',
                    fontFamily: 'JetBrains Mono, monospace',
                    border: '1px solid var(--gold-40)',
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
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
