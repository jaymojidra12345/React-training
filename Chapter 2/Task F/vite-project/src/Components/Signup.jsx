import {useState} from 'react'

const Signup = () => {

    const [username, setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function handleChange(event) {
        const { name, value } = event.target; // Destructure name and value from the event
    
        if (name === "username") {
            setUsername(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    function handleSubmit(event){
        event.preventDefault()
        alert("Form submitted")
    }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
    
    )
}

export default Signup
