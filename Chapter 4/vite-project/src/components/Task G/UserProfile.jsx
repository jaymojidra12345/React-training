import React from 'react'

const UserProfile = ({user}) => {
  return (
    <div>
      <h1>User Profile</h1>
      <h3>Name : {user.name}</h3>
      <h3>Email : {user.email}</h3>
    </div>
  )
}

export default UserProfile
