import { TimelineItem } from "@/types/types";
import TimelineCard from "./timeline-card";

interface TitleLayoutProps {
    title: string;
    items: TimelineItem[];
    icon: React.ReactElement;
  }
  
  const TitleLayout = ({ title, items, icon }: TitleLayoutProps) => (
    <div className='flex-1'>
      <div className='relative flex flex-col lg:flex-row'>
        {/* Left side - Section indicator */}
        <div className='lg:w-64 lg:shrink-0 lg:pr-12'>
          <div className='sticky top-4'>
            {/* Large decorative icon */}
            <div className='relative mb-6'>
              <div className='absolute inset-0 bg-gradient-to-br from-zinc-200/80 dark:from-zinc-800/50 via-zinc-100/50 dark:via-transparent to-transparent rounded-3xl blur-2xl -z-10 opacity-50' />
              <div className='flex items-center gap-4 p-4'>
                <div className='p-3 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200/80 dark:border-zinc-800'>
                  {icon}
                </div>
                <div className='h-px flex-1 bg-gradient-to-r from-zinc-300 dark:from-zinc-700 via-zinc-200 dark:via-zinc-700/50 to-transparent' />
              </div>
            </div>
            
            {/* Title section */}
            <div className='space-y-2'>
              <h2 className='text-xl font-semibold text-zinc-800 dark:text-custom-offwhite tracking-tight'>{title}</h2>
              <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                {title === "Experience" 
                  ? "Professional journey and roles" 
                  : "Academic background"}
              </p>
            </div>
          </div>
        </div>
  
        {/* Right side - Content cards */}
        <div className='flex-1 relative lg:pt-16'>
          {/* Vertical connector */}
          <div className='absolute -left-px top-0 bottom-0 w-px'>
            <div className='sticky top-0 w-full h-screen'>
              <div className='absolute inset-0 bg-gradient-to-b from-zinc-300 dark:from-zinc-700 via-zinc-200/70 dark:via-zinc-700/50 to-transparent' />
            </div>
          </div>
          
          {/* Cards */}
          <div className='space-y-8 lg:pl-12'>
            {items.map((item, index) => (
              <div key={index} className='relative group'>
                {/* Connection dot */}
                <div className='absolute -left-[55px] top-12 flex items-center'>
                  <div className='w-3 h-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm
                    group-hover:scale-125 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-all duration-200' />
                </div>
                <TimelineCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

export default TitleLayout;