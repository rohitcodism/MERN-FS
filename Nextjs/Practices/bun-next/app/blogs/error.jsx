'use client'
import React from 'react'
import Link from 'next/link'

const BlogError = () => {
    return (
        <div
            className='
                text-cyan-700
                text-4xl
                font-bold
                text-center
                flex
                flex-col
                gap-16
                items-center
            '
        >
            You have error in the blog page bro !!!
            <button className=' bg-green-600 text-white font-bold text-2xl p-4 w-60 rounded-md'><Link href="/">Back to Home Page</Link></button>
            <button className='bg-orange-600 text-black font-bold text-2xl p-2 w-60 rounded-md' onClick={() => reset()}>Try Again</button>
        </div>
    )
}

export default BlogError;