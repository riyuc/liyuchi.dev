'use client';

import React, { useState } from 'react'
import pfp from "@/public/pfp.jpg"
import Image from 'next/image'
import { TextMorph } from '@/components/ui/text-morph';
import { Button } from '@/components/ui/button';

const MainHero = () => {
    const [text, setText] = useState('Jason');

  return (
    <>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10'>
            <Image loading='eager' src={pfp} alt="pfp" className='h-24 sm:h-36 w-auto rounded-full bg-stone-400/30 dark:bg-custom-offwhite p-1'/>
            <div className='sm:grid sm:grid-rows-2 sm:justify-between sm:items-start text-center sm:text-left flex flex-row justify-center'>
                <Button 
                    variant="ghost"
                    onClick={() => {
                        setText(text === 'Jason' ? 'Duc Anh' : 'Jason');
                    }}
                    className='absolute sm:flex font-marlinSoft p-0 text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-custom-offwhite hover:bg-transparent'
                >
                    <TextMorph 
                        style={{ color: 'inherit' }}
                        className='font-marlinSoft text-4xl sm:text-5xl font-bold leading-10'
                    >
                        {text}
                    </TextMorph>
                    Nguyen
                </Button>
                <div className='invisible'></div>
                <p className='sm:-mt-2 mt-11 max-w-md text-center sm:text-left'>
                    Software Engineer. Learning to be a builder, brick by brick.
                    <br/>
                    Incoming SWE @ <a href="https://www.ibm.com/ca-en" target="_blank">IBM</a>. Currently @ <a href="https://intactlab.ca/" target="_blank">Intact Labs</a>.
                    <br/>
                    Studying CS @ <a href="https://www.concordia.ca/" target="_blank">Concordia University</a>.
                    <br/>
                </p>
            </div>
        </div>
    </>
  )
}

export default MainHero