import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import video from '../assets/images/video.mp4'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true,     // whether animation should happen only once
        });
      }, []);
  return (
    <div id ='home' className='bg-[#0a192f] w-full h-screen md:pt-0 pt-8 md:pl-8'>
        {/* container */}
        <div className='md:lg:grid md:lg:grid-cols-2 md:lg:pt-0 pt-8 md:pl-8'>
        <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center h-full'>
            <p className='text-[#fccb04]'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]' data-aos="fade-up" data-aos-delay="300"
            >Mahnoor Javed</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]' data-aos="fade-up" data-aos-delay="400">iOS Developer </h2>
            <p className='py-4 max-w-[700px] text-[#8892b0]'>To join a well renowned organization with a 
                challenging atmosphere, this will enhance my skills and
                 can stretch me to learn more to become a useful
                  employee for the organization and to become the 
                  best in my field. I have a strong professional background 
                  with abilities to adapt and grow according to organizational
                   demands and at the same time, give me an opportunity to 
                   sharpen my skills with a chance to grow professionally.</p>
                   
                   <div >
                    <button className='group uppercase text-white border-2 px-6 py-3 my-2 flex hover:border-[#fccb04] items-center text-bold hover:bg-[#fccb04]'
                    data-aos="fade-up" data-aos-delay="500">
                        <Link to='projects' smooth= {true} duration={500}>
                        Dive into my Creations
                        </Link>
                     
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowRight className='ml-2'/>
                        </span>
                    </button>
                   </div>
                  

        </div>
        <div className='md:lg:p-20 w-full h-screen pt-4 md:pl-8 p-4 mt-10'>
            <video className='rounded-3xl ' loop autoPlay={true} muted type="video/mp4" src={video}></video>
            </div>
        </div>
    </div>
  )
}

export default Home