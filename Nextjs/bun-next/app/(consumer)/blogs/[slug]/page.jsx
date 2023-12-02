import React from 'react'

// It prevents to create a dynamic route for a slug that is not present in the database.
export const dynamicParams = false;


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch('http://127.0.0.1:4000/data').then((res) => res.json());
    console.log(posts);

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {

    const { slug } = params;

    return(
        <div
            className='
                text-4xl
                font-bold
                text-center
            '
        >
            <h1>This is a blog about <br /><span className='text-purple-500'>{slug}</span></h1>
        </div>
    );
}


