import React from 'react'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import "./Home.css"
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <div className='postSide'>post</div>
        <div className='rightSide'>right</div>
    </div>
  )
}

export default Home