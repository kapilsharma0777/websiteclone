import React from 'react'
import lip1 from '../assets/lip1.avif';
import lip2 from '../assets/lip2.avif';
import lip3 from '../assets/lip3.avif';
import head1 from '../assets/head1.avif';
import lip4 from '../assets/lip4.avif';
import head2 from '../assets/head2.avif';

function Gallery() {
  return (
    <div className=' h-auto bg-[#EBF4FE] Gallery py-5'>
       <div className=' m-auto flex flex-col justify-evenly items-center'>
                <div className=' text-center py-5 px-3'>
                    <h1 className='text-3xl md:text-5xl font-serif font-bold p-4'>Before After</h1>
                    <p className='text-lg'>Get a glimpse of our services with our inspiring gallery of images.</p>
                </div>

                <div className=' h-full grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 bg-white p-3 md:max-w-[1260px] mx-auto '>
                 
               <div className=''>  <img className='' src={lip1} alt="" srcset="" />    </div>
               <div className=''>  <img className='' src={lip2} alt="" srcset="" />  </div>
               <div className=''>  <img className='' src={lip3} alt="" srcset="" />  </div>
               
                 </div>

                 <div className=' h-full grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 bg-white p-3 md:max-w-[1260px] mx-auto '>
                 
                 <div className=''>  <img className='' src={head1} alt="" srcset="" />  </div>
               <div className='m-auto'>  <img className='' src={lip4} alt="" />  </div>
               <div className='m-auto'>  <img className='' src={head2} alt="" srcset="" />  </div>
               
                 </div>

                 <div className=' rounded-lg  md:max-w-[700px] bg-[#0560C2] text-white mx-6 my-10 p-5 flex flex-col items-center gap-6'>
                    <h1 className='text-3xl md:text-5xl font-serif text-center'>
                        Transform your look today
                    </h1>
                    <p className='text-xl text-center'>Book a no-pressure free consultation and achieve your goals with expert weight loss, botox, fillers, and skincare treatments.</p>
                  <div>
                  <button className='bg-white text-[#0560C2] rounded-md  p-3 font-semibold'>Book free consultation</button>
                    </div>  
                 </div>
        </div>
    </div>
  )
}

export default Gallery