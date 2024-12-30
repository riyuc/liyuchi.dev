"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnnouncementBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: {
    text: string
    icon?: string
  }[]
  speed?: number
}

export function AnnouncementBanner({
  messages,
  speed = 50,
  className,
  ...props
}: AnnouncementBannerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return
    
    const scrollContainer = containerRef.current
    const scroller = scrollerRef.current
    
    // Clone the content multiple times for seamless scrolling
    const contentWidth = scroller.children[0].clientWidth * messages.length
    const numClones = Math.ceil(scrollContainer.clientWidth / contentWidth) + 1
    
    // Create enough clones to fill the container width plus one more set
    for (let i = 0; i < numClones; i++) {
      messages.forEach((_, index) => {
        const clone = scroller.children[index].cloneNode(true)
        scroller.appendChild(clone)
      })
    }

    let scrollPosition = 0
    let animation: number

    const scroll = () => {
      if (!containerRef.current || !scrollerRef.current) return
      
      scrollPosition += 1
      scroller.style.transform = `translateX(-${scrollPosition}px)`

      // When we've scrolled the width of one set of items, reset to create seamless loop
      if (scrollPosition >= scroller.children[0].clientWidth * messages.length) {
        scrollPosition = 0
        scroller.style.transform = `translateX(0)`
      }

      animation = requestAnimationFrame(scroll)
    }

    scroll()

    return () => {
      if (animation) {
        cancelAnimationFrame(animation)
      }
    }
  }, [messages, speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-background border-b",
        "dark:bg-gray-950 dark:border-gray-800",
        className
      )}
      {...props}
    >
      <div
        ref={scrollerRef}
        className="inline-flex whitespace-nowrap py-3"
        style={{
          willChange: 'transform'
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center px-4 text-sm text-muted-foreground"
          >
            {message.icon && (
              <span className="mr-2" aria-hidden="true">
                {message.icon}
              </span>
            )}
            <span>{message.text}</span>
            <span className="mx-4 text-gray-400" aria-hidden="true">
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

