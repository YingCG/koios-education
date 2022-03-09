import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && (
      <>
        <div className='home-container'>
          <div className='page-contents'>
            <img className='avatar' src={user.picture} alt={user.name} />
            <h2>Welcome, {user.nickname}!</h2>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button className='button-primary'> Edit Profile </button>
          </div>
          <div className='home-image'>
            <img className='classroom-picture' src='/images/classroom.jpg'/>
          </div>
        </div>
      </>
    )
  )
}

export default Profile
