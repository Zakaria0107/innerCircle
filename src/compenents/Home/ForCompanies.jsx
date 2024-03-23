import React from 'react'
import mainImage from '../../images/Rectangle 15480.png'

const ForCompanies = () => {
  return (
    <div className='w-screen'>
        <div className='w-[80%] mx-auto py-20 flex justify-between items-center flex-wrap gap-16  xl:gap-24'>
            <div>
                <h2 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-[#0C0405] leading-[65px] '>For Companies</h2>
                <p className='font-normal text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-[#0C0405] mt-7'>Thank you for your interest in Inner Circle. Let's find your ideal hire!</p>
                <p className='font-normal text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-[#0C0405] mt-7'>To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
                <button className='mt-6 sm:mt-8 md:mt-10 xl:mt-36 text-xs xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-[#0C0405] bg-[#0C0405]'>Start Hiring Today</button>
            </div>
            <img src={mainImage} alt="mainImage" />
        </div>
    </div>
  )
}

export default ForCompanies