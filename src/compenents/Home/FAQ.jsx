import React from 'react'
import FaqImg from '../../images/faq.png'
import Down from '../../images/down.png'
const FAQ = () => {
  return (
    <div id='faqs' className='w-screen bg-faqImage bg-cover bg-no-repeat'>
      <div className='pt-8 pb-16'>
        <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-white leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[65px] text-center mb-9 md:mb-14'>FAQs</h1>
        <div className='w-[92%] xl:w-[86%] mx-auto'>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-xs sm:text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-xs sm:text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-xs sm:text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-xs sm:text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5'>
            <p className='font-semibold text-xs sm:text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ