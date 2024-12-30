"use client"

import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex min-h-screen flex-col items-center justify-center space-y-8"
    >
      <motion.div variants={item} className="w-full">
        {children}
      </motion.div>
    </motion.div>
  )
}

