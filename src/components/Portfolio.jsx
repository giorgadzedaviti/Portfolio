import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      

      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className= ' text-3xl text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Dati Giorgadze</h1>
        <h2 className='text-4xl sm:text-3xl font-bold text-[#ccd6f6]'>im junior front-end Web Developer </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>It became more than just giving commands to a computer for me.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-black'>View Skills
            <span className='group-hover:rotate-90 duration-500'>
            <HiArrowNarrowRight className='ml-3 hover:'/>
            </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
