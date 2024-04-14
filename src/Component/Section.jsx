import React from 'react'
import student from "../assets/student.png"
import professional from "../assets/professional.png"
import parents from "../assets/parent.png"
import life from "../assets/life.png"
import Teacher from "../assets/teacher.png"
import other from "../assets/other.png"
import { Link } from 'react-router-dom'

function Section() {
  return (
    <>
 <div className="main">
 <div className='flex h-10 items-center justify-center pl-3 pr-3 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28 '>
        <div className='w-full h-auto bg-neutral-300 '>
          <div className='w-[20%] h-1 bg-green-500 rounded-l-[5%]'></div>
        </div></div>
        <div className=' w-full flex flex-col h-20 items-center justify-center lg:h-28 lg:items-center'>
            <h1 className='font-bold text-xl font-sans flex h-8 items-center md:text-2xl lg:text-3xl lg:h-12'>Which decribes you best?</h1>
            <p className='font-medium text-neutral-500 text-center text-xs md:text-sm lg:text-sm'>This will help us personalize your experience</p>
        </div>
<div className='flex justify-center items-center h-full '>
        <div className="sec w-[380px] lg:w-[600px] text-[13px] flex flex-col gap-2 pl-3 pr-3 ">
<div className='flex items-center h-[70px] md:h-[45px] border rounded-[10px] cursor-pointer'><img src={student} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Student</span><span className='pl-2 text-neutral-500 font-medium'>or soon to be enrolled</span></div>
<div className='flex items-center h-[70px] md:h-[45px] border rounded-[10px] cursor-pointer'><img src={professional} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Professional</span><span className='pl-2 text-neutral-500 font-medium'>pursuing a career</span></div>
<div className='flex items-center h-[70px] md:h-[45px] border rounded-[10px] cursor-pointer'><img src={parents} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Parents</span><span className='pl-2 text-neutral-500 font-medium'>of a school-age child</span></div>
<div className='flex items-center h-[70px] md:h-[45px] border rounded-[10px] cursor-pointer'><img src={life} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Lifelong learner</span></div>
<div className='flex items-center h-[70px] md:h-[45px] border rounded-[10px] cursor-pointer'><img src={Teacher} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Teacher</span></div>
<div className='flex items-center h-[70px] md:h-[45px] border rounded-[10px] cursor-pointer'><img src={Teacher} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Teacher</span></div>
<div className='flex items-center h-[70px] md:h-[45px] border rounded-[10px] cursor-pointer'><img src={other} alt="school" className='w-10 pl-4' /><span className='font-medium pl-4'>Other</span></div>
        </div></div>
        <Link to="/Continue"><div className='h-20 flex  justify-center items-center '><button className='bg-black px-10 py-2 font-medium rounded-[10px] hover:bg-neutral-400 hover:opacity-40 text-white'>Continue</button></div></Link>
 </div>



          </>
  )
}

export default Section
