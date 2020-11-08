import React from 'react'
import { Link } from 'react-router-dom'
import './Dates.css'

export default function Dates() {
    return (
        <div className='dates-container'>
            <h1>
                Your next date is only a click away!
            </h1>

            <p className='date-idea'>
                Go on a picnic at a park you have never been to.
            </p>

            <button className='date-button'>
                Generate New Date
            </button>
            <br/>

            <Link to='/add-date'>
                <button className='add-date-button'>
                    Add Date Idea
                </button>
            </Link>
        </div>
    )
}