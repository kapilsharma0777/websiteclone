import React from 'react'
import google from '../assets/google.png'
import star from '../assets/star.png'
import s from '../assets/s.png'
import E from '../assets/E.png'
function Testimonials() {
    return (

        <div className=' bg-[#EBF4FE] Testimonials'>

            <div className=' m-auto min-h-full flex flex-col justify-evenly'>
                <div className=' text-center py-5 px-3'>
                    <h1 className='text-3xl md:text-5xl font-serif font-bold p-4'>Testimonials</h1>
                    <p className='text-lg'>Hear from our best customers, sharing their experiences with us!</p>
                </div>

                <div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 text-white p-3 md:max-w-[1260px] mx-auto'>

                        <div className='bg-white text-black p-4 flex flex-col gap-1 rounded-lg shadow-md'>
                            <div className='flex'>
                                <img className=' w-10 p-1' src={google} alt="" srcset="" />
                                <img className=' w-36' src={star} alt="" srcset="" />
                            </div>
                            <p className='px-3 py-2 text-md from-stone-900' >
                                Sharmeen is amazing- friendly, knowledgeable, quick, and conservative about the amount of product used. She also does eyebrow threading...
                            </p>
                            <div className='flex gap-3 text-sm font-semibold'>
                                <img className='w-12' src={s} alt="" srcset="" />
                                <div>
                                    <h3>K K</h3>
                                    <p>Tue, 21 Aug, 2023</p>
                                </div>
                            </div>
                        </div>

{/* 2 */}
                        <div className='bg-white text-black p-4 flex flex-col gap-1 rounded-lg shadow-md'>
                            <div className='flex'>
                                <img className=' w-10 p-1' src={google} alt="" srcset="" />
                                <img className=' w-36' src={star} alt="" srcset="" />
                            </div>
                            <p className='px-3 py-2 text-md from-stone-900' >
                            Sharmin is so great!! Very professional and answers all my questions. She is really helping me in my weight loss journey.
                            She also does eyebrow Definitely...                            </p>
                            <div className='flex gap-3 text-sm font-semibold'>
                                <img className='w-12' src={s} alt="" srcset="" />
                                <div>
                                    <h3>crystal leverett</h3>
                                    <p>Tue, 16 Aug, 2023</p>
                                </div>
                            </div>
                        </div>
{/* 3 */}

<div className='bg-white text-black p-4 flex flex-col gap-1 rounded-lg shadow-md'>
                            <div className='flex'>
                                <img className=' w-10 p-1' src={google} alt="" srcset="" />
                                <img className=' w-36' src={star} alt="" srcset="" />
                            </div>
                            <p className='px-3 py-2 text-md from-stone-900' >
                            I found Sharmin online after looking for a injectable provider near my area.
                            She also does eyebrow. She contacted me right away and got me in to see her within...</p>
                            <div className='flex gap-3 text-sm font-semibold'>
                                <img className='w-12' src={s} alt="" srcset="" />
                                <div>
                                    <h3>Cristina Cruz</h3>
                                    <p>Tue, 15 jun, 2023</p>
                                </div>
                            </div>
                        </div>
{/* 4 */}

<div className='bg-white text-black p-4 flex flex-col gap-1 rounded-lg shadow-md'>
                            <div className='flex'>
                                <img className=' w-10 p-1' src={google} alt="" srcset="" />
                                <img className=' w-36' src={star} alt="" srcset="" />
                            </div>
                            <p className='px-3 py-2 text-md from-stone-900' >
                            It was my first time doing Botox I was very nervous but Sharmin was very nice and I felt relaxed after she explained to me the procedure...</p>
                            <div className='flex gap-3 text-sm font-semibold'>
                                <img className='w-12' src={E} alt="" srcset="" />
                                <div>
                                    <h3>Edna Cruz</h3>
                                    <p>Tue, 15 Aug, 2023</p>
                                </div>
                            </div>
                        </div>

 {/* 5 */}

 <div className='bg-white text-black p-4 flex flex-col gap-1 rounded-lg shadow-md'>
                            <div className='flex'>
                                <img className=' w-10 p-1' src={google} alt="" srcset="" />
                                <img className=' w-36' src={star} alt="" srcset="" />
                            </div>
                            <p className='px-3 py-2 text-md from-stone-900' >
                            It was my first time doing Botox I was very nervous but Sharmin was very nice and I felt relaxed after she explained to me the procedure. I...                             </p>
                            <div className='flex gap-3 text-sm font-semibold'>
                                <img className='w-12' src={s} alt="" srcset="" />
                                <div>
                                    <h3>SUZANNE BURK</h3>
                                    <p>Tue, 21 Aug, 2023</p>
                                </div>
                            </div>
                        </div>

  {/* 6 */}

  <div className='bg-white text-black p-4 flex flex-col gap-1 rounded-lg shadow-md'>
                            <div className='flex'>
                                <img className=' w-10 p-1' src={google} alt="" srcset="" />
                                <img className=' w-36' src={star} alt="" srcset="" />
                            </div>
                            <p className='px-3 py-2 text-md from-stone-900' >
                                Sharmeen is amazing- friendly, knowledgeable, quick, and conservative about the amount of product used. She also does eyebrow threading...
                            </p>
                            <div className='flex gap-3 text-sm font-semibold'>
                                <img className='w-12' src={s} alt="" srcset="" />
                                <div>
                                    <h3>Selina Singh</h3>
                                    <p>Tue, 18 Jul, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials