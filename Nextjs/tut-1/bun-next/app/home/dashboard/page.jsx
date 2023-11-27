'use client'

import { useRouter, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

const Dashboard = () => {

    const router  = useRouter();

    const segment = useSelectedLayoutSegments();
    console.log(segment);

    return (
        <div className='pl-10'>
            <h1 className='text-2xl text-center'>Dashboard Route</h1>
            <button onClick={() => {router.push("/home")}} className='text-center bg-yellow-500 rounded-lg p-4 ml-32'><h1>Back to home page</h1></button>
            <button onClick={() => {router.push("/home/contacts")}} className='text-center bg-yellow-500 rounded-lg p-4 ml-32'><h1>Go to contacts page</h1></button>
        </div>
    )
}

export default Dashboard;