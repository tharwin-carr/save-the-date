import React from 'react'
import './InfoGuide.css'

export default function InfoGuide() {
    return (
        <div className='info-container'>
            <div className='info-title'>
                <h2>
                    Why Save the Date?
                </h2>
            </div>
            <div className='first-section'>
                <img src="https://img.icons8.com/wired/64/000000/infinity.png" alt='infinity sign'/>
                <h3>
                    Possiblities are endless
                </h3>
                <p>
                    Never run out of date ideas, Save the Date brings tons of date ideas to your fingertips
                </p>
            </div>

            <div className='second-section'>
                <img src="https://img.icons8.com/dotty/64/000000/running-rabbit.png" alt='rabbit'/>
                <h3>
                    Quick and Easy
                </h3>
                <p>
                    Generate a random date idea with a push of a button. 
                    Don't like the suggestion? Press the button again and generate a new idea, it's that simple
                </p>
            </div>
        </div>
    )
}