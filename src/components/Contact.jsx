import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-auto md:lg:h-[400px] pt-10 bg-[#0a192f] text-gray-300' data-bs-spy="scroll" >
       <div className='p-4 text-left md:text-center lg:text-enter md:lg:pb-8 md:lg:pl-4 pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#fccb04] '>Reach Me</p>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-2 px-1'>
            
                    <div className='md:lg:text-right text-left text-2xl p-3 md:lg:p-8'>
                    <h1>Phone:</h1>
                    <p data-aos="fade-right" data-aos-delay="300">(+92) 3224539958</p>  
                    </div>
                    <div className=' md:lg:text-right text-left text-2xl p-3 md:lg:p-8'>
                    <h1>E-mail</h1>
                    <p data-aos="fade-left" data-aos-delay="300">mahnoorjaved2008@gmail.com</p>
                    </div>
        </div>
               
     </div>
  )
}

export default Contact