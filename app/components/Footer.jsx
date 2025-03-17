"use client"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className='text-center'>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>
                    © 2025 Ahmet YAVUZ. All rights reserved.
                </p>
                <ul className='flex items-cente justify-center mt-4 gap-10 sm:mt-0'>
                    <li>
                        <a target='_blank' href="https://www.instagram.com/1yavuzahmet/"><InstagramIcon /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.linkedin.com/in/1yavuzahmet/"><LinkedInIcon /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/yavuzahmet1"><GitHubIcon /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer