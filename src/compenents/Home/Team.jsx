import React from 'react'
import AhmedPic from '../../images/Ahmed.png'
import ElsaPic from '../../images/elsa image.png'
const Team = () => {
  return (
    <div className='w-screen'>
        <div className='w-[90%] xl:w-[80%] mx-auto py-24'>
            <h2 className='font-gothic-a1 font-semibold text-[52px] leading-[65px] text-[#0C0405] text-center mb-14'>Our Team</h2>
            <div className='max-w-[934px] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-9 mb-[72px] '>
                    <img src={AhmedPic} alt="AhmedPic" />
                    <div className='text-center lg:text-justify max-w-[596px] '>
                        <h4 className='font-gothic-a1 font-bold text-[28px] leading-[36px] text-[#0C0405]'>Ahmed Bani</h4>
                        <h6 className='font-normal text-xl leading-[26px] text-[#0C0405] italic mt-4 mb-5'>Founder</h6>
                        <p className='text-lg leading-[23px] text-[#5B5B5B]'>Ahmad has worked with US startups for over a decade, leading Bizops, Finance and Engineering teams with a global workforce. He’s extremely excited about connecting exceptional global talent with top tier companies and thinks of recruiting as a full cycle journey that ends not on a start date, but with enduring employee retention. Companies are made on the foundation of their talent, and the right people in the right roles at the right stage of company can create absolute magic. Most recently Ahmad was CEO of an 8 figure telehealth business that he scaled and exited.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-9 mb-[72px]'>
                    <img src={ElsaPic} alt="ElsaPic" />
                    <div className='text-center lg:text-justify max-w-[596px] '>
                        <h4 className='font-gothic-a1 font-bold text-[28px] leading-[36px] text-[#0C0405]'>Elsa Gonzales</h4>
                        <h6 className='font-normal text-xl leading-[26px] text-[#0C0405] italic mt-4 mb-20'>Recruiting Operations</h6>
                        <p className='text-lg leading-[23px] text-[#5B5B5B]'>Elsa was previously EA to the President of the Court in Mexico City as well as the Mexican Ambassador to the Netherlands. Following her career in public service, she led the expansion of a beauty Ecom company into Mexico, building out their customer service and ultimately managing CS teams across South America.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team