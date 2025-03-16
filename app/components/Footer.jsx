import React from 'react'

const Footer = () => {
    return (
        <div className='text-center'>
            <div className='w-max mx-auto'>
                1yavuzahmet@gmail.com
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>
                    © 2025 Ahmet YAVUZ. All rights reserved.
                </p>
                <ul className='flex items-cente justify-center mt-4 gap-10 sm:mt-0'>
                    <li>
                        <a target='_blank' href="https://www.instagram.com/1yavuzahmet/">instagram</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.linkedin.com/in/1yavuzahmet/">linkedin</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/yavuzahmet1">github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer