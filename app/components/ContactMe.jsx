import Image from 'next/image'
import React from 'react'
import error from "../../assets/page-error.gif"

const ContactMe = () => {
    return (
        <div id='contact' className='w-full px-[12%] scroll-mt-20 my-20 text-center'><Image src={error} alt='' /></div>
    )
}

export default ContactMe