"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { IntroAnimation } from "@/components/intro-animation"
import { AppLayout } from "@/components/app-layout"

export function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroAnimation />}
      </AnimatePresence>
      {!showIntro && <AppLayout>{children}</AppLayout>}
    </>
  )
}
