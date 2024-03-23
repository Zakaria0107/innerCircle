import React from 'react'
import mainImage from '../../images/Rectangle 15480.png'

const ForCompanies = () => {
  return (
    <div className='w-screen'>
        <div className='w-[92%] xl:w-[86%] mx-auto py-16 sm:py-20 flex justify-between items-center flex-col-reverse md:flex-row gap-10  xl:gap-24'>
            <div>
                <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-[#0C0405] leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[65px]'>For Companies</h1>
                <p className='font-normal text-xs sm:text-sm md:text-base xl:text-lg  leading-4 sm:leading-5 lg:leading-[24px] text-[#0C0405] mt-7'>Thank you for your interest in Inner Circle. Let's find your ideal hire!</p>
                <p className='font-normal text-xs sm:text-sm md:text-base xl:text-lg leading-4 sm:leading-5 lg:leading-[24px] text-[#0C0405] mt-3 sm:mt-7'>To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
                <button className='mt-6 sm:mt-8 md:mt-10 xl:mt-36 text-xs xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-[#0C0405] bg-[#0C0405]'>Start Hiring Today</button>
            </div>
            <img src={mainImage} alt="mainImage" className='w-full md:w-1/2 xl:w-[610px]' />
        </div>
    </div>
  )
}

export default ForCompanies