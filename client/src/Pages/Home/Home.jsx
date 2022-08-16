import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import "./Home.css"
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostSide />
        <div className='rightSide'>right</div>
    </div>
  )
}

export default Home