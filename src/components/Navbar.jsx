import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import DATOO from '../assets/DATOO.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>  
         <Link to="home"  smooth={true} durationcat={500} style={{width:'50px'}}>
                <img src={DATOO} alt="Logo" />
            </Link>
        

        {/*menu*/}
        <ul className='hidden md:flex'>
            <li>
            <Link to="home"  smooth={true} durationcat={500}>
                Home
            </Link>
            </li>
            <li>            
                <Link to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>



        {/*mobile menu*/}
        <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li onClick={handleClick}  className='py-6 text-4xl'>
            <Link to="skills" smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li onClick={handleClick}  className='py-6 text-4xl'>
            <Link to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>



        {/* social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
                    <a className=' flex justify-between items-center w-full text-gray-300'
                     href=" https://www.linkedin.com/in/dati-giorgadze-b32b34257/" target="_blank">
                        Linkedin  <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                    <a className=' flex justify-between items-center w-full text-gray-300 '
                     href="https://github.com/niko940"  >
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-black'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFqxDNxXBBHlccLFbRXzVqnvkTZgcnBmNqrBRqwJnFkBJRblghtvhphrntLPgGKlZqLwJD" >
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="https://docs.google.com/document/d/1rYMIAsMj4WEY3n03CW8yQ0UpOvMeUvCk-_VmInoHvsQ/edit?usp=share_link" >
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
