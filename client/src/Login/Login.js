import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import {useState} from 'react'


function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const loginNow = async ()=>{
     const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`,{
      email,
      password
    })
    if(response.data.success){

      toast.success(response.data.message)

      localStorage.setItem('currentUser',JSON.stringify(response.data.data))
      toast.loading('Redircting To DashBoard...')
      setTimeout(() => {
        window.location.href ='/'
      },3000)

     
    }
    else{
      toast.error(response.data.message)
    }
  }




  return (
    <div>
  <div className="wrapper">
    <form action>
      <h1 className="heading"> <span className='heading'>Welcome to Our platform</span></h1>
      <div className="input-box">
        <input type="text" 
        placeholder="Username"
         required 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         />
      </div>
      <div className="input-box">
        <input type="password"
         placeholder="Password" 
         required 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
      </div>
      <div className="remember-forgot">
        <label> <input type="checkbox" required /> Remember me</label>
        <Link href="#">Forgot Password ?</Link>
      </div>
      <button type="button" 
      className="btn"
       onClick={loginNow}>Login</button>

       
      <div className="register-link">
        <p><span className='create-account'>Don't have an account ? </span><Link to="/signup" target="_blank" className="R"> Register</Link></p>
      </div>
    </form>
  </div>
  <Toaster/>
</div>



  )
}

export default Login