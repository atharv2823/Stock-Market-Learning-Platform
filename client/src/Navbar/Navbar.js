import React from 'react'
import "./Navbar.css"
import logo from "./Market Mantra.png"
import { Link } from 'react-router-dom'


function Navbar() {
  return (<>

<div className='navbar-container'>
  <nav className="navbar navbar-expand-lg  " style={{backgroundColor: '#e3f2fd'}}>
    <div className="container-fluid">
      <Link className="navbar-brand heading" to="/"><img src={logo} alt="main-logo" className="main-logo" /> <span className='logo-head'>Market मंत्र</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active nav-item" aria-current="page" to= '/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-item" to="/wishlist" target="_blank">Practice List</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Analytics
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to= '/ChartPatterns'>Chart Patterns</Link></li>
              <li><Link className="dropdown-item" to="/MindSet">Mindset OF Trader</Link></li>
              <li><Link className="dropdown-item" to="/Psychology">Psychology Of Trader</Link></li>
              <li><Link className="dropdown-item" to="/risk">Risk Management</Link></li>
              <hr />
              <li><Link className="dropdown-item" to="/rules">
                  <p style={{color: 'Green'}}>Rules and Brokerage</p>
                </Link></li>
              <li><Link className="dropdown-item" to="/strategy">
                  <p style={{color: 'red'}}>Guru Mantra</p>
                </Link></li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link nav-item" to="/golas" target="_blank">Goals</Link>
          </li> */}
          </ul>
          <button className=" user-login-out" type='button'>
            <Link className="button" to='/login' target="_blank">Log out</Link>
          </button>
        
      </div>
    </div>
  </nav>

</div>

  </>)
}

export default Navbar