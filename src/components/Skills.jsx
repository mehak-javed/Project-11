import React from 'react'
import android from '../assets/images/android.png'
import xcode from '../assets/images/xcode.png'
import swift from '../assets/images/swift.png'
import bitbucket from '../assets/images/bitbucket.png'
import api from '../assets/images/api.png'
import java from '../assets/images/java.png'
import mysql from '../assets/images/mysql.png'
import github from '../assets/images/github.png'






const Skills = () => {
   
  return (
    <div id='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' data-bs-spy="scroll">
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:text-right md:text-center md:lg:pb-8 md:lg:pl-4 pb-8'>
                <p className='inline font-bold border-b-4 border-[#fccb04] text-4xl py-4'> Skills</p>

            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={swift} alt="swift logo" />
                <p>Swift</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={xcode} alt="xcode logo" />
                <p>Xcode</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={android} alt="android logo" />
                <p>Android Studio</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={java} alt="java logo" />
                <p>Java</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mysql} alt="mysql logo" />
                <p>MySQL</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt="github logo" />
                <p>GitHub</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={bitbucket} alt="bitbucket logo" />
                <p>BitBucket</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={api} alt="api logo" />
                <p>Api Integration</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills