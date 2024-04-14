import React from 'react'
import { Link } from 'react-router-dom'

function Loading() {
  return (
    <>
    <div className=' flex justify-center h-screen items-center'>
        <div className='flex flex-col gap-5 items-center'>
        <Link to="/found">  <div className='w-16 h-16 rounded-full border-8 border-yellow-500'></div></Link>
       <Link to="/found"> <div><p className='font-semibold pl-7'>Finding leaning path recmmendations for you based on your responses </p></div></Link>
    </div>

</div>
      
    </>
  )
}

export default Loading
