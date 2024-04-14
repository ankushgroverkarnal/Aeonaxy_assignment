import React from 'react'
import weight from "../assets/Weight.jpg"
import { Link } from 'react-router-dom'

function Sections3() {
  return (
    <>
    <div className="main">
    <div className='flex h-12 items-center justify-center gap-3 pl-3 pr-3 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28'>
    <Link to="/sec2"><i className="fa-solid fa-less-than hover:cursor-pointer"></i></Link>
        <div className='w-full h-auto bg-neutral-300'>
          <div className='w-[60%] h-1 bg-green-500 rounded-l-[5%]'></div>
        </div>
        

      </div>
      <div className='items-center md:flex md:justify-center gap-24 h-[400px]'>
    <div className='flex justify-center'>
        <img src={weight} alt="weight" className='w-44' />
    </div>
    <div className='flex flex-col items-center'>
        <h1 className='font-bold text-2xl font-sans flex h-20 items-center md:text-start'>You're in the right place</h1>
        <p className='text-[15px] pl-3 pr-3 font-semibold md:w-[400px] md:text-sm '>Brilliant gets you hands-on help improve your Professional skills and knowledge. You'll interect with concept and solve fun  problems in math,science, and computer science</p>
    </div>
    </div>


    </div>
    <Link to="/Math"><div className='h-44 flex items-center justify-center md:h-16 '><button className='bg-black px-10 py-2 font-medium rounded-[10px] hover:bg-neutral-400 hover:opacity-40 text-white'>Continue</button></div></Link>
    {/* --------------------------------------- */}
    
    </>
  )
}

export default Sections3
