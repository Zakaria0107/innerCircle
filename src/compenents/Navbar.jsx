import React, { useState } from 'react'
import Logo from '../images/Group 163092.png'
import MenuImg from '../images/Frame.png'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <nav className=' w-sceen absolute top-5 lg:top-0 left-0 right-0'>
        <div className='w-[92%] xl:w-[86%] mx-auto flex justify-between items-center'>
            <a href="/"><img src={Logo} alt="" className='w-[89px] md:w-[125px] lg:w-[173px]' /></a>
            <button type='button' className='block lg:hidden' onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <i class="fa-solid fa-bars mt-4 md:mt-0 text-2xl md:text-4xl text-white"></i> : <i class="fa-solid fa-xmark mt-4 md:mt-0 text-2xl md:text-4xl text-white"></i>}</button>
            <ul className='text-white hidden lg:flex justify-between items-end gap-16 xl:gap-32'>
                <li className='uppercase font-gothic-a1 text-base '><a href="">About <i class="fa-solid fa-chevron-down ml-2"></i></a></li>
                <li className='uppercase font-gothic-a1 '><a href="">FOR CANDIDATES</a></li>
                <li className='uppercase font-gothic-a1 '><a href="">FOR COMPANIES</a></li>
                <li className='uppercase font-gothic-a1 '><a href="">BLOG</a></li>
            </ul>


            {isOpen ? <motion.div
              initial={{scale : 0 , opacity : 0 ,x:'-50%' , y:'-50%' }}
              animate={{scale : 1 , opacity : 1}}
              className='w-[90%] sm:w-[70vw] flex  flex-col justify-between z-30 items-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ffffff]/75 rounded-xl backdrop-blur-md py-32 shadow-2xl'>
                    <ul className='flex flex-col items-center justify-center gap-8'>
                      <li className='uppercase font-gothic-a1 text-xs sm:text-base '><a href="">About <i class="fa-solid fa-chevron-down ml-2"></i></a></li>
                      <li className='uppercase font-gothic-a1 text-xs sm:text-base '><a href="">FOR CANDIDATES</a></li>
                      <li className='uppercase font-gothic-a1 text-xs sm:text-base '><a href="">FOR COMPANIES</a></li>
                      <li className='uppercase font-gothic-a1 text-xs sm:text-base '><a href="">BLOG</a></li>
                    </ul>
                </motion.div>  : null}
        </div>
    </nav>
  )
}

export default Navbar