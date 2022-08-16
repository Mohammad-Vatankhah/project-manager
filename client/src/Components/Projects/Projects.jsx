import React from 'react'
import "./Projects.css"
import Project from '../Project/Project'
import { ProjectData } from '../../Data/ProjectData'
const Projects = () => {
  return (
    <div className='Projects'>
      {ProjectData.map((project,id) => {
        return <Project data={project} id={id}/>
      })}
    </div>
  )
}

export default Projects