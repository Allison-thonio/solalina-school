'use client'

import { motion } from 'framer-motion'
import { PROGRAM_DETAILS } from '@/app/data'
import { Users, Calendar, Zap } from 'lucide-react'
import { ScrollReveal } from '../ScrollReveal'
import { SprocketDivider } from '../SprocketDivider'

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8" />,
  Calendar: <Calendar className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
}

export function DesktopProgramDetails() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  const iconItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.08,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section className="bg-[#080808] py-20 px-4">
      <SprocketDivider />
      <div className="max-w-7xl mx-auto">
        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Duration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            custom={0}
          >
            <div
              className="border p-8 flex flex-col items-center text-center hover:border-[var(--gold)] transition-colors duration-300"
              style={{ borderColor: 'var(--gold-40)' }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}
              >
                {PROGRAM_DETAILS.card1.label}
              </p>
              <motion.p
                className="font-serif text-6xl font-600 mb-2"
                style={{ color: 'var(--gold)' }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {PROGRAM_DETAILS.card1.value}
              </motion.p>
              <p
                className="text-sm tracking-widest uppercase mb-6"
                style={{ color: 'var(--cream-70)', letterSpacing: '0.04em' }}
              >
                {PROGRAM_DETAILS.card1.unit}
              </p>
              <p
                className="text-base"
                style={{ color: 'var(--cream-70)' }}
              >
                {PROGRAM_DETAILS.card1.description}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Fee */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            custom={1}
          >
            <div
              className="border p-8 flex flex-col items-center text-center hover:border-[var(--gold)] transition-colors duration-300"
              style={{ borderColor: 'var(--gold-40)' }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: 'var(--gold)', letterSpacing: '0.08em' }}
              >
                {PROGRAM_DETAILS.card2.label}
              </p>
              <motion.p
                className="font-serif text-5xl font-600 mb-6"
                style={{ color: 'var(--gold)' }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {PROGRAM_DETAILS.card2.value}
              </motion.p>
              <p
                className="text-base"
                style={{ color: 'var(--cream-70)' }}
              >
                {PROGRAM_DETAILS.card2.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Icon Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {PROGRAM_DETAILS.icons.map((icon, idx) => (
            <motion.div
              key={icon.id}
              className="flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={iconItemVariants}
              custom={idx}
            >
              <motion.div
                className="mb-4"
                style={{ color: 'var(--gold)' }}
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {iconMap[icon.icon]}
              </motion.div>
              <h4
                className="font-serif text-lg font-600 mb-2"
                style={{ color: 'var(--cream)' }}
              >
                {icon.title}
              </h4>
              <p
                className="text-sm"
                style={{ color: 'var(--cream-70)' }}
              >
                {icon.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
