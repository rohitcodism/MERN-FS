'use client'

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

const Dashboard = () => {

    const searchParams = useSearchParams();
    console.log(`Current Search Params : ${searchParams}`);
    const pathName = usePathname();
    console.log(`Current Pathname : ${pathName}`);
    const router  = useRouter();

    return (
        <>
            <h1 className='text-2xl text-center'>Dashboard Route</h1>
            <button onClick={() => {router.push("/home", {scroll : false})}} className='text-center bg-yellow-500 rounded-lg p-4 ml-32'>Back to home page</button>
            <Link href='/home/contacts' scroll={false} >Go to Contacts page thorough link</Link>
        </>
    )
}

export default Dashboard;