import React from 'react';



const About = () => {
    const pic6 = "./image_6.avif";
    const pic7 = "./image_7.png";


  return (
    <>
      <div className='flex px-7 py-4 my-20 lg:px-20 lg:my-24 flex-col'>
        <h1 className='font-extrabold text-5xl lg:text-5xl mb-3 lg:text-center lg:my-6' data-aos="fade-up">About</h1>
        <div className=' flex flex-col'>
            <p className='text-sm md:text-xl text-justify font-medium' data-aos="slide-down">Hello❤ I'm a Deepak, dedicated and passionate professional with a strong background in Web development.I also solving Leetcode DSA problems in Java for problem solving.Currently,I solved 70+ Leetcode problems .My work is driven by a commitment to excellence and a desire to make a positive impact.
              I believe in continuous learning and innovation.My approach combines creativity with practical solutions to addredd challenges and achieve outstanding results.I am always eager to collaborate, share knowledge and learn from others.  </p>
            <h1 className='text-4xl font-medium my-16 underline' data-aos="fade">Education</h1>
            <div className='Education-cards -z-10 flex flex-col space-y-14 lg:space-y-0 lg:space-x-20 lg:flex-row'>
                <div data-aos="flip-left" className="card_1 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md z-[2] hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[370px] lg:h-[370px] ">
                    <img className='rounded-full h-[80px] w-[95px] ' src={pic7} alt="" />
                    <h1  className='text-blue-700 font-[800] text-2xl'>(2022 - 2026)</h1>
                    <h2 className='text-xl font-semibold'>Bachelor of Technology</h2>
                    <h4 className='text-md font-medium'>GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY</h4>
                    <p className='text-sm font-medium'>GRADE: First Class</p>
                </div>

                <div data-aos="flip-down" className="card_2 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md z-[2] hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[370px] lg:h-[370px] ">
                    <img className='rounded-full h-[85px] w-[85px] ' src={pic6} alt="" />
                    <h1  className='text-blue-700 font-[800]  text-2xl'>(2021 - 2022)</h1>
                    <h2 className='text-xl font-semibold'>Senior Secondary School</h2>
                    <h4 className='text-md font-medium'>VIRENDRA PUBLIC SCHOOL</h4>
                    <p className='text-sm font-medium'>GRADE: First Class</p>
                </div>

                <div data-aos="flip-right" className="card_3 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md z-[2] hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[370px] lg:h-[370px]">
                    <img className='rounded-full h-[85px] w-[85px] ' src={pic6} alt="" />
                    <h1  className='text-blue-700 font-[800]  text-2xl'>(2019 - 2020)</h1>
                    <h2 className='text-xl font-semibold'>Secondary School</h2>
                    <h4 className='text-md font-medium'>VIRENDRA PUBLIC SCHOOL</h4>
                    <p className='text-sm font-medium'>GRADE: First Class</p>
                </div>
            </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  )
}

export default About
