import React from 'react'
import {useNavigate} from 'react-router-dom'

const ProjectCard = ({ image, name, id}) => {
    const navigate = useNavigate();
  return (
    <div className='projetItem' onClick={() => navigate("/project" +id)}>
        <div sytle={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name} </h1>
    </div>
  )
}

export default ProjectCard