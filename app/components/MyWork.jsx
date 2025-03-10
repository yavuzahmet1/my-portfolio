import Image from 'next/image'
import React from 'react'
import error from "../../assets/page-error2.gif"

const MyWork = () => {
    return (
        <div id='work' className='w-full px-[12%] scroll-mt-20 my-20 text-center'>
            <Image src={error} alt='' />
        </div>
    )
}

export default MyWork