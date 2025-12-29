import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    useEffect(() => {

  document.body.style.backgroundColor=`${toggle?"white":"black"}`
  document.body.style.color=`${toggle?"black":"white"}`
    

   

 }, [toggle])


 

  return (
    <div className='mt-2   shadow-2xl shadow-gray-500 border-gray-400'>
        {/* for mobile  */}
        <div className="nav sm:hidden  flex   justify-between items-center p-2 ">
        <img className='w-8  ' src={`${toggle?"black-hamburger.svg":"hamburger.svg"}`} alt="" />
        <img className=' w-13  sm:w-16' src="round-pic.webp" alt="" />
       
        <div className="right-icons flex gap-4">
        <img onClick={()=>setToggle(!toggle)} className='w-7' src={`${toggle?"dark.svg":"light.svg"}`}  alt="" />
        <img className=' w-7 sm:w-8 ' src={`${toggle?"black-bell.svg":"bell.svg"}`} alt="" />
        
        </div>

        </div>
        {/* for tablets */}
        <div className="nav hidden  sm:flex lg:hidden   justify-between   items-center p-2 ">

        <div className="left-icons flex items-center gap-6">
        <img className='w-8  ' src={`${toggle?"black-hamburger.svg":"hamburger.svg"}`} alt="" />
        <img className='w-16' src="round-pic.webp" alt="" />
        </div>
    <div className="right-icons flex items-center gap-4   ">
        <img onClick={()=>setToggle(!toggle)} className='w-8' src={`${toggle?"dark.svg":"light.svg"}`} alt="" />
        <img className='w-8 ' src={`${toggle?"black-bell.svg":"bell.svg"}`} alt="" />
    </div>
        </div>

        {/* for pc/laptop */}
        <div className="nav hidden  lg:flex  justify-between   items-center p-2 ">

        <div className="left-icons flex items-center gap-18">
    <a href="/">
       <img  className='w-16 cursor-pointer' src="round-pic.webp" alt="" />

    </a>
      
 
        <h1 className='text-3xl ' >Dashboard</h1>
        </div>
    <div className="right-icons flex items-center gap-4   ">
        <img  onClick={()=>setToggle(!toggle) } className='w-8 cursor-pointer' src={`${toggle?"dark.svg":"light.svg"}`} alt="" />
        <img className='w-8 cursor-pointer ' src={`${toggle?"black-bell.svg":"bell.svg"}`} alt="" />
    </div>
        </div>


    


    </div>
  )
}

export default Navbar