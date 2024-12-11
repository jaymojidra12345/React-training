import { useState,  useEffect } from 'react'

const UseEffectTask = () => {

    const [user,setUser]= useState(null);

    const fetchRandomUser = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUser(data.results[0]); 
    } catch (err) {
        console.error( err);
    }
    } ;

    useEffect(() => {
        fetchRandomUser();   
    }, [])

    if (!user) {
    return <h1>Loading...</h1>; // Show loading message until user data is available
    }

    return (
    <div>
        <h2>Random user</h2>
        <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        />
        <h2>{user.name.first} {user.name.last}</h2>
    </div>
    )
}

export default UseEffectTask
