import React from 'react'
import { Coretracksdata } from '../utils/Coretrackdata'
 
function Coretracks() {
  return (
    <div className=' '>
    <div className=' mt-16 lg:mt-28 max-w-screen-sm'  >
        <h4 className='font-semibold text-teal-900 text-lg mt-4'>Program of Studies</h4>
        <h2 className='font-bold  text-4xl whitespace-pre-line  mt-3'>Core Courses  
(Common in All Specializations)</h2>
        <p className='mt-6 text-lg text-slate-600'>Every participant of the program will start by completing the following three core courses.
</p>
<button className='bg-teal-700  text-white rounded-full px-6 text-lg py-3 hover:scale-105 font-semibold mt-6 mb-5'>Learn More</button>
    </div>
    {/* boxses */}
    <div  className='mt-10 flex flex-col md:flex-row   gap-6  '>
    {
      Coretracksdata.map((t,i)=>(       
        <div key={t.num} className=' border  rounded-md  p-8 flex flex-col flex-1 justify-center  relative '>
          <h4 className='font-bold text-lg'>{t.header} </h4>
          <p className='mt-2 text-slate-600'> {t.desc} </p>
          <div className='mt-5 absolute -top-8 right-10 text-gray-200  -z-10 text-[150px] font-bold'>{t.num} </div>
        </div>
      )   
      )
    }
        </div>        
    </div>
  )
}
export default Coretracks;