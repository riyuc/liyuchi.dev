import React from 'react'
import Link from 'next/link'
import { User2, Mail, Folders } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import AnimatedBackground from '@/components/ui/animated-background'
import { IconFileCv, IconHomeHeart, } from '@tabler/icons-react'

const MainNavbar = () => {
  const tabs = [
    {
      label: 'Home',
      icon: <IconHomeHeart className="w-5 h-5 stroke-[1.5]" />,
      href: '/'
    },
    {
      label: 'Projects',
      icon: <Folders className="w-5 h-5 stroke-[1.5]" />,
      href: '/showcase'
    },
    {
      label: 'Resume',
      icon: <IconFileCv className="w-5 h-5 stroke-[1.5]" />,
      href: '/'
    },
    {
      label: 'About',
      icon: <User2 className="w-5 h-5 stroke-[1.5]" />,
      href: '/'
    },
  ]

  return (
      <nav className='flex items-center justify-between w-full'>
        <Link href="mailto:ducanh.nguyen.swe@gmail.com" className='nav-item invisible sm:visible p-0 flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background- shadow-sm hover:text-accent-foreground h-8 w-8 sm:h-10 sm:w-10 transition-colors duration-300 hover:bg-primary/10 dark:hover:bg-primary/10 rounded-full'>
            <Mail className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[1.5] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </Link>
        <div className='flex gap-6 sm:gap-3 p-2 sm:p-1.5 border border-zinc-200 dark:border-white/50 rounded-full bg-zinc-100/80 dark:bg-white/10 backdrop-blur'>
          <AnimatedBackground
            defaultValue={tabs[0].label}
            className='rounded-full bg-zinc-200 dark:bg-white'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.3,
            }}
          >
            {tabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                data-id={tab.label}
                className='nav-item inline-flex items-center justify-center p-3 sm:px-4 sm:py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-100 data-[checked=true]:text-zinc-950 dark:data-[checked=true]:text-zinc-950'
                aria-label={tab.label}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {tab.icon}
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
        <ModeToggle/>
      </nav>
  )
}

export default MainNavbar