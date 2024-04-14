import React from 'react'
import machine from "../src/assets/machine.jpg"

function Foundation() {
  return (
    <>
    <div className="main">
        <div className="found flex flex-col items-center h-64 justify-end">
            <div className='text-xl font-semibold h-12 md:text-3xl md:font-bold text-center'>Learning paths based on your answers</div>
            <div className='pl-5 pr-3 text-center'><span className='text-neutral-400 text-sm font-medium '>Choose one to get started. You can with switch anytimes.</span></div>

        </div>
        
            <div className='sec mt-12 items-center  justify-center md:flex'>
                <div className='border-2 h-auto relative pt-5 pb-2 pl-2 ml-2 mr-2 flex md:w-96 md:h-[120px] '>
                    <p className='font-medium'><span className='font-bold'>Foundation Math</span> Build your foundation skills in algebra, gemotry and probabilty.</p>
                    <span className='bg-yellow-500 px-1 py-1 rounded-lg font-semibold text-sm absolute -top-3 left-32'>MOST POPULAR</span>
                <div><img src={machine} alt="machine" className='w-64' /></div>
                </div>
                <div className='border-2 h-auto relative pt-5 pb-2 pl-2 mt-5 md:mt-0 ml-2 mr-2 flex md:w-96 md:h-[120px] '>
                    <p className='font-medium'><span className='font-bold'>Mathematical Thinking</span> Build your foundation skills in algebra, gemotry and probabilty.</p>
                    <span className='bg-yellow-500 px-1 py-1 rounded-lg font-semibold text-sm absolute -top-3 left-32'>MOST POPULAR</span>
                <div><img src={machine} alt="machine" className='w-64' /></div>
                </div>
            
                </div>
                {/* ------------------------------------------------- */}


            </div>
    
      
    </>
  )
}

export default Foundation
