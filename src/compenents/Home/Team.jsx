import React from 'react';
import AhmedPic from '../../images/Ahmed.png';
import ElsaPic from '../../images/elsa image.png';

const Team = () => {
  return (
    <div id='ourTeam' className='w-screen'>
      <div className='w-[90%] xl:w-[80%] mx-auto py-14 md:py-18 lg:py-24'>
        <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-[#0C0405] leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[65px] text-center mb-9 md:mb-14'>Our Team</h1>
        <div className='max-w-[934px] mx-auto'>
          <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 sm:gap-9 mb-[72px] '>
            <img src={AhmedPic} alt="AhmedPic" className='w-[135px] sm:w-auto' />
            <div className='text-center lg:text-justify max-w-[596px] '>
              <h4 className='font-gothic-a1 font-bold text-xs sm:text-base md:text-xl lg:text-[28px] leading-[36px] text-[#0C0405]'>Ahmad Bani</h4>
              <h6 className='font-normal text-xs sm:text-sm md:text-lg lg:text-xl leading-[26px] text-[#0C0405] italic mt-0 sm:mt-4 mb-0 sm:mb-5'>Founder</h6>
              <p className='text-xs sm:text-sm md:text-base xl:text-lg leading-[23px] text-[#5B5B5B]'>Ahmad has worked with US startups for over a decade, leading Bizops, Finance and Engineering teams across a global workforce. He's extremely excited about connecting exceptional global talent with top tier companies and thinks of recruiting as a full cycle journey that ends not on a start date, but with enduring employee retention. Companies are built on the foundation of their talent, and the right people in the right roles at the right stage of company can create real magic. Most recently Ahmad was CEO of an 8 figure telehealth business that he scaled and exited.</p>
            </div>
          </div>
          <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-2 sm:gap-9 mb-[72px]'>
            <div className='text-center lg:text-justify max-w-[596px] '>
              <h4 className='font-gothic-a1 font-bold  text-xs sm:text-base md:text-xl lg:text-[28px] leading-[36px] text-[#0C0405]'>Elsa Gonzalez</h4>
              <h6 className='font-normal text-xs sm:text-sm md:text-lg lg:text-xl  leading-[26px] text-[#0C0405] italic mt-0 sm:mt-4 mb-0 sm:mb-5 lg:mb-20'>Recruiting Operations</h6>
              <p className='text-xs sm:text-sm md:text-base xl:text-lg leading-[23px] text-[#5B5B5B]'>Elsa was previously EA to the President of the Court in Mexico City as well as EA to the Mexican Ambassador to the Netherlands. Following her career in public service, she led the expansion of a Brazilian beauty ecommerce company into Mexico, building out their customer service and ultimately managing Customer Service teams across South America. Most recently, she was working for the Costa Rican government developing a Customer Service Experience and Sales strategy for the National Reserve Monte Verde. She is passionate about helping people achieve success.</p>
            </div>
            <img src={ElsaPic} alt="ElsaPic" className='w-[135px] sm:w-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team
