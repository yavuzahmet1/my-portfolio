import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' /></div>
            <h3 className='flex gap-2 items-end text-xl md:text-2xl mb-3 '>Hi! I'm Ahmet YAVUZ <Image src={assets.hand_icon} alt='' className='w-6' /> </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px]'> Fullstack Developer Student based in Türkiye</h1>
            <p>
                I specialize in creating responsive web applications using Spring Boot, Node.js, HTML, CSS, and
                JavaScript, particularly with frameworks like React. I’m passionate about user experience and enjoy
                collaborating with teams to build accessible, high-performance websites. In my free time, I like to
                explore new technologies and contribute to open-source projects.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-2 border rounded-full border-gray-500 flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='rounded-full w-4' /></a>
                <a href="#resume" download className='px-10 py-2 border rounded-full border-gray-500 flex items-center gap-2 '>my resume<Image src={assets.download_icon} alt='' className='rounded-full w-4' /></a>
            </div>
        </div>

    )
}

export default Header