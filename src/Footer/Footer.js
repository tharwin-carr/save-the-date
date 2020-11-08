import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className='footer-container'>
                    <p>
                        Save the Date | Created by Tharwin 2020
                    </p>

                    <a href='https://github.com/tharwin-carr' target='_blank' rel='noreferrer'>
                        <img src="https://img.icons8.com/ios-filled/16/000000/github.png" alt='github icon'/>            
                    </a>

                    <a href='https://www.linkedin.com/in/tharwin-carr/' target='_blank' rel='noreferrer'>
                        <img src="https://img.icons8.com/android/16/000000/linkedin.png" alt='LinkedIn symbol'/>                
                    </a>   

                    <a href='mailto:tharwin.carr08@gmal.com' target='_blank' rel='noreferrer'>
                        <img src="https://img.icons8.com/material-sharp/16/000000/filled-sent.png" alt='email send'/>                            
                    </a>
            </div>
        </>
    )
}