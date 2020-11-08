import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
 
export default function NavBar() {
    return (
        <>
            <div className='navbar'>                   
                <Link to='/' className='app-name'>
                    Save the Date
                </Link>
                <Link to='/dates'>
                    <img src="https://img.icons8.com/ios-filled/24/000000/calendar-15.png" alt='calendar icon' className='logo'/>
                </Link>               
            </div>
        </>
    )
}