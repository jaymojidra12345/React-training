import React from 'react'

const User = () => {
    const user={
        name:"jay",
        age:19
    }

  return (
    <div>
      <h2>Name : {user.name}</h2><h2>Age : {user.age}</h2>
    </div>
  )
}

export default User
