import React from 'react'
import Projects from '../Projects/Projects'
import "./PostSide.css"
const PostSide = () => {
  return (
    <div className='PostSide'>
        <button className='button' id='create-button'>Create new project</button>
        <Projects />
    </div>
  )
}

export default PostSide