import React from 'react'
import img from '../assets/blackfriday.png'
function Special() {
  return (
    <div className='md:h-screen bg-[#EBF4FE] flex Special'>
    <div className='md:w-[1250px] md:flex m-auto bg-white'>


       <div className=''> 
       <img className='w-[300px] md:w-[450px] lg:w-[490px] m-auto md:m-0' src={img} alt="" srcset="" />
       </div> 
        <div className='text-center m-auto w-[350px] md:w-[400px] lg:w-[490px] flex flex-col gap-7'>
            <h1 className='text-3xl md:text-5xl font-serif font-bold px-4 py-4'>
            Black Friday Special!
            </h1>
            <p className='text-xl md:text-2xl p-4 text-gray-600'>
            We are running a Botox special for 
            $8.50/unit. Additionally, get 10 units of 
            Botox free when you buy filler syringe of
            $499.
            </p>
            <div>
            <button className="m-5 bg-[#E7E5E4] text-[#7EBAFB] font-bold text-2xl
        px-5 rounded-xl py-4">Book Now</button>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Special



