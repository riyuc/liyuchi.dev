'use client';

import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-12'>
        <div className='flex items-center space-x-4'>
            <h1 className='text-2xl font-bold'>Next.js Blog</h1>
        </div>
        <div className='flex items-center space-x-4'>
            <a href='#' className='text-lg font-semibold'>Home</a>
            <a href='#' className='text-lg font-semibold'>About</a>
            <a href='#' className='text-lg font-semibold'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar