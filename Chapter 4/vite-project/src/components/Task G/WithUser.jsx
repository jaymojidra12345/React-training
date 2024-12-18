import { useState, useEffect } from 'react'

const WithUser = (WrappedComponent, userId) => {
    return function userDataProvider(props) {
        const [user, setUser] = useState(null)

        useEffect(() => {
            const data = [
                { id: 1, name: "Jay Mojidra", email: "jay@gmail.com" },
                { id: 2, name: "Jane Smith", email: "jane@example.com" },
            ]

            const userData=data.find(user => user.id === userId)
            setTimeout(()=>{
                setUser(userData)
            },1000)
        }, [])

        return user ? <WrappedComponent {...props} user={user} /> : <p>User not found</p>;
    };
}


export default WithUser
