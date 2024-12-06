import React from 'react'
import "./Psychology.css"
import Navbar from '../Navbar/Navbar'

import Discipline from "./Trading-Discipline.png"
import cycle from "./the cycle of market emotions.webp"
import Arrow from "./arrow-right.png"
import Video from "../MindSet/youtube (1).png"


import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Psychology() {
  return (<>
  <div><Navbar/></div>
  
  <h1 className='ms-2 mt-3 title'>Understanding your trading Psychology</h1>
  <p className='ms-4 psychology-text'>Every trader possesses a unique combination of traits, beliefs, and psychological predispositions that influence their trading style. We’ll call this your “trader DNA.” Understanding your unique trader DNA is essential for tailoring a trading approach that aligns with your individual strengths and weaknesses.</p>

  <p className='ms-4 psychology-text'>It can be hard to evaluate yourself objectively to identify and confront unproductive and unwanted personality traits, but it’s often those traits that cause us to struggle in the market.</p>

  <p className='ms-4 psychology-text'>For example, if someone is stubborn in their everyday life, that same stubbornness may cause them to hold onto losing positions for far too long, hoping for an against-the-odds reversal. This refusal to accept losses can result in substantial damage to your trading account.</p>

  <p className='ms-4 psychology-text'>Experiencing a losing trade can be emotionally challenging—a blow to the ego—which sometimes leads a trader to take the loss personally. This type of emotional attachment frequently results in revenge trading, where traders aim to recoup losses impulsively.</p>



  <img src={cycle} alt="Psychology-cycle" className="cycle-image mt-4" style={{border:'1px solid black'}}/>

  <div className='video-block ' style={{ justifyItems:'center', alignItems:'center',textAlign:'center' }}>
        <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Trader psychology Video </span>
        <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
        <span> <Link to='https://youtu.be/xoGOZD7-3gY?si=qLjU01WWJ6GBBem9' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
      </div>


  <h2 className='ms-4'>You can change your trader DNA</h2>

  <p className='ms-4 psychology-text'>Certain psychological traits can cause you to struggle with consistency and profitability. Fortunately, your trader DNA is not set in stone; there are ways to change it.</p>

  <p className='ms-4 psychology-text'>To build a healthy trading psychology, first acknowledge any negative or counterproductive traits you may have, no matter how uncomfortable that may be. Once you’ve identified your key traits—positive and negative—be more mindful of them and notice when they’re occurring.</p>

  <p className='ms-4 psychology-text'>If you recognize that you’re about to stubbornly dig in on a losing trade, you can catch yourself, cut your losses, and move on. Or if you sense you’re taking a loss too personally, remind yourself that your personal worth is separate from your trading.</p>

  <p className='ms-4 psychology-text'>The goal is not to eliminate your emotions, but to understand them. The more honest you are with yourself, the more in tune you’ll become with your emotions—and the better you’ll be able to minimize their negative effect on your trading.</p>

  <img src={Discipline} alt="head and shoulder" className="cycle-image"/>
 
<div><Footer/></div>
  </>)
}

export default Psychology