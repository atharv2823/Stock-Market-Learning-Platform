import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import { useState } from 'react'


function Signup() {

  const [user, setUser] = useState({
    fullName:'',
    email:'',
    password:'',
    dob:''
  })

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      dob: user.dob
    })


    if(response.data.success){
      toast.success(response.data.message)

      setUser({
        fullName: '',
        email: '',
        password: '',
        dob: ''
      })
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
           placeholder="Enter Your Name"
            required
            value={user.fullName}
            onChange={(e)=>{
              setUser({...user,fullName:e.target.value})
            }}
             />
        </div>

        <div className="input-box">
          <input type="text" 
          placeholder="Username/Email"
           required 
           value={user.email}
           onChange={(e)=>{setUser({...user,email:e.target.value})
            }}
           />
        </div>

        <div className="input-box">
          <input type="date"
           placeholder="Enter Your Date of Birth"
            required
            value={user.dob}
            onChange={(e)=>{setUser({...user,email:e.target.value})}}
             
             />
        </div>

        <div className="input-box">
          <input type="password" placeholder=" Create Your Password" required />
        </div>
        
        <button type="button" className="btn" onClick={signup}><Link to="/login" target="_blank" className="R"> <span className='button-tital' >Create Account</span></Link></button>
        <div className="register-link">

        <Link to='/login' className='auth-link'>Already have an account ? Login</Link>

        <Toaster/>
      
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup