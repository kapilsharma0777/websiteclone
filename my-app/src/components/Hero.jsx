import React from 'react'
import logo from '../assets/logo.png'
import heroimg1 from '../assets/Heroimg1.avif'
function Hero() {
    return (
        <div className='h-auto bghero Hero'>
            <div className="max-w-[1260px] mx-auto py-5 ">

                <div className="md:h-screen w-full px-4 py-4 md:py-15  flex flex-col justify-center items-center md:flex md:flex-row md:justify-around overflow-hidden">
                    <div className="flex flex-col justify-center items-center md:px-4 md:py-16 m-auto md:mx-0 w-[350px] md:w-[400px] lg:w-[470px] h-auto">
                        <img className="mx-auto rounded-t-lg md:rounded-lg " src={heroimg1} alt="" srcset="" />
                    </div>

                    <div className='md:py-16 h-full'>
                        <div className=" bg-[#EBF4FE] h-full rounded-b-lg md:rounded-lg bg-opacity-60 flex flex-col items-center justify-center">

                            <div className='w-[350px] md:w-[400px] lg:w-[490px] 
             flex flex-col items-center  gap-6  p-2 '>

                                <div><img src={logo} alt="" /></div>
                                <div className='text-center '>
                                    <h1 className='py-3 text-4xl font-serif font-semibold'>Skinsation Aesthetics</h1>
                                    <p className='py-3'>Skinsation Aesthetics blends science and esthetics seamlessly. Experience the pinnacle of skincare, where professional expertise and scientific innovation meet, enhancing your natural elegance.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero