import Image from 'next/image'
import React from 'react'
import error from "../../assets/page-error.gif"

const ContactMe = () => {
    return (
        <div id='contact' className='w-full px-[12%] scroll-mt-20 my-20 text-center'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>Contact Me</h2>
            <Image src={error} alt='' /></div>
    )
}

export default ContactMe