import React from 'react'
import Arthmatic from "../assets/Arthmatic.png"
import Foundation from "../assets/Foundation.png"
import Intermdetate from "../assets/Intermdetate.png"
import Advance from "../assets/Advance.png"
import { Link } from 'react-router-dom'

function Math() {
  return (
    <>
  <div className="main">
  <div className='flex h-12 items-center justify-center gap-3 pl-3 pr-3 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28 '>
    <Link to="/sec3"><i className="fa-solid fa-less-than hover:cursor-pointer"></i></Link>
        <div className='w-full h-auto bg-neutral-300'>
          <div className='w-[80%] h-1 bg-green-500 rounded-l-[5%]'></div>
        </div> </div>
      <div className='flex flex-col h-36 items-center'>
            <h1 className='font-bold text-2xl font-sans flex h-12 items-center'>What is your math comfort level?</h1>
            <p className=' text-sm font-medium text-neutral-500 text-center pl-2 pr-2'>Choose the highest level you feel confident in - you can always  adjust later.</p>
        </div>
     
        <div className="math flex flex-col items-center gap-3 md:hidden">
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Arthmatic} alt="math" className='w-24' /></div>
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Foundation} alt="math"  className='w-24'/></div>
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Intermdetate} alt="math" className='w-32' /></div>
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Advance} alt="main"  className='w-24'/></div>
        </div>
        <div className="hidden md:flex flex-wrap w-full justify-center gap-3">
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Arthmatic} alt="math" className='w-24' /></div>
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Foundation} alt="math"  className='w-24'/></div>
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Intermdetate} alt="math" className='w-32' /></div>
            <div className='w-40 flex items-center justify-center h-32 border-2 hover:border-yellow-400 hover:cursor-pointer '><img src={Advance} alt="main"  className='w-24'/></div>
        </div>
        <Link to="/rating"> <div className=' justify-center h-20 flex items-center md:h-44 '><button className='bg-black px-10 py-2 font-medium rounded-[10px] hover:bg-neutral-400 hover:opacity-40 text-white'>Continue</button></div></Link>
  </div>


      
    </>
  )
}

export default Math
