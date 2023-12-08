'use client'
import Link from 'next/link'
import React from 'react'

const Error = ({error, reset}) => {
    return (
        <div className='text-4xl text-center font-bold text-red-700 flex flex-col gap-8  items-center'>
            Error Happened Bro !!!
            <button className=' bg-green-600 text-white font-bold text-2xl p-4 w-60 rounded-md'><Link href="/">Back to Home Page</Link></button>
            <button className='bg-orange-600 text-black font-bold text-2xl p-2 w-60 rounded-md' onClick={() => reset()}>Try Again</button>
        </div>
    )
}

export default Error;