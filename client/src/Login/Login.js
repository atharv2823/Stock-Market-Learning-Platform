import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
  <div className="wrapper">
    <form action>
      <h1 className="heading"> <span className='heading'>Welcome to Our platform</span></h1>
      <div className="input-box">
        <input type="text" placeholder="Username" required />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required />
      </div>
      <div className="remember-forgot">
        <label> <input type="checkbox" required /> Remember me</label>
        <Link href="#">Forgot Password ?</Link>
      </div>
      <button type="submit" className="btn">Login</button>
      <div className="register-link">
        <p><span className='create-account'>Don't have an account ? </span><Link to="/signup" target="_blank" className="R"> Register</Link></p>
      </div>
    </form>
  </div>
</div>

  )
}

export default Login