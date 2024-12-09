import React from 'react'
import "./MindSet.css"
import MindSetimg1 from "./mindset-image.png"
import MindSetimg2 from "./mindset-image1.jpeg"
import Navbar from './../Navbar/Navbar.js'
import Footer from './../Footer/Footer.js'
import Arrow from "./arrow-right.png"
import Video from "./youtube (1).png"
import { Link } from 'react-router-dom'


function MindSet() {
  return (<>
    <Navbar />
    <div className='mindset-box'> <h2 className="main-Question ms-3 text-center">What is the Mindset of a Trader?</h2>
      <p className="ms-3 fs-5">Being a trader is not just about formulating better strategies and performing more extensive analysis, but is also about developing a winning mindset. According to many studies of traders, what separates a winning trader from a losing one:</p>
      <ol className="ms-3 fs-5">
        <li>It’s NOT that winning traders formulate better trading strategies</li>
        <li>It’s NOT that winning traders are smarter</li>
        <li>It’s NOT that winning traders do better market analysis</li>
      </ol>
      <img src={MindSetimg1} alt="mindset images" className="mindset-img1" />
      <br/>
      <h3 className="ms-3">What separates a winning trader from a losing trader is their psychological mindset.</h3>

      <p className="ms-3 fs-5">Most traders when they first begin trading mistakenly believe that all they need to do is find a great trading strategy. After that, all they’ll need to do is come to the trading market each day, plug in their great trading strategy, and the market will just immediately start pumping money into their account.</p>

      <p className="ms-3 fs-5">Unfortunately, as any of us who have ever traded have learned, it’s not that easy. There are plenty of traders who use intelligent, well-designed trading strategies and systems who still regularly lose money rather than make money.</p>

      <p className="ms-3 fs-5">The few traders who do consistently win the game of trading are those who have developed the appropriate psychological mindset that enables them to be consistent winners. There are certain beliefs, attitudes, and psychological characteristics that are essential to conquering the world of trading.</p>

      <div className='video-block ' style={{ justifyItems:'center', alignItems:'center',textAlign:'center' }}>
        <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Trader Mindset Video </span>
        <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
        <span> <Link to='https://youtu.be/R8SE3RxqaTY?si=PDOBx-Hosiku-Ys6' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
      </div>
      <img src={MindSetimg2} alt="mindset images" className="mindset-img2 mb-3" />
    </div>


    <Footer />
  </>
  )
}

export default MindSet