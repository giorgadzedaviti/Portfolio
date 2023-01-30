import dati123 from '../assets/dati123.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
import React from 'react'
import {Link} from 'react-scroll'


  const Home = () => {
    return (
      <div name='home' className='  w-full h-screen bg-[#0a192f]'>
        
        <div className='max-w-[1000px] mx-auto px-1 flex flex-col justify-center h-full  items-center'>
          <p className= 'mt-20 text-3xl text-red-600'>Hi, my name is</p>
          <h1 className='mt-0 text-4xl sm:text-5xl font-bold text-[#ccd6f6] '>Dati Giorgadze</h1>
          <img src={dati123} alt='dati giorgadze' className=' w-96 transition-all duration-500  hover:blur-none  rounded-full mt-9 mb-9'/>
          <h2 className='items-center flex coltext-4xl sm:text-3xl font-bold text-[#ccd6f6]'>I'm junior front-end Web Developer </h2>
          
          <div className='mt-3'>
            <button className='mt-5 lg:mb-10 text-white group border-2 px-6 py-1 my-3 flex items-center hover:bg-red-600 hover:border-black object-center'>
              <Link to="skills" smooth={true} duration={500}>View Skills</Link>
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
  