import React from 'react'
import './AddDate.css'

export default function AddDate() {
    return (
        <div className='add-date-container'>
            <form>
                <h2>
                    Add Date Idea
                </h2>
                <textarea 
                    rows='4' 
                    cols='30'
                    name='date-text'
                    type='text'
                    defaultValue='enter date description here...'>
                </textarea>
                <br />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}