import React from 'react'
import Link from 'next/link';

const Shop = () => {
    return (
        <div
            className='
                p-8
                text-4xl
            '
        >
            <h1>Blog route under Consumer Group</h1>
            <br />
            <Link href="/blogs/ai-fundamentals">Go to specific blog</Link>
        </div>
    )
}

export default Shop;