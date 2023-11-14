import React from 'react';

function ServiceCard(props) {
  return (
   
         <div className=' max-w-sm rounded-lg bg-white m-auto '>
                            {props.icon}
                            <div className='p-3 flex flex-col gap-5'>
                                <h2 className='text-2xl md:text-3xl font-semibold font-serif'>{props.heading}</h2>
                                <p>{props.text}
                                </p>

                                <div><button className='px-2 py-3 rounded-md border border-[#7EBAFB] text-[#7EBAFB]'>View Source</button></div>
                            </div>
                        </div>
   
  )
}

export default ServiceCard