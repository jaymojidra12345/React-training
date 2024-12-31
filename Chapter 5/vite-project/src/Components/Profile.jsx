import React from 'react'
import { NavLink, Outlet, useParams,useNavigate } from 'react-router-dom'

const Profile = () => {
    const { name } = useParams()

    const users = {
        Jay: { name: "Jay Mojidra ", age: 20, email: "jaymojidra@gmail.com" },
        Vivek: { name: "Vivek", age: 22, email: "vivek@gmail.com" },
        Vanraj: { name: "Vanraj ", age: 20, email: "vanraj@gmail.com" },
    }

    const user = users[name];
    const navigate=useNavigate()

    if (!user) {
        navigate("/nopage",{replace:true})
        return null
    }

    const handleGoBack=()=>{
        navigate(-1)
    }


    return (
        <div>
            <h1>Welcome to the App ,  {user.name}</h1>
            <h2>Age : {user.age}</h2> <h2>Email : {user.email}</h2>

            <nav>
                <NavLink to="posts">Posts</NavLink> | <NavLink to="friends">Friends</NavLink>
            </nav>
            <br/>

            <button onClick={handleGoBack}>Go Back</button>
            <Outlet />
        </div>
    )
}

export default Profile
