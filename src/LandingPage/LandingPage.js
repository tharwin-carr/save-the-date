import React from 'react'
import './LandingPage.css'
import Hero from '../Hero/Hero'
import InfoGuide from '../InfoGuide/InfoGuide'


export default function LandingPage() {
    return (
        <div className='LP-container'>
                <Hero />
                <InfoGuide />
        </div>
    )
}
