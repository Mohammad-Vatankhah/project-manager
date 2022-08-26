import React from 'react'
import { useSelector } from 'react-redux'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  const user = useSelector((state) => state.authReducer.authData.user)
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <ProfileCard user={user} />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide