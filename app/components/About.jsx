import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {

    return (
        <div id='about' className=' w-full px-[12%] scroll-py-10'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>About me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-10 my-5'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='' className='rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='text-justify mb-4' >
                        Turning dreams into code and being able to guide people at their fingertips must be a realistic dream. I
                        think that it is an environment where one can work with modeling technique for pleasure rather than
                        necessity, and I want to improve myself with different models.

                        First of all, entering the software world was a dream. It was a passion that had been on my mind since my high school years (since 2003). Although I worked in various sectors far from software,
                        I can clearly say that I want to progress in the software industry, I can say that this is a direction where I can enjoy this passion rather than the salary.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {
                            infoList.map(({ icon, iconDark, title, description }, index) => (
                                <li key={index} className='border-[1px] border-gray-400 rounded-xl text-center p-6 cursor-pointer hover:bg-orange-100 hover:-translate-y-0.5 duration-500'>
                                    <Image src={icon} alt='' className='w-7 mt-3 ' />
                                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                    <p className='text-gray-600 text-sm'>{description}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <h4 className='text-center font-semibold my-6 text-gray-700 '>Tools I Use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5 justify-center'>
                        {
                            toolsData.map((tool, index) => (
                                <li key={index} className='flex items-center justify-center  border-gray-500 aspect-square w-12 sm:14 rounded-lg cursor-pointer hover:-translate-y-1 hover: duration-500'>
                                    <Image src={tool} alt='' />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About