import React from 'react'
import hiringExpertsImg from '../../images/Rectangle 36.png'

const HiringExperts = () => {
  return (
    <div className='w-screen relative'>
        <img src={hiringExpertsImg} alt="" className='w-full lg:w-auto !h-full absolute  left-0 top-0  bottom-0 -z-10 ' />
        <div className='w-[80%] h-full mx-auto pt-20 pb-14'>
            <h2 className='font-bold text-2xl md:text-3xl xl:text-[40px] leading-[52px] text-white'>We are hiring experts</h2>
            <p className='font-semibold text-xs sm:text-sm md:text-base xl:text-lg leading-[41px] w-full lg:max-w-[615px] text-white mt-8' >Inner Circle is more than a recruiting firm; we're your partner in building a team that propels your mission forward. We equip leaders with the tools and knowledge to effectively manage and expand their global teams, ensuring that core management and delegation skills are accessible and straightforward to adopt. With us, you're not just filling roles; you're strategically amplifying your impact through the power of a carefully curated, global team.</p>
            <button className='mt-6 sm:mt-8 md:mt-10 xl:mt-36 text-xs xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-white'>Start Hiring Today</button>
        </div>
    </div>
  )
}

export default HiringExperts