"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenu = useRef(null);

    const openMenu = () => {
        sideMenu.current.style.transform = "translateX(0)";
    };

    const closeMenu = () => {
        sideMenu.current.style.transform = "translateX(100%)";
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between w-full px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${isScroll ? "bg-opacity-50 backdrop-blur-sm shadow-sm" : ""}`}>
                <a href="#top">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-amber-100 shadow-sm bg-opacity-50"}`}>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex gap-2.5'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                        Contact
                        <Image src={assets.arrow_icon} className='w-3' alt='' />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* ---mobile menu---- */}
                <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-amber-200 transition-transform duration-500 transform translate-x-full'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-6' />
                    </div>

                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a onClick={closeMenu} href="#services">Services</a></li>
                    <li><a onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;