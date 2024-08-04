import React from 'react';
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <>
     <div className="main-footer bg-[#14213d] text-[#E5E5E5] text-xl px-7 py-4 mt-24 lg:px-20 lg:mt-20 flex justify-center items-center gap-2">
    <p> Made With</p> 
    <p><FaHeart /></p>
    <p>Deepak Maurya</p>
     </div>
    </>
  )
}

export default Footer
