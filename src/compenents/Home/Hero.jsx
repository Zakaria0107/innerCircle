import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen  h-[450px] sm:min-h-[600px] xl:min-h-[875px] bg-hero-home bg-center bg-cover bg-no-repeat '>
        <div className='w-[92%] xl:w-[86%] h-full mx-auto flex justify-center items-center flex-col'>
            <h1 className='mt-16 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[64px] leading-[31px] sm:leading-[45px] md:leading-[60px] xl:leading-[80px] text-white text-center'>Matching the best global talent with the best companies in the world</h1>
            <p className='max-w-[977px] mt-3 xl:mt-[66px] font-normal leading-[15px] sm:leading-[18px] md:leading-[24px] text-xs sm:text-sm md:text-base xl:text-lg text-center text-[#F9F7FA]'>Access top-tier global hires with Inner Circle Talent, your ally in acquiring top-tier executive assistant, virtual assistant, and marketing professionals at a fraction of the US cost.</p>
            <a href="/contact">
              <button className='mt-6 sm:mt-8 md:mt-10 xl:mt-36 text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-white'>Start Hiring Today</button>
            </a>
        </div>
    </div>
  )
}

export default Hero