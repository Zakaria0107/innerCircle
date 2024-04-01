import React, { useState, useEffect, useRef } from 'react';
import Logo from '../images/Group 163092.png';
import MenuImg from '../images/Frame.png';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMenu = ({ openAboutMenu, setOpenAboutMenu }) => {
  return (
    openAboutMenu && (
      <motion.ul
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className='absolute top-8 bg-[#0C0405] text-[#FAF9F9] rounded-2xl pb-6 pt-4 px-2 w-[200px] flex flex-col  text-xs shadow-xl capitalize'
      >
        <a href="#ourStory"><li className={` font-normal text-sm sm:text-base leading-5 transition-all duration-300 ease-in-out border-b border-solid border-[#565656] py-3 sm:py-4 px-3`}>Our Story</li></a>
        <a href="#ourTeam"><li className={`font-normal text-sm sm:text-base leading-5  transition-all duration-300 ease-in-out border-b border-solid border-[#565656] py-3 sm:py-4 px-3`}>Team</li></a>
        <a href="#faqs"><li className={`font-normal text-sm sm:text-base leading-5  transition-all duration-300 ease-in-out pb-2 pt-3 sm:pt-4 px-3`}>FAQs</li></a>
      </motion.ul>
    )
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openAboutMenu, setOpenAboutMenu] = useState(false)
  const aboutMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const menuBtn = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutMenuRef.current && !aboutMenuRef.current.contains(event.target)) {
        setOpenAboutMenu(false)
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuBtn.current &&
        !menuBtn.current.contains(event.target) &&
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    };

    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    };
  }, []);

  return (
    <nav className='w-screen absolute top-5 lg:top-0 left-0 right-0'>
      <div className='w-[92%] xl:w-[86%] mx-auto flex justify-between items-center'>
        <a href="/"><img src={Logo} alt="" className='w-[89px] md:w-[125px] lg:w-[173px]' /></a>
        {/* <button aria-label="menu button" ref={menuBtn} type='button' className='block lg:hidden' onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <i className="fa-solid fa-bars mt-4 md:mt-0 text-2xl md:text-4xl text-white"></i> : <i className="fa-solid fa-xmark mt-4 md:mt-0 text-2xl md:text-4xl text-white"></i>}
        </button> */}
         <button aria-label="menu button" ref={menuBtn} type='button' className='block lg:hidden flex-col justify-center items-center' onClick={() => setIsOpen(!isOpen)}>
            <span className={` transition-all duration-300 ease-out bg-white block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' :'-translate-y-0.5'} `}></span>
            <span className={` transition-all duration-300 ease-out bg-white block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' :'opacity-100'} `}></span>
            <span className={` transition-all duration-300 ease-out bg-white block h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' :'translate-y-0.5'} `}></span>
        </button>
        <ul className='text-white hidden lg:flex justify-between items-end gap-16 xl:gap-32'>
          <li ref={aboutMenuRef} className='relative uppercase font-gothic-a1 text-base cursor-pointer' onClick={() => setOpenAboutMenu(!openAboutMenu)}>
            About <i className="fa-solid fa-chevron-down ml-2"></i>
            <AboutMenu openAboutMenu={openAboutMenu} setOpenAboutMenu={setOpenAboutMenu} />
          </li>
          <li className='uppercase font-gothic-a1'><a href="#forCompanies">FOR COMPANIES</a></li>
          <li className='uppercase font-gothic-a1'><a href="#forCondidates">FOR CANDIDATES</a></li>
          <li className='uppercase font-gothic-a1'><a href="">BLOG</a></li>
        </ul>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className='w-[90%] sm:w-[70vw] flex flex-col justify-between z-30 items-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ffffff]/75 rounded-xl backdrop-blur-md py-32 shadow-2xl'
            >
              <ul className='flex flex-col items-center justify-center gap-8'>
                <li ref={aboutMenuRef} className='relative uppercase font-gothic-a1 text-xs sm:text-base cursor-pointer' onClick={() => setOpenAboutMenu(!openAboutMenu)}>
                  About <i className="fa-solid fa-chevron-down ml-2"></i>
                  <AboutMenu openAboutMenu={openAboutMenu} setOpenAboutMenu={setOpenAboutMenu} />
                </li>
                <li className='uppercase font-gothic-a1 text-xs sm:text-base ' onClick={() => setIsOpen(false)} ><a href="#forCompanies">FOR COMPANIES</a></li>
                <li className='uppercase font-gothic-a1 text-xs sm:text-base ' onClick={() => setIsOpen(false)} ><a href="#forCondidates">FOR CANDIDATES</a></li>
                <li className='uppercase font-gothic-a1 text-xs sm:text-base ' ><a href="">BLOG</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar
