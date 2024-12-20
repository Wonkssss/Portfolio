import React from 'react'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100] md:mb-5'id="contact">
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img
                src="/footer-grid.svg"
                alt="grid"
                className="w-full h-full opacity-40"
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Interested in collaborating or <span className="text-purple">learning more</span> about my work? 
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'></p>
            <a href="mailto:wiam.bensaid@edu.devinci.fr">
                <MagicButton
                    title="Let's get in touch"
                    // icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>2024 Wiam</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a 
                    key={profile.id} 
                    href={profile.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                    >
                        <img src={profile.img} alt="icons"
                        width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer