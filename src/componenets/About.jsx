import React from 'react'

function About() {
  return (
    <>
    <div className='flex justify-center mt-10 p-20  relative flex-wrap'>
          <div className=''>
          <img
            src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
            className="block mr-auto ml-auto  h-[50vh] w-[50vh] "
          />
          </div>
          
          
          <div className='absolute top-28 right-[45vh]  bg-blue-800   text-white p-10 pb-5 text-center'>
            <h1 className=' font-bold text-2xl ' >About Us</h1>
        <p className="w-72 overflow-hidden h-60 bg-opacity-80 m-3 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, voluptatibus doloribus, nostrum laboriosam minima minus nobis blanditiis dolore aliquid sapiente hic voluptas quos cupiditate itaque reiciendis eveniet beatae? Explicabo provident tempore veritatis similique sunt voluptatum. Porro ut nemo quod inventore atque eligend
        </p>
        <button className='bg-zinc-100 text-blue-700 font-bold p-5 '>More about us </button>
      </div>
    </div>
    
    </>
  )
}

export default About