import React from 'react'
import './LandingPage.css'
import Hero from '../Hero/Hero'
import InfoGuide from '../InfoGuide/InfoGuide'


export default function LandingPage() {
    return (
        <div className='LP-container'>
            <div>
                <Hero />
            </div>
            <div className='info-guide-container'>
                <InfoGuide />
            </div>
        </div>
    )
}
