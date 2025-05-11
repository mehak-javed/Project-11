import React from 'react'
import work1 from '../assets/images/work/work1.jpg'
import work2 from '../assets/images/work/work2.jpg'
import work3 from '../assets/images/work/work3.jpg'
import work4 from '../assets/images/work/work4.jpg'
import work5 from '../assets/images/work/work5.jpg'
import work6 from '../assets/images/work/work6.jpg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const Project = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true,     // whether animation should happen only once
        });
      }, []);
    
  return (
    <div id='projects' className='w-full h-full md:h-screen text-gray-300 bg-[#0a192f]' data-bs-spy="scroll">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center'>
            <div className='sm:text-right md:text-center md:lg:pb-8 md:lg:pl-4 pb-8' >
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#fccb04]'>Work</p>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 '>
                <img src={work1}className= 'p-2 rounded-2xl' alt=""  data-aos="fade-up" data-aos-delay="300"/>
                <img src={work2}className= 'p-2 rounded-2xl' alt=""  data-aos="fade-up" data-aos-delay="400"/>
                <img src={work3}className= 'p-2 rounded-2xl' alt=""  data-aos="fade-up" data-aos-delay="500"/>
                <img src={work4}className= 'p-2 rounded-2xl' alt=""  data-aos="fade-up" data-aos-delay="600"/>
                <img src={work5}className= 'p-2 rounded-2xl' alt=""  data-aos="fade-up" data-aos-delay="700"/>
                <img src={work6}className= 'p-2 rounded-2xl' alt=""  data-aos="fade-up" data-aos-delay="800"/>

            </div>
           
        </div>
    </div>
  )
}

export default Project