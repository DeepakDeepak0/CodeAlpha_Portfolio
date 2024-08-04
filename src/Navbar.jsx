import React, { useState } from 'react';
import pic from '/image_1.png';
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';





const Navbar = () => {
  const [menu , setmenu] =useState(true);
  const menubtn  = <CiMenuFries size={24} />
  const crossbtn = <RxCross2  size={24}/>

  const show =()=>{
    const mainsItems = document.querySelector(".mains-items");
    mainsItems.classList.toggle('hidden');

  }

  const navItems = [
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Skills"
      
    },
   
    {
      id:4,
      text:"Projects"
    },
    {
      id:5,
      text:"Contacts"
    },
  ]

  return (
    <>
      <div className=' main-nav bg-[#14213d] text-[#E5E5E5] flex z-10 px-7 py-4 justify-between items-center md:px-20 fixed top-0 left-0 right-0 shadow-md '>
        <div className="left flex space-x-4">
           <img src={pic} alt=""  className='bg-[#E5E5E5] h-12 w-12 rounded-full'/>
             <h1  className=' text-xl font-black cursor-pointer'>
                DEEPA<span className='text-blue-700 text-xl'>K</span>
                <p className='text-sm font-bold'>Web Developer</p>
             </h1>            
        </div>
        <div className="right hidden lg:flex list-none space-x-10 text-xl font-medium">
            <li><NavLink to="/"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Home</NavLink>  </li>
            <li><NavLink to="/About"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>About</NavLink>  </li>
            <li><NavLink to="/Projects"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Projects</NavLink>  </li>
            <li><NavLink to="/Skills"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Skills & Achievements</NavLink>  </li>
            <li><NavLink to="/Contacts"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Contacts</NavLink>  </li>
            
        </div>
        <div className='right-sm-devices lg:hidden' onClick={()=>{setmenu(!menu), show()}} >
        {menu ? menubtn : crossbtn }
        </div>
      </div>
      {/* for mobile devices */}
      <div className='mains-items  hidden top-[88px]  w-full h-7 py-36  lg:hidden bg-[#ffffff09] backdrop-blur-[3px]'>
            <ul className='flex flex-col items-center space-y-4 text-2xl bg-[#ffffff09] font-medium '>
            <li><NavLink to="/"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Home</NavLink>  </li>
            <li><NavLink to="/About"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>About</NavLink>  </li>
            <li><NavLink to="/Projects"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Projects</NavLink>  </li>
            <li><NavLink to="/Skills"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Skills & Achievements</NavLink>  </li>
            <li><NavLink to="/Contacts"className=' hover:text-blue-700 hover:scale-105 duration-200 cursor-pointer'>Contacts</NavLink>  </li>
            </ul>
        
        </div>
             
    </>
  )
}

export default Navbar
