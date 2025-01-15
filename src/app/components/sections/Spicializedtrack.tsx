"use client"
import {useState} from 'react'
import { programdata } from '../utils/programsdata'
import Image from 'next/image'

function Spicializedtrack() {
const [selecteditem, Setselecteditem] = useState("wmd")
const selecteditemdata = programdata.find((item)=>item.slug===selecteditem)

  return (
    <div className='mt-20 '>
        {/* header */}
        <h2 className='font-bold  text-4xl whitespace-pre-line  mt-3'>Spicialized Tracks:</h2>
        <p className='mt-4 text-lg text-slate-600 max-w-screen-sm'> After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
   <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-6 '>
    {/* left side content */}
    <div className='shadow-xl border border-slate-200 p-8 flex-1 self-start sticky top-28  rounded-md'>
        <h4 className='font-semibold text-teal-900 text-lg '>Specialized Track</h4>
        <h3 className='text-2xl font-semibold mt-3'>{selecteditemdata?.header} </h3>
        <p className='mt-2 text-lg text-slate-600'>{selecteditemdata?.description}</p>
               <button className='mt-4 border hover:scale-105 border-teal-600 rounded px-4 py-2 text-teal-700 font-semibold'>Learn More</button>
               {/* boxses */}
               <div className='flex mt-6 gap-4'>
                {
                  selecteditemdata?.quarters.map((item,i)=>(
                    <div key={i} className='    p-8       relative '>
                    <h4 className='font-bold text-lg'>{item.header} </h4>
                    <p className='mt-2 text-slate-600'>{item.description} </p>
                    <div className='mt-5 absolute -top-12 right-10 text-gray-200  -z-10 text-[150px] font-bold'>{item.number} </div>
                  </div>

                  ))
                }
           
               </div>
      
   
    </div>
    {/* right side content */}
    <div className='px-4 py-6 basis-4/12  space-y-3'>
         {
          programdata.map((item,i)=>(
            <div key={item.slug} onClick={()=>Setselecteditem(item.slug)} className='flex gap-x-3 items-center cursor-pointer'>
            <div className='flex-shrink-0 '>
      
             <Image src={item.image} alt={item.header} className='h-24 w-36 object-cove rounded-md'  />
             </div>
             <div>
              <h4 className='text-teal-600 font-medium'>Specialized Track</h4>
              <h3 className='text-xl font-semibold'>{item.header} </h3>
             </div>
            </div>
          ))
         }
         
    </div>
    </div>
    </div>
  )
}

export default Spicializedtrack;