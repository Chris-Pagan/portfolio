import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaMastodon, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-200'>Let&apos;s build something together</p>
                <h1 className='py-4 text-gray-200'>Hi, I&apos;m <span className='text-[#5651e5]'>Chris</span></h1>
                <h1 className='py-4 text-gray-200'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-200 max-w-[70%] m-auto'>
                    I am a front-end web developer focused on creating memorable digital experiences. My current focus is on building responsive front-end applications while having fun and learning new technologies. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className="rounded-full shadow-md shadow-gray-300 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                <a href="https://www.linkedin.com/in/chris-pagan/"><FaLinkedinIn /></a>
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                <a href="https://github.com/Chris-Pagan"><FaGithub /></a>
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  <a href='https://opalstack.social/@fallingstar'><FaMastodon /></a>
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  <Link href="/#contact">

                  <AiOutlineMail />
                  </Link>
                </div>

                </div>
            </div>  
        </div>

    </div>
  )
}

export default Main