import React from 'react';


const Projects = () => {
    const ToDo = './ToDo.jpg';
    const ToDesktop = './ToDesktop.jpg';
    const GitHub = './github.png';
  return (
    <>
      <div className='px-7 py-4 mt-24 lg:px-20 lg:my-20 flex flex-col gap-4 '>
        <h1 className='font-extrabold text-5xl lg:text-5xl mb-16 lg:text-center' data-aos="fade-up">Projects</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
      <div data-aos="zoom-out" className="card-1 lg:ml-5 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px]  bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-500   h-[350px]  lg:w-[450px]">
        <img className=' h-[200px] w-[300px] mt-4 ' src={ToDesktop} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>ToDeskTop</h1>
      </div>
      <div data-aos="zoom" className=" card-1-explain lg:flex lg:justify-center lg:items-center lg:flex-col ">
      <p className='text-2xl my-5 lg:my-1 font-medium '>ToDeskTop is Your ultimate destination for seamless desktop management and customization.Explore our innovative tools designed to enhance your desktop experience.</p>
      <a  className=' my-5 py-[8px] px-[20px] text-xl border-[2px] border-[black] rounded-3xl bg-[#14213d] text-[#E5E5E5] hover:text-[#14213d] hover:bg-[#E5E5E5] hover:shadow-md hover:scale-110  duration-500 cursor-pointer' href="https://deepakdeepak0.github.io/ToDesktop-project/" type='text' target='_blank'>Visit Site </a>
      </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row-reverse">
      <div data-aos="zoom-out" className="card-1 lg:ml-5 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px]  bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-500   h-[350px]  lg:w-[450px]">
        <img className=' h-[200px] w-[200px] mt-4 ' src={GitHub} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>GitHub</h1>
      </div>
      <div data-aos="zoom" className=" card-1-explain lg:flex lg:justify-center lg:items-center lg:flex-col ">
      <p className='text-2xl my-5 lg:my-1 font-medium '>Github Explorer is the site which help you to find profile of Github users so that you can explore their repositories and much more.</p>
      <a  className=' my-5 py-[8px] px-[20px] text-xl border-[2px] border-[black] rounded-3xl bg-[#14213d] text-[#E5E5E5] hover:text-[#14213d] hover:bg-[#E5E5E5] hover:shadow-md hover:scale-110  duration-500 cursor-pointer' href="https://github-explorerproject.netlify.app/" type='text' target='_blank'>Visit Site </a>
      </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
      <div data-aos="zoom-out"  className="my-7 card-1 lg:ml-5 cursor-pointer hover:bg-[#ADD8E6] flex flex-col space-y-5 justify-center items-center w-[350px]  bg-[#ffffff09] backdrop-blur-[4px] py-[20px] px-[40px] border-[1.3px] border-[solid] border-[black] rounded-[10px] shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-500   h-[350px]  lg:w-[450px]">
        <img className=' h-[200px] w-[300px] mt-4 ' src={ToDo} alt="" />
        <h1  className='text-blue-700 font-[800]  text-2xl'>ToDoList</h1>
      </div>
      <div data-aos="zoom" className="card-2-explain lg:flex lg:justify-center lg:items-center lg:flex-col ">
      <p className='text-2xl my-5 lg:my-1 font-medium '>ToDolist is your go-to-app for managing tasks and staying organised.Streamline your workflow and achieve your goals with our intuitive task management system.</p>
      <a  className=' my-5 py-[8px] px-[20px] text-xl border-[2px] border-[black] rounded-3xl bg-[#14213d] text-[#E5E5E5] hover:text-[#14213d] hover:bg-[#E5E5E5] hover:shadow-md hover:scale-110  duration-500 cursor-pointer' href="https://667527a7543aae37e6ed74ff--classy-sunflower-701e9b.netlify.app " type='text' target='_blank'>Visit Site </a>
      </div>
      </div>
      </div>
    </>
  )
}

export default Projects
