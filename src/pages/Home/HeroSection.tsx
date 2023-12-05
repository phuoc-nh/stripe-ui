import React from 'react';

import './scss/Hero.scss';

function Hero() {
    return (
        <section className="hero">
            <div className='nav-container'>
                <div className="nav-list-media">
                    <div className='nav-item'>Prodcuts</div>
                    <div className='nav-item' >Solutions</div>
                    <div className='nav-item'>Developers</div>
                    <div className='nav-item'>Resources</div>
                    <div className='nav-item'>Pricing</div>
                </div>
            </div>
            
            <div className="container">
                <h1 className="hero-title">Payments infrastructure for the internet</h1>
                <div className="sub-title">Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.</div>
                <div className="hero-btn-container">
                    <button className="btn1">Start now &gt;</button>
                    <button className="btn2">Contact sales &gt;</button>
                </div>
                <div className="color-band"></div>
            </div>
        </section>
    );
}

export default Hero;
