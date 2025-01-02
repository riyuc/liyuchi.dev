import { MessageSquare } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const ChatWithMe = () => {
  return (
    <Button
        className='rounded-full bg-custom-black hover:shadow-md
        dark:hover:bg-custom-offwhite/90 dark:bg-custom-offwhite'
    >
        <MessageSquare className="w-5 h-5 stroke-[1.5]"/>
        Let&apos;s have a chat!
        <div className="relative flex items-center justify-center">
            <div
            className="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75
                        dark:border-green-500 dark:bg-green-500
            "
            />
            <div className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></div>
        </div>
    </Button>
  )
}

export default ChatWithMe