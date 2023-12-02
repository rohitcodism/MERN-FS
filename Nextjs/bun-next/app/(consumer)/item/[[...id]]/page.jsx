import React from 'react'

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//     const posts = await fetch('http://127.0.0.1:4000/data').then((res) => res.json());
//     console.log(posts);

//     return posts.map((post) => ({
//         slug: post.slug,
//     }))
// }

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
    if (params?.id?.length == 2) {
        return (
            <div
                style={{
                    textAlign: "center",
                }}
                className='
                    text-3xl
                    font-bold
                '
            >
                <h1>This page is for Item <span className='text-green-500'>{params.id[0]}</span> of category <span className='text-red-500'>{params.id[1]}</span></h1>
            </div>
        );
    }
    else if (params?.id?.length == 1) {
        return (
            <div
                style={{
                    textAlign: "center",
                }}
                className='
                text-3xl
                font-bold
            '
            >
                <h1>This page is for Item <span className='text-green-500'>{params.id[0]}</span></h1>
            </div>
        );
    }
    return (
        <div
            style={{
                textAlign: "center",
            }}
            className='
        text-3xl
        font-bold
    '
        >
            <h1>This page is only for Item <span className='text-green-500'>As no slugs were detected by params.</span></h1>
        </div>
    );
}


