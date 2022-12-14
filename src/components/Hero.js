import React from 'react'
import './Hero.css'
import Crypto from "../images/hero-img.png"
import Featured from './Featured'
import SignUp from './SignUp'
import Footer from './Footer'

function Hero() {
    return (
        <div className='hero'>
        <div className='container'>

         <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrency with Your IRA</h1>
          <p>Buy, Sell and store hundreds of Cryptocurrencies</p>
           <div className="input-container">
            <input type="email" placeholder='Enter your email'/>
            <button className="btn">Learn More</button>
           </div> 
         </div>


        {/* Right Side */}
        <div className="right">
            <div className="img-container">
                <img src={Crypto} alt="crypto" />
            </div>
        </div>
      </div>
      <Featured />

      <div>
        <SignUp />
      </div>
      <div>
        <Footer />
      </div>
        </div>
        
         
    )
}

export default Hero
