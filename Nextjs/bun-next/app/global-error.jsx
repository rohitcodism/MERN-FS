'use client'
import React from 'react'

const GlobalError = ({error, reset}) => {
    return (
        <html>
            <body>
                <div
                    className='
                text-4xl
                font-bold
                text-center
                flex
                flex-col
                gap-16
                items-center
                text-red-700    
            '
                >
                    You have encountered a Global Error bro !!!
                    <button className='bg-orange-600 text-black font-bold text-2xl p-2 w-60 rounded-md' onClick={() => reset()}>Try Again</button>
                </div>
            </body>
        </html>
    )
}

export default GlobalError;