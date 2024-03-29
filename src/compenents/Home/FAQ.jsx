import React , {useState} from 'react'
import Down from '../../images/down.png'
import { faqs } from '../../Data/Faqs'
import {motion} from 'framer-motion'
const FAQ = () => {
  
  const [isOpen, setIsOpen] = useState(new Array(faqs.length).fill(false))

  const showAnswer = (index) => {
    setIsOpen(prevState => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    });
  }
  return (
    <div id='faqs' className='w-screen bg-faqImage bg-cover bg-no-repeat'>
      <div className='pt-8 pb-16'>
        <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-white leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[65px] text-center mb-9 md:mb-14'>FAQs</h1>
        <div className='w-[92%] xl:w-[86%] mx-auto'>
          {faqs.map((elt , index) => <div  key={index} className='mb-4 rounded-lg overflow-hidden bg-[#FAF9F9] max-w-[623px] mx-auto' >
            <div className='mx-auto  flex justify-between items-center pt-3 pb-5 pl-3 pr-5 cursor-pointer' onClick={() => showAnswer(index)}>
              <p className='w-[95%] font-semibold text-xs sm:text-base leading-[23px] text-[#0C0405]'>{elt.question}</p>
              <button><img src={Down} alt="Down" /></button>
            </div>
            <motion.div initial={{ height: 0, opacity: 0 }}
                animate={isOpen[index] ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }} className={isOpen[index] ? 'max-w-[623px] mx-auto pb-5 pl-3 pr-5 border-l-[6px] border-solid border-red-500' : 'hidden max-w-[623px] mx-auto pb-5 pl-3 pr-5 border-l-[6px] border-solid border-red-500'}>
              <p dangerouslySetInnerHTML={{ __html: elt.answer }} ></p>
            </motion.div>
          </div> )}
        </div>
      </div>
    </div>
  )
}

export default FAQ