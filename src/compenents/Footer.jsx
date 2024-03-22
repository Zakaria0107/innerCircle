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
    <div className='w-screen h-[578px] bg-footer-img bg-center bg-contain'>
        <div className='w-[80%] h-full mx-auto flex justify-between items-center'>
            <img src={FooterImg} alt="FooterImg" />
            <div>
                <h5 className='font-gothic-a1 font-bold text-[#F6F6F6] text-base leading-[48px] mb-3'>Contact us</h5>
                <div className='flex justify-start items-end gap-10'>
                    <div className='text-white'>
                        <p className='flex justify-start items-center text-[#F6F6F6]  gap-4 mb-3'><img src={LocationImg} alt="LocationImg" />ABC, street 123 USA</p>
                        <p className='flex justify-start items-center text-[#F6F6F6]  gap-4 mb-3'><img src={NumberImg} alt="NumberImg" />(347) 6002107</p>
                        <p className='flex justify-start items-center text-[#F6F6F6]  gap-4 mb-3'><img src={MessageImg} alt="MessageImg" />example@gmail.com</p>
                    </div>
                    <div>
                        <h5 className='font-gothic-a1 font-bold text-[#F6F6F6] text-base leading-[48px] mb-3'>Follow us</h5>
                        <div className='flex justify-between items-center gap-8'>
                            <a href=""><img src={FacebookImg} alt="FacebookImg" /></a>
                            <a href=""><img src={LinkedinImg} alt="LinkedinImg" /></a>
                            <a href=""><img src={XImg} alt="XImg" /></a>
                            <a href=""><img src={InstagramImg} alt="InstagramImg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer