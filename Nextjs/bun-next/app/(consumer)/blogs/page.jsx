'use clienty'
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Shop = () => {

    const router = useRouter();

    return (
        <div
            className='
                p-8
                text-4xl
            '
        >
            <h1>Blog route under Consumer Group</h1>
            <br />
            <button onClick={() => {router.push("/blogs/cybersecurity-essentials")}}>Go to a Blog</button>
            <br />
            <Link href="/blogs/ai-fundamentals">Go to specific blog</Link>
        </div>
    )
}

export default Shop;