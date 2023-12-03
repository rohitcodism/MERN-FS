

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const posts = await fetch('http://127.0.0.1:4000/data').then((res) => res.json());
    console.log(posts);

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const Dashboard = () => {

    // const searchParams = useSearchParams();
    // console.log(`Current Search Params : ${searchParams}`);
    // const pathName = usePathname();
    // console.log(`Current Pathname : ${pathName}`);
    // const router = useRouter();

    

    return (
        <div
            className='
                text-center
            '
        >
            <h1 className='text-2xl text-center'>Dashboard Route</h1>
            <br />
            {/* <button onClick={() => { router.push("/home") }} className='text-center bg-yellow-500 rounded-lg p-4'>Back to home page</button> */}
            <br />
            <br />
            <Link href='/home/contacts' scroll={false} >Go to Contacts page thorough link</Link>
        </div>
    )
}

export default Dashboard;