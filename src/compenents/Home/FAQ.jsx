import React, { useState } from 'react';
import Down from '../../images/down.png';
import { faqs } from '../../Data/Faqs';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleAnswer = (index) => {
    setIsOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div id='faqs' className='w-screen pt-8 pb-16'>
      <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-[#0C0405] leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[65px] text-center mb-9 md:mb-14'>Frequently Asked Questions </h1>
      <div className='w-[92%] xl:w-[86%] mx-auto '>
        {faqs.map((faq, index) => (
          <div key={index} className='mb-4 rounded-2xl overflow-hidden bg-[#FFFFFF] max-w-[623px] mx-auto shadow-lg cursor-pointer' onClick={() => toggleAnswer(index)}>
            <div className='flex justify-between items-center pt-4 pb-3 pl-4 pr-5 cursor-pointer select-none' >
              <p className='w-[95%] font-semibold text-xs sm:text-base leading-[23px] text-[#0C0405]'>{faq.question}</p>
              <button><img src={Down} alt="Down" /></button>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={isOpen[index] ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
              className='max-w-[623px] mx-auto pb-5  pl-4 pr-5'
            >
              <p dangerouslySetInnerHTML={{ __html: faq.answer }} className='text-[#565656] text-xs sm:text-base lg:text-lg leading-8 font-normal'></p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
