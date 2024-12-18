import { useState } from 'react'

const WithLoader = (WrappedComponent) => {
    return (props)=>{
        const [loading, setLoading] = useState(true)

        setTimeout(() => {
            setLoading(false)
        }, 1000)

        return (
            <div>
            {loading ? <p>Loading...</p> : <WrappedComponent {...props} />}
            </div>)
    }
}

export default WithLoader
