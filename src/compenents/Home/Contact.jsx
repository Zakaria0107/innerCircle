import React from 'react'
import ContactImg from '../../images/contact.png'



const Contact = () => {
   
  return (
    <div className='w-screen relative'>
        <div className='  pb-10 md:pt-24 md:pb-32 flex justify-between items-start flex-col lg:flex-row  gap-14 lg:gap-0'>
            <div className='w-[100%] lg:w-[50%]'>
                <div className='w-[92%] xl:w-[86%] mx-auto '>
                    <h3 className='font-gothic-a1 font-semibold text-[20px] sm:text-[30px] xl:text-[40px]  leading-6 sm:leading-[50px] text-[#0C0405] mb-10 sm:mb-20'>Reach out for any questions. <br />We respond FAST.</h3>
                    <div>
                        <div className='w-[100%] flex justify-between items-center  mb-24'>
                            <div className='w-[48%]'>
                                <input type="text" placeholder='Your Name' className='w-[100%] py-2 text-xs sm:text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] bg-transparent'/>
                            </div>
                            <div className='w-[48%]'>
                                <input type="text" placeholder='Your Email' className='w-[100%]  py-2 text-xs sm:text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] bg-transparent '/>
                            </div>
                        </div>
                        <div className='w-[100%] flex justify-between items-center mb-16'>
                            <div className='w-[48%]'>
                                <input type="text" placeholder='Phone Number' className='w-[100%]  py-2 text-xs sm:text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] bg-transparent '/>
                            </div>
                            <div className='w-[48%]'>
                                <input type="text" placeholder='Want to know about' className='w-[100%]  py-2 text-xs sm:text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] bg-transparent'/>
                            </div>
                        </div>
                        <div className='w-[100%] flex justify-between items-center'>
                            <div className='w-[100%]'>
                                <textarea rows={1} type="text" placeholder='Phone Number' className='w-[100%] py-2 text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] bg-transparent '/>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className=' w-[147px] lg:w-[263px] mt-6 sm:mt-8 md:mt-10 xl:mt-36 text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-[#0C0405] bg-[#0C0405]'>SEND</button>
                    </div>
                </div>
            </div>
            <div className='relative  w-full lg:w-[48%] xl:w-[715px] h-[300px] sm:h-[600px] flex justify-center items-center lg:items-start flex-col px-8 sm:px-20 z-10'>
            <img src={ContactImg} alt="ContactImg" className='absolute right-0 w-[95%] h-full -z-10' />
            {/* <div className='w-[706px] absolute -right-[20%]  -z-10 '>
                    <img src={ContactImg} alt="ContactImg" className='object-cover w-full h-full' />
                </div> */}
                <h3 className=' font-gothic-a1 font-semibold text-[18px] sm:text-[30px] xl:text-[40px]  leading-6 sm:leading-[50px] text-white text-center lg:text-left'>Strategizing for the future      instead of reacting to yesterday's issues.</h3>
                <a href="https://calendly.com/ahmad-bani/client-intake" target='_blank' >
                    <button className='mt-6 sm:mt-8 md:mt-16 text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-white'>Schedule a Meeting</button>
                </a>
            </div>
        </div>
        <div id='form'>

        </div>
    </div>
  )
}

export default Contact