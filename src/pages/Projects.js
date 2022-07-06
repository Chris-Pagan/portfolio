import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'
import {ProjectList } from '../helpers/ProjectList'

const Projects = () => {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className='projectList'>
            {ProjectList.map((project, idx) => {
                return <ProjectCard id={idx} image={project.image} name={project.name} />
            })}
        </div>
    </div>
  )
}

export default Projects