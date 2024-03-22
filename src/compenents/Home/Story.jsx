import React from 'react'
import Diversity from '../../images/Diversity.png'
import Remote from '../../images/Remote.png'
import Delegation from '../../images/Delegation.png'

const Story = () => {
  return (
    <div className=''>
        <div className='w-[80%] mx-auto py-[98px]'>
            <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-[#0C0405] leading-[65px] text-center'>Our Story</h1>
            <p className='mt-9 max-w-[820px] m-auto font-normal text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-center text-[#0C0405]'>Inner Circle was born in 2024 with a clear vision: to revolutionize how companies build, leverage and retain a global workforce. Our foundation is built on three core beliefs:</p>
            <div className='mt-8 flex justify-center items-center w-full gap-20 flex-wrap'>
                <div className='max-w-[280px] flex justify-center items-center flex-col'>
                    <img src={Diversity} alt="Diversity" width="100" height="100" />
                    <h3 className='my-8 font-gothic-a1 font-bold text-[28px] leading-9 text-center'>Diversity</h3>
                    <p className='text-center font-semibold text-base leading-5'>That diversity isn't just valuable; it's essential for innovation and resilience in an increasingly digital and interconnected world.</p>
                </div>
                <div className='max-w-[280px] flex justify-center items-center flex-col'>
                    <img src={Remote} alt="Remote" width="100" height="100" />
                    <h3 className='my-8 font-gothic-a1 font-bold text-[28px] leading-9 text-center'>Remote</h3>
                    <p className='text-center font-semibold text-base leading-5'>That remote teams have power to transcend geographical boundaries and achieve remarkable outcomes.</p>
                </div>
                <div className='max-w-[280px] flex justify-center items-center flex-col'>
                    <img src={Delegation} alt="Delegation" width="100" height="100" />
                    <h3 className='my-8 font-gothic-a1 font-bold text-[28px] leading-9 text-center'>Delegation</h3>
                    <p className='text-center font-semibold text-base leading-5'>That delegation to trusted employees allows executives and leaders to concentrate on their most impactful work, knowing that their vision is being amplified.</p>
                </div>
            </div>
            <div className='text-center'>
            <button className='mt-[60px] text-lg leading-[24px] text-white rounded-[60px] py-[15px] px-[60px] border-2 border-solid border-[#0C0405] bg-[#0C0405]'>Start Hiring Today</button>
            </div>
        </div>
    </div>
  )
}

export default Story