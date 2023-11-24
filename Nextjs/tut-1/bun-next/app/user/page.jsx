'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const User = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col justify-center items-center mt-4'>
            <h1 className='text-3xl font-bold'>User</h1>
            <div
                className='
                    flex
                    flex-col
                    justify-evenly
                    items-center'
            >
                <button onClick={() => {router.push("/home")}}>Go to Home page</button>
                <button onClick={() => {router.push("/settings")}}>Go to settings page</button>
            </div>
        </div>
    )
}

export default User;