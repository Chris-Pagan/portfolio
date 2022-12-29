import React from 'react'
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaLinkedinIn, FaMastodon } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together</p>
                <h1 className='py-4 text-gray-700'>Hi, I&apos;m <span className='text-[#5651e5]'>Chris</span></h1>
                <h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a front-end web developer focused on creating memorable digital experiences. My current focus is on building responsive front-end applications
                    while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className="rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  <AiOutlineGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  <FaMastodon />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  <BsFillPersonLinesFill />
                </div>

                </div>
            </div>  
        </div>

    </div>
  )
}

export default Main