import React from 'react'
import "./Wishlist.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Wishlist() {
  return (<>
  <Navbar/>
<div>
  {/* body start */}
  <h3 className="text-center  mt-3 wishlist-heading">Watch List</h3>
  {/* cards  start*/}
  <div className="wishlist-container mb-3 ">
    <h2 className="wishlist-title">Nifty 50</h2> 
    <p>The Nifty 50 is a benchmark stock market index for the National Stock Exchange of India (NSE). It consists of the top 50 actively traded Indian stocks from various sectors like banking, IT, energy, pharmaceuticals, etc.</p>
    <a href=" https://in.tradingview.com/chart/?symbol=NSE%3ANIFTY " target="_blank" className="view-chart"><div className='btn-container'><button className="btn-view">Details 🔍</button><button className="btn-view">View Chart 📊</button></div></a>
  </div>
  <div className="wishlist-container mb-3 ">
    <h2 className="wishlist-title">Bank Nifty</h2> 
    <p>Bank Nifty is an index that represents the 12 most liquid and large capitalized Indian banking stocks. It serves as a benchmark for the banking sector's performance in the Indian stock market. Bank Nifty provides investors and traders with an indication of the overall health and direction of the banking industry. </p>
    <a href="https://in.tradingview.com/chart/?symbol=NSE%3ABANKNIFTY " target="_blank"  rel="noreferrer" className="view-chart"><div className='btn-container'><button className="btn-view">Details 🔍</button><button className="btn-view">View Chart 📊</button></div></a>
  </div>
  <div className="wishlist-container mb-3">
    <h2 className="wishlist-title">Senxes</h2> 
    <p>The S&amp;P BSE Sensex, commonly referred to as the Sensex, is the benchmark stock index of the Bombay Stock Exchange (BSE) in India. It represents the performance of the top 30 companies listed on the BSE based on market capitalization and is widely followed as a barometer of the Indian stock market. </p>
    <a href=" https://in.tradingview.com/chart/?symbol=BSE%3ASENSEX" target="_blank" className="view-chart"><div className='btn-container'><button className="btn-view">Details 🔍</button><button className="btn-view">View Chart 📊</button></div></a>
  </div>
  <div className="wishlist-container mb-3">
    <h2 className="wishlist-title">Nifty FIN</h2> 
    <p>The Nifty Financial Services Index (Nifty FIN) is a sectoral index of the National Stock Exchange of India (NSE). It comprises companies from the financial services sector, including banks, non-banking financial companies (NBFCs), insurance companies, and other financial institutions.</p>
    <a href=" https://in.tradingview.com/chart/?symbol=NSE%3AFINNIFTY1%21 " target="_blank" className="view-chart"><div className='btn-container'><button className="btn-view">Details 🔍</button><button className="btn-view">View Chart 📊</button></div></a>
  </div>
</div>

<Footer/>
  
  </>
    
  )
}

export default Wishlist