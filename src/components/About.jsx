import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true,     // whether animation should happen only once
        });
      }, []);
    
  return (
    <div id='about' className='w-full h-screen bg-[#0a192f] text-gray-300 md:lg:mt-0 md:mt-80 mt-80'
    data-bs-spy="scroll">
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 pt-30'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#fccb04]'>About</p>
                </div>
                <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl text-bold' 
                    data-aos="fade-right" data-aos-delay="300">
                        <p>Hi it's Mahnoor Javed, an iOS Developer.
                             Please take a look around the website to know more about my skills and work. </p>
                    </div>
                    <div >
                        <p data-aos="fade-left" data-aos-delay="300"> Over the past 2 years, I’ve been building sleek, intuitive, and high-performance
                            mobile applications for Apple’s ecosystem. With a strong foundation 
                            in Swift and SwiftUI, I specialize in crafting seamless user experiences
                            that balance aesthetic design with efficient functionality.

                            I’ve worked on a range of iOS apps—from concept to App Store 
                            deployment—gaining hands-on experience in RESTful APIs, Core Data, Combine, and third-party SDK 
                            integration. Whether collaborating with cross-functional teams or independently owning a project, 
                            I strive to write clean, maintainable code and stay updated with the latest iOS trends and best practices. </p>
                    </div>
                </div>
            </div>
         </div>
  )
}

export default About