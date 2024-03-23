import React from 'react'
import FooterImg from '../images/footer.png'
import LocationImg from '../images/location.png'
import MessageImg from '../images/message.png'
import NumberImg from '../images/number.png'

import FacebookImg from '../images/Vector.png'
import LinkedinImg from '../images/Vector (1).png'
import XImg from '../images/Vector (2).png'
import InstagramImg from '../images/Vector (3).png'


const Footer = () => {
  return (
    <div className='w-screen h-[578px] bg-footer-img bg-center bg-cover bg-no-repeat'>
        <div className='w-[90%] xl:w-[80%] h-full mx-auto flex justify-between items-center'>
            <img src={FooterImg} alt="FooterImg"  className='w-[89px] md:w-[125px] lg:w-[176px]' />
            <div>
                <h5 className='font-gothic-a1 font-bold text-[#F6F6F6] text-xs sm:text-base leading-[48px] mb-3'>Contact us</h5>
                <div className='w-auto flex justify-start item-start lg:items-end gap-2 sm:gap-10 flex-col lg:flex-row'>
                    <div className='text-white '>
                        <p className=' flex justify-start items-center text-[10px] sm:text-xs text-[#F6F6F6] gap-4 mb-1 sm:mb-3'><img src={LocationImg} alt="LocationImg" />ABC, street 123 USA</p>
                        <p className='flex justify-start items-center text-[10px] sm:text-xs text-[#F6F6F6] gap-4 mb-1 sm:mb-3'><img src={NumberImg} alt="NumberImg" />(347) 6002107</p>
                        <p className='flex justify-start items-center text-[10px] sm:text-xs text-[#F6F6F6] gap-4 mb-1 sm:mb-3'><img src={MessageImg} alt="MessageImg" />example@gmail.com</p>
                    </div>
                    <div>
                        <h5 className='font-gothic-a1 font-bold text-[#F6F6F6] text-xs sm:text-base leading-[48px] mb-3'>Follow us</h5>
                        <div className='flex justify-between items-center gap-8'>
                            <a href=""><img src={FacebookImg} alt="FacebookImg" className='w-3 h-3 sm:w-5 sm:h-5 md:w-8 md:h-8' /></a>
                            <a href=""><img src={LinkedinImg} alt="LinkedinImg" className='w-3 h-3 sm:w-5 sm:h-5 md:w-8 md:h-8' /></a>
                            <a href=""><img src={XImg} alt="XImg"  className='w-3 h-3 sm:w-5 sm:h-5 md:w-8 md:h-8' /></a>
                            <a href=""><img src={InstagramImg} alt="InstagramImg"  className='w-3 h-3 sm:w-5 sm:h-5 md:w-8 md:h-8' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer