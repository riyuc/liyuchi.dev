"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const words = [
  { text: "Xin Chào!", language: "Vietnamese" },
  { text: "よろしく", language: "Japanese" },
  { text: "Welcome!", language: "English" },
]

export function IntroAnimation() {
  const [index, setIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (index === words.length) {
      // When we've shown all words, mark the intro as complete
      setTimeout(() => setIsComplete(true), 1000)
      return
    }

    // Change word every 2 seconds
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, 2000)

    return () => clearTimeout(timer)
  }, [index])

  if (isComplete) {
    return null
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-custom-background w-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center w-screen">
        <AnimatePresence mode="wait">
          {index < words.length && (
            <motion.div
              key={words[index].text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              { words[index].language == "Japanese" ? (
                <h1 className="text-6xl font-bold tracking-tight">{words[index].text}</h1>
              ) : (
                <h1 className="text-6xl font-bold tracking-tight">{words[index].text}</h1>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

