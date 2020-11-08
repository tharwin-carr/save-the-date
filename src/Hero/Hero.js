import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1 className='hero-header'>
                    Welcome to Save the Date, a platform to help find new and exciting date ideas.
                </h1>
                
                <p className='hero-description'>
                    Save the Date helps elimnate the monotony of going on the same dates with your significant other
                    over and over again by randomly generating a date idea in seconds!
                </p>

                <Link to='/dates'>
                    <button>
                        Get Started
                    </button>
                </Link>            
            </div>
        </div>
    )
}