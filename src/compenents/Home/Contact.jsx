// import React , {useEffect}from 'react'
// import ContactImg from '../../images/contact.png'
// import { createWidget } from '@typeform/embed'
// import '@typeform/embed/build/css/widget.css'


// const Contact = () => {
//     useEffect(() => {
//         const typeformEmbed = createWidget('01HSC8GM4NG7PQJ3P5JCFKFEER', {
//             hideFooter: true,
//             hideHeaders: true,
//         });
//         typeformEmbed.open();
     
//         return () => {
//             typeformEmbed.close();
//         };
//     }, []);
//   return (
//     <div id='form'>
         
//     </div>
//     // <div className='w-screen relative'>
//     //      <img src={ContactImg} alt="ContactImg" className='hidden lg:block absolute right-0 top-24 w-[49%] max-h-[85%]' />
//     //     <div className='w-[92%] xl:w-[86%] mx-auto pt-24 pb-32 flex justify-between items-start flex-col lg:flex-row '>
//     //         <div className='w-[100%] lg:w-[50%]'>
//     //             <h3 className='font-gothic-a1 font-semibold text-[40px] leading-[50px] text-[#0C0405]'>Reach out for any questions. <br />We respond FAST.</h3>
//     //             <div>
//     //                 <div className='w-[100%] flex justify-between items-center  mb-24'>
//     //                     <div className='w-[48%]'>
//     //                         <input type="text" placeholder='Your Name' className='w-[100%] py-2 text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] '/>
//     //                     </div>
//     //                     <div className='w-[48%]'>
//     //                         <input type="text" placeholder='Your Email' className='w-[100%]  py-2 text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] '/>
//     //                     </div>
//     //                 </div>
//     //                 <div className='w-[100%] flex justify-between items-center mb-16'>
//     //                     <div className='w-[48%]'>
//     //                         <input type="text" placeholder='Phone Number' className='w-[100%]  py-2 text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] '/>
//     //                     </div>
//     //                     <div className='w-[48%]'>
//     //                         <input type="text" placeholder='Want to know about' className='w-[100%]  py-2 text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] '/>
//     //                     </div>
//     //                 </div>
//     //                 <div className='w-[100%] flex justify-between items-center'>
//     //                     <div className='w-[100%]'>
//     //                         <textarea rows={1} type="text" placeholder='Phone Number' className='w-[100%] py-2 text-base font-semibold leading-7 outline-none focus:outline-none border-b border-solid border-[#0C0405] '/>
//     //                     </div>
//     //                 </div>
//     //             </div>
//     //             <div className='text-center'>
//     //                 <button className='mt-6 sm:mt-8 md:mt-10 xl:mt-36 text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-[#0C0405] bg-[#0C0405]'>SEND</button>
//     //             </div>
//     //         </div>
//     //         <div className='lg:bg-none w-[715px] h-[600px] flex justify-center items-center pl-32 z-10'>
//     //         <img src={ContactImg} alt="ContactImg" className='absolute -right-[100px] w-screen ' />
//     //         {/* <div className='w-[706px] absolute -right-[20%]  -z-10 '>
//     //                 <img src={ContactImg} alt="ContactImg" className='object-cover w-full h-full' />
//     //             </div> */}
//     //             <h3 className=' font-gothic-a1 font-semibold text-[40px] leading-[50px] text-black'>Strategizing for the future      instead of reacting to yesterday's issues.</h3>
                
//     //         </div>
//     //     </div>
//     //     <div id='form'>

//     //     </div>
//     // </div>
//   )
// }

// export default Contact


import React, { useEffect } from 'react';
import ContactImg from '../../images/contact.png';

const Contact = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='h-auto'>
            <div data-tf-live="01HSC8GM4NG7PQJ3P5JCFKFEER"></div>
        </div>
    );
};

export default Contact;

