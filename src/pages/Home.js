import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My name is Chris</h2>
            <div className='prompt'>
                <p>This is to be filled in later, but is an about me section</p>
            </div>
            <LinkedInIcon/>
            <GitHubIcon/>
            <EmailIcon/>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>ReactJS, HTML, CSS, NPM, BootStrap, TailwindCSS</span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>NodeJS, ExpressJS, PostgreSQL</span>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Home