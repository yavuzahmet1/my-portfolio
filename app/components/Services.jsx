import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] scroll-mt-20 my-20'>
            <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
            <h2 className='text-center text-5xl'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque fugiat velit possimus, vitae veritatis nihil provident molestiae neque voluptatum exercitationem eius expedita hic ex amet. Itaque atque ipsum odio!</p>
            <div className='grid  md:grid-cols-4 sm:grid-cols-2 gap-6 my-10'>
                {
                    serviceData.map(({ icon, title, description, link }, index) => (
                        <div key={index} className='text-justify 
                        border border-gray-400 rounded-lg py-4 px-4 hover:bg-blue-100 hover:-translate-y-1 duration-300 cursor-pointer'>
                            <Image src={icon} alt='' className=' w-10' />
                            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                            <p className='text-xs text-gray-500 leading-5'>{description}</p>
                            <a href={link}>
                                read more <Image src={assets.right_arrow} alt='' className='w-4' />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services