import React from 'react'
import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <p>&copy; 2022 Chris Pagan</p>
    </div>
  )
}

export default Footer