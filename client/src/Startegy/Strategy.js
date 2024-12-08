import React from 'react'
import "./Strategy.css"
import Navbar from '../Navbar/Navbar'

import { Link } from 'react-router-dom'
import Video from "../MindSet/youtube (1).png"
import Arrow from "./../Psychology/arrow-right.png"
import options from "./options.webp"
import swing from "./Swing.webp"
import intraday from './intraday.png'
import Footer from '../Footer/Footer'

function Strategy() {
    return (<>
        <Navbar />
        <h2 className="Title" >Guru Mantra</h2>
        <h4 className='ms-3'>◉ Strategies for Futures and Options :</h4>

        <h5 className='strategy ms-5'>1. Futures Strategies :</h5>

        <p className='info ms-5'>Futures are contracts to buy or sell an asset at a predetermined price and date. These strategies involve outright positions or combinations to manage risks:</p>

        <ul>
            <li className='strategy ms-5'><b>Long Futures :</b>Buying futures contracts to profit from a rise in the underlying asset’s price.</li>
            <li className='strategy ms-5'><b>Short Futures :</b>Selling futures contracts to benefit from a fall in the underlying asset’s price.</li>
            <li className='strategy ms-5'><b>Spread Trading :</b>Simultaneously buying and selling related futures contracts to profit from price differences, such as calendar spreads.
            </li>

        </ul>


        <h5 className='strategy ms-5'>1. Options Strategies :</h5>

        <p className='info ms-5'>Options give the right (but not the obligation) to buy or sell the underlying asset at a specific price before a set expiration date. These strategies are more versatile:</p>

        <ul>
            <li className='strategy ms-5'><b>Call Buying :</b>Profiting from an expected increase in the underlying price.</li>
            <li className='strategy ms-5'><b>Put Buying :</b>Benefiting from a predicted price decrease.</li>
            <li className='strategy ms-5'><b>Spread Trading :</b>Simultaneously buying and selling related futures contracts to profit from price differences, such as calendar spreads.
            </li>

        </ul>

        <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
            <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch Futures and Options strategy Video </span>
            <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
            <span> <Link to='https://youtu.be/jPhwBvyMe_k?si=rSjBCLRG-4eyoJL2' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
        </div>

        <img src={options} alt='optiins img' className='options-img' />

        <hr />

        <h4 className='ms-3'>◉ Strategies for Swing Trading :</h4>

        <p className='info ms-5' >Swing Trading Strategies are designed to capitalize on short- to medium-term price movements in financial markets. Swing traders typically hold positions for a few days to a few weeks, aiming to profit from "swings" in an asset's price caused by market volatility.</p>

        <h5 className='ms-5'>Key Principles of Swing Trading</h5>
        <ol className='ms-5'>
            <li><b>Time Frame :</b>Trades typically last from 2 days to several weeks.</li>
            <li><b>Market Selection :</b>Suitable for stocks, forex, commodities, and cryptocurrencies with clear trends or regular price movements.</li>
            <li><b>Technical Analysis :</b>Swing trading relies heavily on chart patterns, indicators, and price action to identify entry and exit points.</li>
        </ol>

        <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
            <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch Swing Trading strategy Video </span>
            <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
            <span> <Link to='https://youtu.be/RfdcE4Ebxh8?si=IE-XeKN3YWSQ_cQx' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-3 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
        </div>

        <img src={swing} alt='optiins img' className='swing-img' />
        <hr/>

        <h4 className='ms-3'>◉ Strategies for Intraday Trading :</h4>

        <p className='info ms-5' >Intraday Trading, also known as day trading, involves buying and selling financial instruments within the same trading day, aiming to profit from short-term price movements. Traders close all positions before the market closes to avoid overnight risk.</p>

        <h5 className='ms-5'>Key Principles of Swing Trading</h5>
        <ol className='ms-5'>
            <li><b>Time Frame :</b>Trades typically last from 2 days to several weeks.</li>
            <li><b>Objective :</b>Profit from small price movements through high trading volumes.</li>
            <li><b>Technical Analysis :</b>Swing trading relies heavily on chart patterns, indicators, and price action to identify entry and exit points.</li>
        </ol>

        <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
            <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch Intraday Strategy Video </span>
            <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
            <span> <Link to='https://youtu.be/8OurAiVyhE4?si=cB4wIKcscz9hL-ek' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-3 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
        </div>


        <img src={intraday} alt='optiins img' className='intrady-img' />

        <Footer />

    </>)
}

export default Strategy