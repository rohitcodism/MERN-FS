'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col justify-center items-center mt-4 gap-8'>
            <h1 className='text-3xl font-bold'>Home</h1>
            
            <button onClick={() => {router.push("/settings")}}>Go to Settings</button>
            <button onClick={() =>{router.push("/user")}}>Go to User</button>
            <button onClick={() => {router.push("/home/dashboard")}}>Dashboard</button>
            <button onClick={() => {router.push("/item")}}>Go to Item</button>
            <Link href="/item">Go tp shop through Link</Link>
            <Link href="/home/dashboard">Go to Dashboard through Link</Link>
            <br />
            <br />
        </div>
    )
}

export default Home;