import React, { useState } from 'react'
import logo from '../assets/images/whitelogo.png'
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () =>setNav(!nav)
  return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 z-50 bg-[#0a192f] 
        text-gray-300 ' data-bs-spy="scroll">
            <div >
                <Link to='home' smooth={true} duration={500}>
                <img src={logo} alt="logo" style={{width: '90px'}} />
                </Link>
            </div>
                <ul className='hidden md:flex uppercase text-sm gap-4'>
                    <li className='hover:text-[#fccb04]'>
                        <Link to='home' smooth={true} duration={500}>
                          Home
                        </Link>
                    </li>
                    <li className='hover:text-[#fccb04]'>
                        <Link to='about' smooth={true} duration={500}>
                          About
                        </Link>
                    </li>
                    <li className='hover:text-[#fccb04]'>
                        <Link to='skills' smooth={true} duration={500}>
                          Skills
                        </Link>
                    </li>
                    <li className='hover:text-[#fccb04]'>
                        <Link to='projects' smooth={true} duration={500}>
                          Projects
                        </Link>
                    </li>
                    <li className='hover:text-[#fccb04]'>
                        <Link to='contact' smooth={true} duration={500}>
                          Reach Me
                        </Link>
                    </li>
                </ul>
            {/* HAMBURGER  */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center'}>
                    <li className=' hover:text-[#fccb04] py-6 text-4xl'> 
                        <Link onClick={handleClick}  to='home' smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li className=' hover:text-[#fccb04] py-6 text-4xl'>
                        <Link onClick={handleClick}  to='about' smooth={true} duration={500}>
                        About
                        </Link>
                    </li>
                    <li className='hover:text-[#fccb04] py-6 text-4xl'>
                        <Link onClick={handleClick}  to='skills' smooth={true} duration={500}>
                          Skills
                        </Link>
                    </li>
                    <li className='hover:text-[#fccb04] py-6 text-4xl'>
                        <Link onClick={handleClick}  to='projects' smooth={true} duration={500}>
                          Projects
                        </Link>
                    </li>
                    <li className='hover:text-[#fccb04] py-6 text-4xl'>
                        <Link onClick={handleClick}  to='contact' smooth={true} duration={500}>
                          Reach Me
                        </Link>
                    </li>
                </ul>
            {/* Social icons */}
            <div className='lg:flex flex-col fixed top-[35%] left-0 hidden' >
                <ul>
                    {/* linkedin */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[5px] duration-300 bg-blue-600'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300 p-2'>
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    {/* github */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[5px] duration-300 bg-gray-600'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300 p-2'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    {/* email
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[5px] duration-300 bg-blue-600'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300 p-2'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
  )
}

export default Navbar