import { useState } from 'react'
const useStatePractise = () => {

  const [user,setUser]= useState({
    email:"",
    password:""
    })

  const handleEmail = (event) => {
    setUser({...user,emḁil:event.target.value})
    console.log(user)
  }

  const handlePass=(event)=>{
    setUser({...user,password:event.target.value})
    console.log(user)
  }

  return (
    <div>
      <h1>Login Form</h1>
      <h3>Enter your email here </h3>
      <input type='email' name='email'  placeholder='email'  onChange={handleEmail} value={user.email}/>

      <h3>Enter your password here</h3>
      <input type='password' name='password'  placeholder='password'  onChange={handlePass} value={user.password}/>

    </div>
  )
}

export default useStatePractise
