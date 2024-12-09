import React from 'react'
import "./ChartPatterns.css"
import Navbar from './../Navbar/Navbar.js'
import Footer from './../Footer/Footer.js'

import Arrow from "../Psychology/arrow-right.png"
import Video from "../MindSet/youtube (1).png"

import Assendingtringle from "./Ascending tringle.webp"
import headandshoulder from "./head and shoulder.webp"
import doubletop from "./Double top.webp"
import doublebottom from "./Double Bottom.webp"
import Roundingbottom from "./Round Bottom.webp"
import cupandhandle from "./Cup and handle.webp"
import wedges from "./Wedges.webp"
import Pennantorflags from "./pennat flags.webp"
import Descendingtriangle from "./Decending Triangle.webp"
import Symmetricaltriangle from "./Symmetric triangle.webp"
import { Link } from 'react-router-dom'


function ChartPatterns() {
    return (<>
        <Navbar />
        <div>

            <h2 className="text-center mt-3 title">Learn Chart Patterns</h2>

            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">1</p>Head and shoulders</h4>
                <p className="ms-5 charts-info">Head and shoulders is a chart pattern in which a large peak has a slightly smaller peak on either side of it. Traders look at head and shoulders patterns to predict a bullish-to-bearish reversal.

                    Typically, the first and third peak will be smaller than the second, but they will all fall back to the same level of support, otherwise known as the ‘neckline’. Once the third peak has fallen back to the level of support, it is likely that it will breakout into a bearish downtrend.</p>
                <img src={headandshoulder} alt="head and shoulder" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/QBlGGL5cyt8?si=Kkyf13wQoDtmVQYp' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>


            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">2</p>Double top</h4>
                <p className="ms-5 charts-info">A double top is another pattern that traders use to highlight trend reversals. Typically, an asset’s price will experience a peak, before retracing back to a level of support. It will then climb up once more before reversing back more permanently against the prevailing trend.</p>
                <img src={doubletop} alt="double top" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/y2vK2NNBOTg?si=87HA0krChjMWnH-a' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>


            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">3</p>Double bottom</h4>
                <p className="ms-5 charts-info">A double bottom chart pattern indicates a period of selling, causing an asset’s price to drop below a level of support. It will then rise to a level of resistance, before dropping again. Finally, the trend will reverse and begin an upward motion as the market becomes more bullish.

                    A double bottom is a bullish reversal pattern, because it signifies the end of a downtrend and a shift towards an uptrend.</p>
                <img src={doublebottom} alt="Double bottom" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/y2vK2NNBOTg?si=LgPjk2DwC3_Xik6q' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>


            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">4</p>Rounding bottom</h4>
                <p className="ms-5 charts-info">A rounding bottom chart pattern can signify a continuation or a reversal. For instance, during an uptrend an asset’s price may fall back slightly before rising once more. This would be a bullish continuation.

                    An example of a bullish reversal rounding bottom – shown below – would be if an asset’s price was in a downward trend and a rounding bottom formed before the trend reversed and entered a bullish uptrend.</p>
                <img src={Roundingbottom} alt="round bottom" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/pv7m3q0FX5o?si=cpi9uZ050MbB6oEY' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>


            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">5</p>Cup and handle</h4>
                <p className="ms-5 charts-info">The cup and handle pattern is a bullish continuation pattern that is used to show a period of bearish market sentiment before the overall trend finally continues in a bullish motion. The cup appears similar to a rounding bottom chart pattern, and the handle is similar to a wedge pattern – which is explained in the next section.

                    Following the rounding bottom, the price of an asset will likely enter a temporary retracement, which is known as the handle because this retracement is confined to two parallel lines on the price graph. The asset will eventually reverse out of the handle and continue with the overall bullish trend.</p>
                <img src={cupandhandle} alt="Cup and handle" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/u38ldCw0CSo?si=DBCNHBdIh3pePWof' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>

            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">6</p>Wedges</h4>
                <p className="ms-5 charts-info">Wedges form as an asset’s price movements tighten between two sloping trend lines. There are two types of wedge: rising and falling.

                    A rising wedge is represented by a trend line caught between two upwardly slanted lines of support and resistance. In this case the line of support is steeper than the resistance line. This pattern generally signals that an asset’s price will eventually decline more permanently – which is demonstrated when it breaks through the support level.</p>
                <img src={wedges} alt="Wedges" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/U4qs-5uIxjc?si=YaaBiMyDF0EMBtO7' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>

            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">7</p>Pennant or flags</h4>
                <p className="ms-5 charts-info">Pennant patterns, or flags, are created after an asset experiences a period of upward movement, followed by a consolidation. Generally, there will be a significant increase during the early stages of the trend, before it enters into a series of smaller upward and downward movements.</p>
                <img src={Pennantorflags} alt="Pennant or flags" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/qdLm169MzpI?si=20u76RtuY92dsh7Y' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>

            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">8</p>Ascending triangle</h4>
                <p className="ms-5 charts-info">The ascending triangle is a bullish continuation pattern which signifies the continuation of an uptrend. Ascending triangles can be drawn onto charts by placing a horizontal line along the swing highs – the resistance – and then drawing an ascending trend line along the swing lows – the support.</p>
                <img src={Assendingtringle} alt="Ascending triangle" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/U4qs-5uIxjc?si=qa-2Ov8cdDeCOSqY' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>

            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">9</p>Descending triangle</h4>
                <p className="ms-5 charts-info">In contrast, a descending triangle signifies a bearish continuation of a downtrend. Typically, a trader will enter a short position during a descending triangle – possibly with CFDs – in an attempt to profit from a falling market.</p>
                <img src={Descendingtriangle} alt="Descending triangle" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/U4qs-5uIxjc?si=qa-2Ov8cdDeCOSqY' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>


            <div className="chart-container">
                <h4 className="ms-5"> <p className="sr-number">10</p>Symmetrical triangle</h4>
                <p className="ms-5 charts-info">The symmetrical triangle pattern can be either bullish or bearish, depending on the market. In either case, it is normally a continuation pattern, which means the market will usually continue in the same direction as the overall trend once the pattern has formed.

                    Symmetrical triangles form when the price converges with a series of lower peaks and higher troughs. In the example below, the overall trend is bearish, but the symmetrical triangle shows us that there has been a brief period of upward reversals.</p>
                <img src={Symmetricaltriangle} alt="Symmetrical triangle" className="chart-image" />
            </div>

            <div className='video-block ' style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                <span className='ms-5 mt-3 mb-2 video-text fs-3' style={{ fontWeight: 'bolder' }}>Watch the Full Video </span>
                <img src={Arrow} alt="arrow" className="arrow-image ms-3" style={{ width: '80px' }} />
                <span> <Link to='https://youtu.be/OoilOgjzUdQ?si=FrXBmUCUgHoLemNC' target='blank' className='fs-3 mb-5 ms-4' style={{ textDecoration: 'none', fontWeight: 'bold' }} > <img src={Video} alt='video' className="video-image ms-5 mt-3" style={{ width: '100px', cursor: 'pointer' }} /> </Link> </span>
            </div>
        </div>
        <Footer />
    </>)
}

export default ChartPatterns