import { TimelineItem } from "@/types/types";
import { useState } from "react";
import { Disclosure, DisclosureContent, DisclosureTrigger } from "./ui/disclosure";
import Link from "next/link";
import Image from "next/image";
import { IconChevronDown, IconExternalLink } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const TimelineCard = ({ item }: { item: TimelineItem }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className='group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-[background-color] duration-300 max-w-md'>
        {/* Separation line */}
        <div className='absolute inset-0 bg-gradient-to-b from-zinc-100/80 dark:from-zinc-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
        <Disclosure
          open={isOpen}
          onOpenChange={setIsOpen}
          className='w-full'
        >
          <DisclosureTrigger>
            <div className='relative p-5 cursor-pointer h-full max-w-full'>
              <div className='flex flex-col gap-3 h-full'>
                <div className='flex items-start justify-between'>
                  <Link
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group/link flex items-center gap-3 hover:opacity-90 transition-opacity'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className='relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900 p-2 border border-zinc-200 dark:border-zinc-700 shadow-sm'>
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className='object-contain'
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className={cn(
                        'text-base font-semibold text-zinc-800 dark:text-custom-offwhite',
                        'flex items-center gap-1.5 group-hover/link:text-zinc-600 dark:group-hover/link:text-zinc-300 transition-colors'
                      )}>
                        {item.company}
                        <IconExternalLink className="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                      </span>
                      <p className='text-sm font-medium text-zinc-500 dark:text-zinc-400'>{item.title}</p>
                    </div>
                  </Link>
                  <div className='flex items-center gap-2'>
                    <p className='text-xs font-medium text-zinc-400 dark:text-zinc-500'>{item.duration}</p>
                    <IconChevronDown 
                      className={cn(
                        'w-4 h-4 text-zinc-300 dark:text-zinc-500 transition-transform duration-200',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </div>
                </div>
                
                <ul className='space-y-1.5'>
                  {item.description.map((desc, i) => (
                    <li key={i} className='text-sm text-zinc-500 dark:text-zinc-400 font-medium'>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DisclosureTrigger>
          <DisclosureContent>
            <div className='px-5 pb-5 border-t border-zinc-100 dark:border-zinc-800'>
              <div className='pt-4'>
                <ul className='space-y-3'>
                  {item.additional?.map((detail, i) => (
                    <li key={i} className='text-sm text-zinc-500 dark:text-zinc-400 relative pl-4 before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-600 break-words'>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DisclosureContent>
        </Disclosure>
      </div>
    )
  }

export default TimelineCard;