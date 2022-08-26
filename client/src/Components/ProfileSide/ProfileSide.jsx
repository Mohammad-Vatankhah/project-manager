import React from 'react'
import { useSelector } from 'react-redux'
import { Home } from '../../Pages/Home/Home'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  const user = useSelector((state) => state.authReducer.authData.user)
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <ProfileCard location={"home"} />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide