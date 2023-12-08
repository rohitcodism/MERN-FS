'use client'
import React from 'react'

const ToggleButton = ({ loggedIn }) => {
    return (
        <div>
            <button onClick={(loggedIn) => (!loggedIn)} className='bg-orange-500 rounded-md text-white font-bold text-2xl p-6'>Toggle</button>
        </div>
    )
}

export default ToggleButton;