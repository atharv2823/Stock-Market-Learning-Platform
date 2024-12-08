import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx'
import Login from './Login/Login.js';
import Home from './Home/Home.js';
import Signup from './Signup/Signup.js';
import ChartPatterns from './ChartPatterna/ChartPatterns.js';
import MindSet from './MindSet/MindSet.js';
import Psychology from './Psychology/Psychology.js';
import Wishlist from './Wishlist/Wishlist.js';
import Risk from './Risk/Risk.js';
import Rules from './Rules/Rules.js';
import Strategy from './Startegy/Strategy.js';


const token = JSON.parse(localStorage.getItem('currentUser'))
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)


    useEffect(() => {
        setIsAuthenticated(!!token)
    }, [])

    return (
        <Routes>
            <Route path='/login' element={<ProtectedRoute condition={!isAuthenticated} ifCondition={<Login />} elseCondition={<Navigate to='/' />} />} />
            <Route path='/signup' element={<ProtectedRoute condition={!isAuthenticated} ifCondition={<Signup />} elseCondition={<Navigate to='/signup' />} />} />
            <Route path='/' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<Home />} elseCondition={<Navigate to='/login' />} />} />
            <Route path='/ChartPatterns' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<ChartPatterns />} elseCondition={<Navigate to='/login' />} />} />
            <Route path='/MindSet' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<MindSet />} elseCondition={<Navigate to='/login' />} />} />
            <Route path='/psychology' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<Psychology />} elseCondition={<Navigate to='/login' />} />} />
            <Route path='/wishlist' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<Wishlist />} elseCondition={<Navigate to='/login' />} />} />
            <Route path='/risk' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<Risk />} elseCondition={<Navigate to='/login' />} />} />
            <Route path='/rules' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<Rules />} elseCondition={<Navigate to='/login' />} />} />
            <Route path='/strategy' element={<ProtectedRoute condition={isAuthenticated} ifCondition={<Strategy />} elseCondition={<Navigate to='/login' />} />} />


        </Routes>

    );
}

export default App;
