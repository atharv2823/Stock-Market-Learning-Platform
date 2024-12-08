import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, RouterProvider , createBrowserRouter} from "react-router-dom"


import Home from "./Home/Home.js"
import Login from "./Login/Login.js"
import Signup from "./Signup/Signup.js"
import ChartPatterns from './ChartPatterna/ChartPatterns.js';
import MindSet from './MindSet/MindSet.js';
import Psychology from './Psychology/Psychology.js';
import Wishlist from './Wishlist/Wishlist.js';
import Risk from './Risk/Risk.js';
import Rules from './Rules/Rules.js';
import Strategy from './Startegy/Strategy.js';
import App from './App.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));



//  const router =  createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/signup',
//     element: <Signup />,
//   },
//   {
//     path: '/ChartPatterns',
//     element: <ChartPatterns/>
//   },
//   {
//     path: '/MindSet',
//     element: <MindSet/>
//   },
//   {
//     path: '/goals',
//     element: <ChartPatterns/>
//   },
//   {
//     path: '/psychology',
//     element: <Psychology/>
//   },
//   {
//     path: '/wishlist',
//     element: <Wishlist/>
//   },
//   {
//     path: '/risk',
//     element: <Risk/>
//   },
//   {
//     path: '/rules',
//     element: <Rules/>
//   },
//   {
//     path: '/strategy',
//     element: <Strategy/>
//   },
//   {
//     path: '*',
//     element: <h1>404 Page Not Found</h1>
//   },
//  ])

//  root.render(<RouterProvider router= {router} />);

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
