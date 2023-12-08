'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const Settings = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col justify-center items-center mt-4'>
            <h1 className='text-3xl font-bold'> This is Settings under admin route group</h1>
            <div
                className='
                    flex
                    flex-col
                    justify-evenly
                    items-center'
            >
                <button onClick={() => {router.push("/home")}}>Go to Home page</button>
                <button onClick={() => {router.push("/user")}}>Go to user page</button>
            </div>
        </div>
    )
}

export default Settings;