import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import { useState } from 'react'


function Signup() {

  const [user, setUser] = useState({
    fullname:'',
    email:'',
    password:'', 
    dob:''
  })

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      dob: user.dob
    })


    if(response.data.success){
      toast.success(response.data.message)

      setUser({
        fullname: '',
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
            value={user.fullname}
            onChange={(e)=>{
              setUser({...user,fullname:e.target.value})
            }}
             />
        </div>

        <div className="input-box">
          <input type="text" 
          placeholder="Email"
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
            onChange={(e)=>{setUser({...user,dob:e.target.value})}}
             
             />
        </div>

        <div className="input-box">
          <input type="password"
           placeholder=" Create Your Password"
            required
            value={user.password}
            onChange={(e)=>{
              setUser({...user,password:e.target.value})
            }}
             />
        </div>
        
        <button type="button" className="btn" onClick={signup}>Create Account</button>
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