import React from 'react'
import './Form.css'
const Form = () => {
    return (
        <div>
        <nav className="navbar">
            <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#signup">Signup</a></li>
            </ul>
        </nav>
    
        <div id="login" className="form-container">
            <h2>Login</h2>
            <form>
            <label htmlFor="login-email">Email:</label>
            <input type="email" id="login-email" required />
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" required />
            <button type="submit">Login</button>
          </form>
        </div>
  
        <div id="signup" className="form-container">
          <h2>Signup</h2>
          <form>
            <label htmlFor="signup-name">Name:</label>
            <input type="text" id="signup-name" required />
            <label htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" required />
            <label htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" required />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    )
}

export default Form
