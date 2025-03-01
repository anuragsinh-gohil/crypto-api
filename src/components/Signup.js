import React from 'react'
import './Signup.css'

import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup' id="signup">
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Generate passive income through cryptocurrency.</h2>
                    <p>Receive up to 12% annual rewards on 40+ digital assets. Just hold your assets in the app to automatically earn rewards every month, with no lockups or limits.</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
