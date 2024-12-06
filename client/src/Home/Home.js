import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js'
import laptop from "./../Home/market-laptop.svg"
import banner from "./banner-img.png"

function Home() {
  return (<>
    <Navbar />

    <section className="mantra mt-5 text-center">
      <h4 className="mantra">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</h4>
    </section>

    <div className="mainpage-container">
      <div className="laptop-container">
        <img src={laptop} alt="laptop" className="mt-5 laptop-img" />
      </div>
      <div className="info-container">
        <h3 className="info ms-5 mt-5">What is <b className="que-head">Market मंत्र</b> ?</h3>
        <p className="ms-5 me-5 site-info">A <b className="info-start">Market मंत्र</b> website is an online platform that
          provides
          information and resources related to the stock market and investing. These websites cater to a wide
          range of
          users, including individual investors, traders, financial professionals, and researchers.</p>
        <p className="ms-5"> Here are some key aspects of share market websites:</p>
        <p>
        </p><ol type="I" className="ms-5 info-list">
          <li><b>Market Data:</b> Share market websites offer real-time or delayed market data, including stock
            prices,
            indices, trading volumes, and other relevant market indicators. This data helps users stay informed
            about
            current market conditions and track the performance of specific stocks or indices.
          </li>
          <li>
            <b> Research and Analysis:</b> These websites often provide tools and resources for conducting
            research and
            analysis on individual stocks, sectors, and market trends. Users can access financial statements,
            analyst
            reports, earnings estimates, charting tools, and other research materials to make informed
            investment
            decisions.
          </li>
          <li>
            <b> Educational Content:</b> Share market websites may offer educational content and resources to
            help users
            learn about investing, trading strategies, market analysis techniques, and financial planning. This
            content
            can include articles, tutorials, videos, webinars, and interactive tools aimed at educating
            investors of all
            experience levels.
          </li>
        </ol>
        <p />
        <p>
        </p>
      </div>
    </div>
    <hr />

    <div className='global-main-block'>
      <h3 className="text-center global-heading">Global News</h3>
      <br />
      
        <div className="banner-img">
          <img src={banner} alt="banner" className="market-banner " />
        </div>
        <div className="other-info">
          <p className="ms-3 fs-3"><b>Additonal Key Points of Our Website :-</b></p>
          <p className="ms-5">
          </p><ol type={1}>
            <li>
              <b>News and Commentary:</b> Many share market websites feature news articles, market commentary, and
              analysis from financial experts and journalists. This helps users stay updated on the latest
              developments in the financial markets, economic trends, corporate news, and regulatory changes that
              may
              impact their investments.
            </li>
            <li>
              <b> Community and Forums:</b> Some share market websites host online communities and forums where
              users
              can interact with each other, share investment ideas, discuss market trends, and seek advice from
              fellow
              investors. These communities can provide valuable insights and perspectives from a diverse range of
              market participants.
            </li>
          </ol>
          <p />
        </div>
      
    </div>
   


    <Footer />
  </>)
}

export default Home