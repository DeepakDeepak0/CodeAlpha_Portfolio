import React from 'react';
import { FaMedal } from "react-icons/fa6";


const Skills = () => {
  const pic8 = './image_8.png';
  const pic9 = './image_9.png';
  const pic10 = './image_10.png';
  const pic11 = './image_11.png';
  const pic12 = './image_12.png';
  const pic13 = './image_13.png';
  const pic14 = './image_14.png';
  const pic15 = './image_15.png';
  const pic16 = './image_16.png';
  const pic17 = './image_17.jpg';
  const pic19 = './image_19.jpg';
  const pic20 = './image_20.jpg';




  return (
    <>
    <div className='px-7 py-4 mt-24 lg:px-20 lg:my-20 '>
    <h1 className='font-extrabold text-5xl lg:text-5xl mb-14 lg:text-center' data-aos="fade-up">Skills</h1>
    <p data-aos="zoom" className='text-2xl mb-9'>My approach to development is centered onnwriting clean,maintainable and well-documented code.I
      am always eager to learn new technologies and stay updated.
    </p>
    <p data-aos="zoom" className='text-2xl mb-9'>I have an intermediate knowledge of various technologies which are 
      given below :-
    </p>
    <div className='flex flex-col lg:flex-row flex-wrap '>
     
     <div data-aos="flip-right" className="  card-1 lg:ml-5 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[200px] w-[200px] ' src={pic8} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>HTML5</h1>
      </div>

      <div data-aos="flip-left" className="card-2 lg:ml-7 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md -z-20 hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[200px] w-[200px] ' src={pic13} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>CSS3</h1>
      </div>

      <div data-aos="flip-right" className="card-3 lg:ml-7 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md -z-20 hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[200px] w-[200px] ' src={pic9} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>JavaScript</h1>
      </div>

      <div data-aos="flip-left" className="card-4 lg:ml-7 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md -z-20 hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[200px] w-[200px] ' src={pic12} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>React</h1>
      </div>

      <div data-aos="flip-right" className="card-5 lg:ml-5 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md -z-20 hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[150px] w-[200px] ' src={pic10} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>TailWind CSS</h1>
      </div>

      <div data-aos="flip-left" className="card-6 lg:ml-7 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md -z-20 hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[150px] w-[150px] ' src={pic11} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>BootStrap</h1>
      </div>

      <div data-aos="flip-right" className="card-6 lg:ml-7 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md -z-20 hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[150px] w-[300px] ' src={pic14} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>Java</h1>
      </div>

      {/* <div data-aos="flip-left" className="card-6 lg:ml-7 mb-7 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px] p-4 bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md -z-20 hover:shadow-xl hover:scale-105 transition-all duration-500 lg:w-[300px] lg:h-[300px]">
        <img className='rounded-full h-[150px] w-[155px] ' src={pic15} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>SpringBoot</h1>
      </div> */}
    </div>  

     <div className='Achievements-sec-1 md:bg-custom md:bg-no-repeat md:bg-contain md:bg-center  '>
     <h1 className='font-extrabold text-5xl my-14 lg:text-5xl  lg:text-center' data-aos="fade-up">Achievements</h1>
    <div className='flex flex-col lg:flex-row gap-9 items-center lg:gap-48'>
    <img data-aos="flip-up" className='border-[1px] border-[#E5E5E5] shadow-2xl h-[300px] w-[350px] lg:h-[400px] lg:w-[530px] ' src={pic19} alt="" />
    <img data-aos="flip-down" className='border-[1px] border-[#E5E5E5] shadow-2xl h-[300px] w-[350px] lg:h-[400px] lg:w-[550px] ' src={pic20} alt="" />      
    </div>
    <div data-aos="zoom-out" className='flex flex-col justify-center items-center my-6'>
    <h1  className='text-blue-700 font-[800]  text-2xl text-center'>International Mathematics Olympiad</h1>
    <h3 className='text-2xl'>(Silver Medalist)  </h3>
    <p className='text-3xl my-2'><  FaMedal /></p>
    </div>
    <p data-aos="zoom-in" className='text-xl bg-custom bg-no-repeat bg-contain bg-center md:bg-none'>In class X ,I participated in the prestigious International Maths Olympiad, showing exceptional mathematical
      skills and problem-solving abilities on an international platform. I secured 2 <sup>nd</sup> position  and won Silver medal also.
    </p>

     </div>
     <br />
     <hr />


    <div className=' my-4 Achievements-sec-2 md:bg-custom_1 md:bg-no-repeat md:bg-cover bg-center  '>
    <div className='flex flex-col justify-center lg:flex-row gap-9 items-center lg:gap-48'>
    <img data-aos="flip-up" className='border-[1px] border-[#E5E5E5] shadow-2xl h-[300px] w-[350px] lg:h-[400px] lg:w-[530px] ' src={pic17} alt="" />
    </div>
    <div data-aos="zoom-out" className='flex flex-col justify-center items-center my-6'>
    <h1  className='text-blue-700 font-[800]  text-2xl'>R-20 Conference</h1>
    <h3 className='text-2xl'>(Participated)  </h3>
    <p className='text-3xl my-2'><  FaMedal /></p>
    </div>
    <p  className='text-xl'>In Btech 1 <sup>st</sup> year , I participated R-20 Conference which is organised at IIPA .It gives me a lot of knowledge towards Ecosystem,  Promotes Water Conservation practices among agricultural, industrial and residentials users to reduce water withdrawls from the river.
     </p>

     </div>
     
    </div>
    <br />
    <hr />
      
    </>
  )
}

export default Skills;
