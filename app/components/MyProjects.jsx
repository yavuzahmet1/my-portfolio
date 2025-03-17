import { projectsData } from '@/assets/assets'
import Image from 'next/image'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Divider } from '@mui/material';

const MyProjects = () => {
    return (

        <div id='myproject' className='w-full px-[12%] scroll-mt-28 my-20'>
            <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
            <h2 className='text-center text-5xl'>My Projects</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Welcome to my projects page! Here, I showcase my work using modern web technologies like HTML, CSS, JavaScript, React, Next.js, and Redux Toolkit to build dynamic and scalable applications. For styling, I’ve used Sass, Tailwind CSS, and Bootstrap to create responsive and visually appealing designs. Each project is designed to solve real-world problems while prioritizing user experience. Take a look to see how I bring ideas to life through code and creativity!</p>
            <div className='grid  md:grid-cols-4 sm:grid-cols-2 gap-6 my-10'>
                {
                    projectsData.map(({ icon, github, link, title }, index) => (
                        <div key={index} className='text-justify 
                        border border-gray-400 rounded-lg py-2 px-1 hover:bg-blue-50 '>
                            <Image src={icon} alt='' className=' w-50 mx-auto aspect-video' unoptimized />
                            <h4 className='text-sm my-2 text-center text-gray-700'>{title}</h4>
                            <Divider />
                            <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", m: "auto" }}>
                                <a target='_blank' href={github}>
                                    <GitHubIcon className='hover:-translate-y-1 hover: duration-500 cursor-pointer' />
                                </a>
                                <a target='_blank' href={link}>
                                    <LinkIcon className='hover:-translate-y-1 hover: duration-500 cursor-pointer' />
                                </a>
                            </Box>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MyProjects;