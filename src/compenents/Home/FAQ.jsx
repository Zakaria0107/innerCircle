import React from 'react'
import FaqImg from '../../images/faq.png'
import Down from '../../images/down.png'
const FAQ = () => {
  return (
    <div className='w-screen bg-faqImage bg-cover bg-no-repeat'>
      <div className='pt-8 pb-16'>
        <h2 className='font-gothic-a1 font-semibold text-[52px] leading-[65px] text-white text-center mb-14'>FAQs</h2>
        <div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5 mb-4'>
            <p className='font-semibold text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
          <div className='max-w-[623px] mx-auto bg-[#FAF9F9] rounded-lg flex justify-between items-center pt-3 pb-5 pl-3 pr-5'>
            <p className='font-semibold text-base leading-[23px] text-[#0C0405]'>Lorem ipsum dolor sit amet consectetur?</p>
            <button><img src={Down} alt="Down" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ