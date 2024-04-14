import React from 'react'
import rating from "../assets/rating.jpg"
import { Link } from 'react-router-dom'
function Rating() {
  return (
    <>
   <div className="main">
   <div className='flex h-12 items-center justify-center gap-3 pl-3 pr-3 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28'> 
    <Link to="/maths"><i className="fa-solid fa-less-than hover:cursor-pointer"></i></Link>
        <div className='w-full h-auto bg-neutral-300'>
          <div className='w-[100%] h-1 bg-green-500 rounded-l-[5%]'></div>
        </div>

      </div>
      <div className='main w-full flex justify-center items-center gap-24 pl-2 pr-2 '>
        <div><img src={rating} alt="image" className='w-44'/></div>
        <div className='w-96'>
            <h1 className='font-bold text-xl font-sans flex h-16 items-center'>You're on your way!</h1>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <div><i className='text-xs font-semibold'>"Through its enaging and well-structured course,Brilliant has tought me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situation;"</i></div>
        <div className='text-xs font-semibold h-12 flex items-center'><i>--Jacob S.</i></div>
        </div>

    </div>
    <Link to="/loading"> <div className=' justify-center h-44 flex items-center '><button className='bg-black px-10 py-2 font-medium rounded-[10px] hover:bg-neutral-400 hover:opacity-40 text-white'>Continue</button></div></Link>

   </div>
      {/* -------------------------------------------------------------------------- */}

      {/* <div className="container">
    

    <div className='main w-full h-[350px] flex justify-center items-center gap-36 ml-36'>
        <div><img src={rating} alt="image" className='w-36'/></div>
        <div className='w-96'>
            <h1 className='font-bold text-xl font-sans flex h-16 items-center'>You're on your way!</h1>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <i className="text-xl fa-solid fa-star" style={{color:"#FFD43B"}}></i>
        <div><i className='text-xs font-semibold'>"Through its enaging and well-structured course,Brilliant has tought me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situation;"</i></div>
        <div className='text-xs font-semibold h-12 flex items-center'><i>--Jacob S.</i></div>
        </div>

    </div>
       <Link to="/loading"> <div className=' justify-center h-20 flex items-center '><button className='bg-black px-10 py-2 font-medium rounded-[10px] hover:bg-neutral-400 hover:opacity-40 text-white'>Continue</button></div></Link>
    </div> */}
    </>
  )
}

export default Rating
