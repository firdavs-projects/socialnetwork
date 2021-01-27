import React from 'react'
import Loader from '../Loader/Loader'
import MyPostsContainer from './MyPosts/MyPostsContainer'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  if (!props.profile) {
    return <Loader />
  }

  return (
    <div>
      <ProfileInfo
        status={props.status}
        updateStatus={props.updateStatus}
        profile={props.profile}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile