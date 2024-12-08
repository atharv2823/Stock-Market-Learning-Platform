import React from 'react'
import "./Rules.css"
import Navbar from '../Navbar/Navbar'

import BSE from "./bombay-stock-exchange.webp"
import NSE from "./NSE.jpg"
import sebi from "./sebi.webp"
import Tax from "./Tax.webp"
import zerodha from "./zerodha.png"
import dhan from "./Dhan.webp"
import upstocks from "./upstoks.jpg"
import groww from "./groww.png"
import angle from "./angleone.png"

import Footer from '../Footer/Footer'

function Rules() {
  return (<>
    <Navbar />

    <h2 className='Title'>Rules And Condition's</h2>

    <p className='info-rules mt-3 ms-4'>The Indian stock market operates under regulations and guidelines established by various authorities, primarily the <b>Securities and Exchange Board of India (SEBI)</b>, to ensure fair practices, protect investors, and maintain market integrity. Here are the key rules and principles:</p>

   <div className='rules-container'>
   <h5 className='ms-4'>1. Eligibility for Trading</h5>
    <ul className='ms-5 fs-6'>
      <li><b>PAN Card Requirement:</b> A Permanent Account Number (PAN) is mandatory for all investors.</li>
      <li><b>Demat Account:</b> Investors must open a Demat account to hold securities electronically.</li>
      <li><b>Trading Account:</b> A trading account is needed to buy and sell shares.</li>

    </ul>
   </div>

    <img src={sebi} alt='BSE' className='sebi-img' />

    <div className='rules-container-1'>
      <h5 className='ms-4'>2. Trading Hours</h5>
    <ul className='ms-5 fs-6'>
      <li><b>Equity Market:</b> Open from 9:15 AM to 3:30 PM IST, Monday to Friday.</li>
      <li><b>Pre-Market Session:</b> From 9:00 AM to 9:15 AM for price discovery.</li>
      <li><b>After-Market Orders:</b> Allowed after 3:30 PM in some cases, but executed in the next trading session.</li>

    </ul>
    </div>

    <div className='rules-container-2'>
    <h5 className='ms-4'>3. Key Regulatory Authorities</h5>
    <ul className='ms-5 fs-6'>
      <li><b>SEBI:</b> Oversees and regulates all market participants, ensuring transparency and fairness.</li>
      <li><b>Stock Exchanges:</b> The two main stock exchanges are the BSE (Bombay Stock Exchange) and the NSE (National Stock Exchange).</li>
      <li><b>RBI:</b> Regulates financial institutions and oversees foreign investments.</li>

    </ul>
    </div>


    <div className='rules-container-3'>
    <h5 className='ms-4'>4. Types of Trades</h5>
    <ul className='ms-5 fs-6'>
      <li><b>Intraday Trading:</b> Buying and selling stocks within the same trading day.</li>
      <li><b>Delivery-Based/Swing Trading:</b> Holding stocks for more than a day.</li>
      <li><b>Futures and Options:</b> Derivatives for hedging and speculative purposes</li>
      <li><b>IPO (Initial Public Offering):</b> Companies raise capital by issuing shares to the public.
      </li>

    </ul>
    </div>

    <img src={Tax} alt='BSE' className='Tax-img' />


    <div className='rules-container-4'>
    <h5 className='ms-4'>5. Taxation on Stock Market Earnings</h5>
    <ul className='ms-5 fs-6'>
      <li><b>Short-Term Capital Gains Tax (STCG):</b> 15% tax on profits from selling shares held for less than a year.</li>
      <li><b>Long-Term Capital Gains Tax (LTCG):</b> 10% tax (above ₹1 lakh) on profits from shares held for more than a year.</li>
      <li><b>Securities Transaction Tax (STT):</b> Applicable on all buy and sell transactions in equity and derivatives.</li>

    </ul>
    </div>
    <hr />

    <h2 className='Title-1'>Platform's and Brokerage</h2>

    <p className='info-rules ms-4 mt-4'>The Indian stock market operates primarily through two major stock exchanges:<b> BSE (Bombay Stock Exchange) and NSE (National Stock Exchange)</b>. These platforms facilitate the buying, selling, and listing of securities and are regulated by the Securities and Exchange Board of India (SEBI).</p>
 
    {/* <div className='exchange-image'> */}
      <img src={NSE} alt='nse img' className='nse-image' />

      <img src={BSE} alt='nse img' className='bse-image' />
    {/* </div> */}
    {/* <div className='Title-block'> */}
      <p className='Title-nse'>NSE: Natonal Stock Exchange</p>

      <p className='Title-bse'>BSE: Bombay Stock Exchange</p>
    {/* </div> */}

    <hr />

    <p className='info-rules ms-4'>  The Indian stock market platforms are dynamic, growing rapidly, and integrating advanced technologies to cater to retail and institutional investors. They are pivotal for India's economic growth and serve as key avenues for wealth creation.</p>

    <p className='info-rules ms-4'>Each platform caters to specific needs—whether you're a beginner looking for simplicity or an advanced trader requiring powerful tools. Choose one based on your trading style and preferences.</p>

    <h5 className='ms-4'> ➢ Here are some Platform's for Indian Stock Market :- </h5>

    <div className='platform-info'>
      <div>
        <h5 className='ms-4'>1. Zerodha (Kite)</h5>
        <p className='info-rules ms-5'>● <b>Overview:</b> India’s largest brokerage firm offering low-cost trading.</p>
        <p className='info-rules ms-5'>● <b>Features:</b>
          <ul className='ms-5'>
            <li>Simple and user-friendly interface.</li>
            <li>Advanced charting tools with multiple indicators.</li>
            <li>Low brokerage (zero for equity delivery, ₹20 per order for intraday and F&O).</li>
          </ul>
          <p className='info-rules ms-1'>● <b>Best For:</b> Beginners and cost-conscious traders.</p>
          <p className='info-rules ms-1'>● <b>App & Web:</b> Kite app and web platform.</p>
        </p>

      </div>
      <div>
        <img src={zerodha} alt='logo' className='logo' />
      </div>
    </div>
    <hr/>

    <div className='platform-info'>
      <div>
        <h5 className='ms-4'>2. Dhan </h5>
        <p className='info-rules ms-5'>● <b>Overview:</b> India’s Simplest and easy to use platform .</p>
        <p className='info-rules ms-5'>● <b>Features:</b>
          <ul className='ms-5'>
            <li>Simple and user-friendly interface.</li>
            <li>Advanced charting tools with multiple indicators.</li>
            <li>Low brokerage (zero for equity delivery, ₹20 per order for intraday and F&O).</li>
          </ul>
          <p className='info-rules ms-1'>● <b>Best For:</b> Beginners and scalper traders.</p>
          <p className='info-rules ms-1'>● <b>App & Web:</b> Dhan app and web platform.</p>
        </p>

      </div>
      <div>
        <img src={dhan} alt='logo' className='logo' />
      </div>
    </div>

    <hr/>

    <div className='platform-info'>
      <div>
        <h5 className='ms-4'>3. Upstox</h5>
        <p className='info-rules ms-5'>● <b>Overview:</b> Backed by prominent investors, known for affordable trading options.</p>
        <p className='info-rules ms-5'>● <b>Features:</b>
          <ul className='ms-5'>
            <li>Competitive brokerage rates (₹20 per trade or 2.5%, whichever is lower).</li>
            <li>Customizable charts and technical analysis tools.</li>
            <li>Fast order execution.</li>
          </ul>
          <p className='info-rules ms-1'>● <b>Best For:</b> Budget traders and tech-savvy users.</p>
          <p className='info-rules ms-1'>● <b>App & Web:</b> Upstox Pro.</p>
        </p>

      </div>
      <div>
        <img src={upstocks} alt='logo' className='logo' />
      </div>
    </div>

    <div className='platform-info'>
      <div>
        <h5 className='ms-4'>4. Groww</h5>
        <p className='info-rules ms-5'>● <b>Overview:</b> Initially focused on mutual funds, now a popular stock trading platform.</p>
        <p className='info-rules ms-5'>● <b>Features:</b>
          <ul className='ms-5'>
            <li>Simple and intuitive design.</li>
            <li>No charges for account opening; zero brokerage for delivery trading.</li>
            <li>Access to stocks, mutual funds, and fixed deposits.</li>
          </ul>
          <p className='info-rules ms-1'>● <b>Best For:</b> Beginners and passive investors.</p>
          <p className='info-rules ms-1'>● <b>App & Web:</b>Groww app and web.</p>
        </p>

      </div>
      <div>
        <img src={groww} alt='logo' className='logo' />
      </div>
    </div>

    <div className='platform-info'>
      <div>
        <h5 className='ms-4'>5. Angle One (Angle Broking)</h5>
        <p className='info-rules ms-5'>● <b>Overview:</b> Full-service broker with both advisory and discount plans.</p>
        <p className='info-rules ms-5'>● <b>Features:</b>
          <ul className='ms-5'>
            <li>AI-based recommendations and advisory services.</li>
            <li>Zero brokerage on equity delivery and flat ₹20 for others.</li>
            <li>SmartAPI for developers.</li>
          </ul>
          <p className='info-rules ms-1'>● <b>Best For:</b> Investors looking for personalized advisory.</p>
          <p className='info-rules ms-1'>● <b>App & Web:</b> Angel One App and website.</p>
        </p>

      </div>
      <div>
        <img src={angle} alt='logo' className='logo' />
      </div>
    </div>

    <Footer />
  </>)
}

export default Rules