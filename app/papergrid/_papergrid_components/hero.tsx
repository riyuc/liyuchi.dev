import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full pb-24'>
      {/* Inner */}
      <div className='flex flex-col max-w-7xl mx-auto px-40 gap-14 z-10 relative'>
        {/* Top */}
        <div className='flex align-center gap-[102px] mx-auto max-w-screen-md'>
          {/* Left */}
          <div className='text-custom-primary'>Paper Grid Layout</div>
          {/* Right */}
          <div className='text-custom-primary'>Inspired by hex.tech</div>
        </div>
      </div>
    </div>
  )
}

export default Hero