import { assets } from '@/assets/assets';
import Image from 'next/image';

import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className=''>
                <a href='/'>
                    <Image src={assets.logo} width={80} height={40} alt="Logo" className="cursor-pointer mr-14" />
                </a>
                <ul className='flex space-x-8'>
                    <li>
                        <a href='#top' className='hover:text-blue-500'>Home</a>
                    </li>
                    <li>
                        <a href='#about' className='hover:text-blue-500'>About Me</a>
                    </li>
                    <li>
                        <a href='#services' className='hover:text-blue-500'>Services</a>
                    </li>
                    <li>
                        <a href='#work' className='hover:text-blue-500'>My Work</a>
                    </li>
                    <li>
                        <a href='#contact' className='hover:text-blue-500'>Contact Me</a>
                    </li>
                </ul>
                <div>
                    <a href='#contact' className='flex items-center hover:text-blue-500'>
                        Contact
                        <Image src={assets.arrow_icon} width={20} height={20} alt="Arrow" className='ml-2' />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;