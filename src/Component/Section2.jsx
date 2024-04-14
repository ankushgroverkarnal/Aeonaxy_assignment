import React from 'react'
import learning from "../assets/learning.png"
import explore from "../assets/Explore.png"
import ref from "../assets/refreshing.png"
import Exce from "../assets/Excersing.png"
import Something from "../assets/Something.png"
import { Link } from 'react-router-dom'

function Section2() {
  return (
    <>
     <div className="main">
     <div className='flex h-12 items-center justify-center gap-3 pl-3 pr-3 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28'>
     <Link to="/Home"><i className="fa-solid fa-less-than hover:cursor-pointer"></i></Link>
        <div className='w-full h-auto bg-neutral-300'>
          <div className='w-[40%] h-1 bg-green-500 rounded-l-[5%]'></div>
        </div>

      </div>
      <div className='flex flex-col items-center'>
            <h1 className='font-bold text-xl font-sans flex h-12 items-center'>What are the most interested in?</h1>
            <p className='font-medium text-neutral-500 text-center pl-3 pr-2 md:text-sm'>choose just one. 
            This will help us get you started(but won't limit your experience).</p>
        </div>
        <div className='flex justify-center items-center h-[450px] md:h-[350px] '>
        <div className="sec w-[380px] lg:w-[600px] text-[13px] flex flex-col gap-2 pl-3 pr-3 ">
<div className='flex items-center h-[70px] md:h-[60px] border rounded-[10px] cursor-pointer'><img src={learning} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Learning specific skills to advanced my career</span></div>
<div className='flex items-center h-[70px] md:h-[60px] border rounded-[10px] cursor-pointer'><img src={explore} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Exploring new topic I'm interested in </span></div>
<div className='flex items-center h-[70px] md:h-[60px] border rounded-[10px] cursor-pointer'><img src={ref} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Refreshing my math foundations</span></div>
<div className='flex items-center h-[70px] md:h-[60px] border rounded-[10px] cursor-pointer'><img src={Exce} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Exercise my brain to stay sharp</span></div>
<div className='flex items-center h-[70px] md:h-[60px] border rounded-[10px] cursor-pointer'><img src={Something} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Something else</span></div>

        </div></div>
        <Link to="/Continue2"><div className='h-20 flex  justify-center items-center '><button className='bg-black px-10 py-2 font-medium rounded-[10px] hover:bg-neutral-400 hover:opacity-40 text-white'>Continue</button></div></Link>

      
     </div>

   
    </>
  )
}

export default Section2
