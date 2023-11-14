import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import botox from '../assets/botox.avif';
import ServiceCard from './ServiceCard';
import Dermal from '../assets/Dermal.avif'
import weightloss from '../assets/weightloss.avif';
import skin from '../assets/skin.avif';
function Services() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
        },
      };
    return (
        <div className='h-full bg-[#EBF4FE] py-5 w-auto Services'>

            <div className=' m-auto min-h-full flex flex-col justify-evenly'>
                <div className=' text-center py-5 px-2'>
                    <h1 className='text-3xl md:text-5xl font-serif font-bold p-4'>Services</h1>
                    <p className='text-lg'>We offer a full range of high-end, top-quality services using the best beauty products and techniques.</p>
                </div>
                <div className='p-3 py-8'>
                    <Carousel responsive={responsive} >

                       
                    <ServiceCard
                   
                    icon = {<img className=' rounded-t-lg' src={botox} alt="" srcset="" />}
                    heading='Botox'
                    text='Discover a youthful glow with expert Botox
                    treatments, designed to rejuvenate your
                    skin and erase fine lines effortlessly.'
                    />

                    <ServiceCard
                    icon = {<img className=' rounded-t-lg' src={Dermal} alt="" srcset="" />}
                    heading='Dermal Fillers'
                    text='Achieve your desired look and enhance
                    your natural features with my professional
                    injections'
                    />

                    <ServiceCard
                    icon = {<img className=' rounded-t-lg' src={weightloss} alt="" srcset="" />}
                    heading='Medical Weightloss'
                    text='Transform your body with our GLP-1
                    Agonist Weightloss service, tailored to help
                    you shed pounds and embrace a healthier
                    lifestyle'
                    />

                    <ServiceCard
                    icon = {<img className=' rounded-t-lg' src={skin} alt="" srcset="" />}
                    heading='Skin Care'
                    text='Achieve radiant, healthy skin with our
                    comprehensive skincare services, including
                    microneedling, and chemical peels.'
                    />    
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Services