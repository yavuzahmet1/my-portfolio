import { projectsData } from '@/assets/assets'
import Image from 'next/image'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Divider } from '@mui/material';

const Services = () => {
    return (

        <div id='services' className='w-full px-[12%] scroll-mt-28 my-20'>
            <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
            <h2 className='text-center text-5xl'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque fugiat velit possimus, vitae veritatis nihil provident molestiae neque voluptatum exercitationem eius expedita hic ex amet. Itaque atque ipsum odio!</p>
            <div className='grid  md:grid-cols-4 sm:grid-cols-2 gap-6 my-10'>
                {
                    projectsData.map(({ icon, github, link, title }, index) => (
                        <div key={index} className='text-justify 
                        border border-gray-400 rounded-lg py-2 px-1 hover:bg-blue-100 hover:-translate-y-1 duration-300 cursor-pointer'>
                            <Image src={icon} alt='' className=' w-50 mx-auto aspect-video' unoptimized />
                            <h4 className='text-sm my-2 text-center text-gray-700'>{title}</h4>
                            {/* <p className='text-xs text-gray-500 leading-5'>description</p> */}
                            <Divider />
                            <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", m: "auto" }}>
                                <a target='_blank' href={github}>
                                    <GitHubIcon />
                                </a>
                                <a target='_blank' href={link}>
                                    <LinkIcon />
                                </a>
                            </Box>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Services