import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/836940da-fb4b-4cc8-803f-036f727bb956" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-2'>Submit the form below or contact me on my email - d.giorgadze2004@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='Email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message"rows="5" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-600 duration-500 px-4 py-3 my-2 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
