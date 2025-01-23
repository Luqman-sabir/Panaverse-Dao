import Image from 'next/image'
import React from 'react'
import hero from '/public/images/hero-poster.webp'
function Hero() {
  return (
    <div className='   w-[100%]  flex  max-[1000px]:flex-col  '>
        <div className='max-w-2xl mt-7 w-[50%] max-[1000px]:w-[100%]  '>
            <h4 className='font-semibold text-teal-900 text-xl mt-4'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className='font-bold  text-4xl sm:text-5xl mt-3'>Certified Web 3.0 and Metaverse Developer</h1>
            <p className='mt-6 text-xl text-slate-600'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>

<p className='mt-6 text-xl text-slate-600'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
        <button className='bg-teal-700  text-white rounded-full px-6 text-lg py-3 hover:scale-105 font-semibold mt-6 mb-5'>Learn More</button>
        </div>
        <div className='w-[50%] max-[1000px]:w-[100%]'>
<Image src={hero} alt='hero'  className='' />
        </div>
    </div>
  )
}

export default Hero