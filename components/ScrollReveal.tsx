'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  staggerChildren?: boolean
  containerClass?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  staggerChildren = false,
  containerClass = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? 0.06 : 0,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className={containerClass}
      >
        {Array.isArray(children)
          ? children.map((child, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className={containerClass}
    >
      {children}
    </motion.div>
  )
}
