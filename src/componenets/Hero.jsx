import React from 'react'

function Hero() {
  return (
    <div
    className="bg-cover bg-center bg-no-repeat w-full h-[500px] text-zinc-300 mt-20 flex justify-between ]"
    style={{ backgroundImage: "url('https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=400')" }}  >
        <div className='text-5xl w-1/4 tracking-tighter p-20 mt-32'>Building things is our mission.</div>
         
        <div className='bg-blue-700 w-30 items-center h-44  mt-80 text-center'>
            <h1 className='font-bold '>Feature Project</h1>
            <p className='mt-8 text-lg'>The National University of Architecture</p>
            <div className='flex mt-16 flex-wrap' >
            <button className='bg-black px-20 mx-1'>Prev</button>
            <button className='bg-black px-20'>Next</button>
            </div>
        </div>
  </div>

  )
}

export default Hero