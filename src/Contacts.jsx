import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import Footer from "./Footer";




const Contacts = () => {
  return (
    <>
      <div  className='px-7 py-4 mt-24 lg:px-20 lg:my-20 flex flex-col justify-center items-center gap-5'>
        <h1 className='font-extrabold text-5xl' data-aos="zoom-in">Contact Us</h1>
        <p className='text-xl my-12 lg:text-2xl' data-aos="fade-in">I'm always excited to discuss new projects,creative ideas or opportunities to be part of your visions.Feel free to reach out to me through the following methods:</p>
        <span data-aos="flip-left" className=' text-2xl font-black lg:text-3xl'>Have a <span className='text-red-600 animate-pulse '>Nice Day</span> <FaRegSmileWink /> </span>
        <div data-aos="zoom-out" className='flex justify-center items-center flex-row gap-5 h-20 lg:mt-6 lg:gap-8' >
          
              <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin className=' text-4xl hover:text-blue-700 hover:shadow-md hover:scale-110  duration-500 cursor-pointer lg:text-5xl' /></a>
              <a href="https://www.instagram.com/" target='_blank'><FaInstagram className=' text-4xl hover:text-pink-500 hover:shadow-md hover:scale-110  duration-500 cursor-pointer lg:text-5xl' /></a>
              <a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare className=' text-4xl hover:text-blue-700 hover:shadow-md hover:scale-110  duration-500 cursor-pointer lg:text-5xl' /></a>
              <a href="https://web.telegram.org" target='_blank'><FaTelegramPlane className=' text-4xl hover:text-blue-700 hover:shadow-md hover:scale-110  duration-500 cursor-pointer lg:text-5xl' /></a>

        </div>
        <div data-aos="zoom" className=' mt-14 flex justify-center items-center flex-col gap-8 text-3xl p-8 border-[2px] font-semibold border-[black] shadow-2xl lg:w-[700px] '>
          <h2 className='text-4xl font-black'>Contact Me</h2>
              <div className='contact-1'>
                  <label htmlFor="q-1">Name : </label>
                  <input className='font-normal p-2 text-2xl' type="text" id='q-1' placeholder='Enter name' />
              </div>
              <div className='contact-2'>
                  <label htmlFor="q-2">Email : </label>
                  <input className='font-normal p-2 text-2xl' type="email" id='q-2' placeholder='Enter email' />
              </div>
              <div className='contact-3 sm:flex sm:gap-2 '>
                  <label  htmlFor="q-3">Message : </label>
                  <textarea className='w-[100%] sm:w-fit  mt-1 font-normal p-2 text-2xl h-56 text-wrap ' placeholder='Type Here' id="q-3"></textarea>
              </div>
              <button type="submit" className=' py-[8px] px-[20px] text-xl border-[2px] border-[black] rounded-3xl bg-[#14213d] text-[#E5E5E5] hover:text-[#14213d] hover:bg-[#E5E5E5] hover:shadow-md hover:scale-110  duration-500 cursor-pointer'>Submit</button>
        </div>
        
      </div>
      <br />
      <hr />
      
      <Footer />
    </>
  )
}

export default Contacts;
