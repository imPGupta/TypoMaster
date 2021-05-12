import React from 'react';
import landing from '../assets/landing.png';
import Typewriter from 'typewriter-effect';
import '../style.css';

const Landing = () => {
    return (
        <div className='landing-container'>
            <div className='landing-left' data-aos='fade-right'>
                <h1 className='landing-header'>Can You Type...</h1>
                <div className='typewriter-container'>
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Accurate?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className='landing-right' data-aos='fade-left'>
                <img
                    src={landing}
                    alt='LandingImage'
                    className='landing-image'
                />
            </div>
        </div>
    );
};

export default Landing;
