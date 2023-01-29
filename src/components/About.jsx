import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Dati, nice to meet you, Pleace take a look around</p>
            </div>
        <div>
            <p>
            I think that I have reached the maximum with theoretical knowledge, after which practical experience is needed,
            therefore i decided to create my own Porfolio site to gain knowledge and not only.I have been engaged in programming for a long time, but I have been actively learning it for a few months.


            </p>
        </div>
            </div>
      </div>
    </div>
  )
}

export default about
