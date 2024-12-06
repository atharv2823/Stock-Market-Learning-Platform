import React from 'react'
import "./Risk.css"
import Navbar from '../Navbar/Navbar'

import stoploss from "./Stoploss.png"
import risk from "./risks-management-in-day-trading.webp"
import Footer from '../Footer/Footer'
import Arrow from "./../Psychology/arrow-right.png"
import Video from "../MindSet/youtube (1).png"
import { Link } from 'react-router-dom'


function Risk() {
  return (<>
    <Navbar />

    <h1 className='title mt-2'> What is Risk Management ?</h1>

    <p className='info ms-3 me-4'>Risk management helps cut down losses. It can also help protect traders' accounts from losing all of its money. The risk occurs when traders suffer losses. If the risk can be managed, traders can open themselves up to making money in the market.</p>

    <p className='info ms-3 me-4'>It is an essential but often overlooked prerequisite to successful active trading. After all, a trader who has generated substantial profits can lose it all in just one or two bad trades without a proper risk management strategy. So how do you develop the best techniques to curb the risks of the market?</p>

    <img src={stoploss} alt='risk' className='risk-management-img' />

    <p className='info ms-4 me-4'> This article will discuss some simple strategies that can be used to protect your trading profits. </p>
    <h4 className='info ms-4 fs-3 '> 🔹KEY TAKEAWAYS</h4>
    <p className='info ms-4 me-4'>•	Trading can be exciting and even profitable if you are able to stay focused, do due diligence, and keep emotions at bay.</p>
    <p className='info ms-4 me-4'>•	Still, the best traders need to incorporate risk management practices to prevent losses from getting out of control.</p>

    <p className='info ms-4 me-4'>•	Having a strategic and objective approach to cutting losses through stop orders, profit taking, and protective puts is a smart way to stay in the game.</p>


    <div className='video-block ' style={{ justifyItems:'center', alignItems:'center',textAlign:'center' }}>
        <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Risk Management Video </span>
        <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
        <span> <Link to='https://youtu.be/v3lfIdpKSiU?si=mdfkIsTRKi_ZZEyB' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
      </div>


    <h3 className='info ms-4 fs-3'> ⭕- Setting Stop-Loss and Take-Profit Points</h3>

    <p className='info ms-4 me-4'>A stop-loss point is the price at which a trader will sell a stock and take a loss on the trade. This often happens when a trade does not pan out the way a trader hoped. The points are designed to prevent the "it will come back" mentality and limit losses before they escalate. For example, if a stock breaks below a key support level, traders often sell as soon as possible.</p>

    <p className='info ms-4 me-4'> On the other hand, a take-profit point is the price at which a trader will sell a stock and take a profit on the trade. This is when the additional upside is limited given the risks. For example, if a stock is approaching a key resistance level after a large move upward, traders may want to sell before a period of consolidation takes place.</p>

    
    <div className='video-block ' style={{ justifyItems:'center', alignItems:'center',textAlign:'center' }}>
        <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Stop loss Hunting Video </span>
        <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
        <span> <Link to='https://youtu.be/28SJaG87iLo?si=uMtuFHKLIS0nGRpi' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
      </div>

    <h3 className='info ms-4 fs-3'> ⭕- How to More Effectively Set Stop-Loss Points</h3>

    <p className='info ms-4 me-4'>Setting stop-loss and take-profit points is often done using technical analysis, but fundamental analysis can also play a key role in timing. For example, if a trader is holding a stock ahead of earnings as excitement builds, they may want to sell before the news hits the market if expectations have become too high, regardless of whether the take-profit price has been hit.</p>

    <p className='info ms-4 me-4'>Moving averages represent the most popular way to set these points, as they are easy to calculate and widely tracked by the market. Key moving averages include the 5-, 9-, 20-, 50-, 100- and 200-day averages. These are best set by applying them to a stock's chart and determining whether the stock price has reacted to them in the past as either a support or resistance level.</p>

    <p className='info ms-4 me-4'>Another great way to place stop-loss or take-profit levels is on support or resistance trend lines. These can be drawn by connecting previous highs or lows that occurred on significant, above-average volume. The key is determining levels at which the price reacts to the trend lines or moving averages and, of course, on high volume.</p>

     
    <div className='video-block ' style={{ justifyItems:'center', alignItems:'center',textAlign:'center' }}>
        <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch Stop Loss strategy Video </span>
        <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
        <span> <Link to='https://youtu.be/vDbl8VqpANA?si=EPtcQBU5XLqnmfIu' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
      </div>

      <img src={risk} alt='risk' className='risk-management-img' />


    <Footer />

  </>)
}

export default Risk