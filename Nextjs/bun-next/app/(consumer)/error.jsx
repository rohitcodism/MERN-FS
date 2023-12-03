'use client'
import Link from 'next/link'
import React from 'react'

const Error = () => {
    return (
        <div className='text-4xl text-center font-bold text-red-700 flex flex-col gap-8'>
            Error Happened Bro !!!
            <button className=' bg-green-600 text-white font-bold text-2xl p-4'><Link href="/">Back to Home Page</Link></button>
        </div>
    )
}

export default Error;