import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";


const pic2 = '/image_2.jpg';
const pic3 = '/image_3.jpg';
const pic4 = '/image_4.jpg';
const pic5= '/image_5.png';


 const Home =()=>{
  return(
    <>
    <div className='flex px-7 py-4 mt-24 lg:px-20 lg:my-20  flex-col lg:flex-row '>
      <div className="left mt-14 lg:mt-40 space-y-3" data-aos="zoom-in">
          <span className='text-xl font-medium'>Welcome Everyone</span>
          <div className='flex space-x-1 text-2xl lg:text-4xl '>
          <h1 className='font-medium mr-3'>Hello, I'm a </h1>
          {/* <span className='text-red-600 font-extrabold'>Web Developer</span> */}
          <ReactTyped className='text-red-600 font-extrabold' 
          strings={["Frontend Developer","Web Developer","Programmer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
          </div>
          
          <p className='text-sm md:text-xl text-justify'>Passionate towards Full Stack Java Development ,enhance my skills 
          to keep growing in this field.I have strong desire to learn web development.</p>
          <br />

          {/* social media icons */}
          <div>
            <h1 className='font-bold text-md lg:text-xl'>Available on</h1>
            
             <ul  className='flex space-x-5 mt-3 mb-9'>
              <a href="https://www.linkedin.com/" target='_blank'><li><FaLinkedin className='text-2xl hover:text-blue-700 hover:shadow-md hover:scale-110  duration-500 cursor-pointer' /></li></a>
              <a href="https://www.github.com/" target='_blank'><li><FaGithub className='text-2xl hover:text-black hover:shadow-md hover:scale-110  duration-500 cursor-pointer' /></li></a>
              <a href="https://www.instagram.com/" target='_blank'><li><FaInstagram className='text-2xl hover:text-pink-500 hover:shadow-md hover:scale-110  duration-500 cursor-pointer' /></li></a>
              <a href="https://www.facebook.com/" target='_blank'><li><FaFacebookSquare className='text-2xl hover:text-blue-700 hover:shadow-md hover:scale-110  duration-500 cursor-pointer' /></li></a>
              <a href="https://web.telegram.org" target='_blank'><li><FaTelegramPlane className='text-2xl hover:text-blue-700 hover:shadow-md hover:scale-110  duration-500 cursor-pointer' /></li></a>
              <a href="https://web.whatsapp.com" target='_blank'><li><FaWhatsapp className='text-2xl hover:text-green-700 hover:shadow-md hover:scale-110  duration-500 cursor-pointer' /></li></a>
             </ul>
             <a  className=' py-[8px] px-[20px] text-xl border-[2px] border-[black] rounded-3xl bg-[#14213d] text-[#E5E5E5] hover:text-[#14213d] hover:bg-[#E5E5E5] hover:shadow-md hover:scale-110  duration-500 cursor-pointer' href="https://www.linkedin.com/" type='text' target='_blank'>Follow me on Linkindin</a>
            
          </div>
      </div>
      <div className="right  mt-2 lg:mt-0" data-aos="zoom-out"
      >
        <img className=' h-[470px] w-[750px] lg:h-[600px]' src={pic5} alt="" />
      </div>
    </div>
    <hr />  
    </>
  )
}

export default Home;


