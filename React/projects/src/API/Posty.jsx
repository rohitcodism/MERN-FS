export async function fetchPosts(){
    const response = await fetch("http://localhost:3000/posts")
    console.log(response.status)
    return response.json()
}

export async function fetchPost(id){
    const response = await fetch(`http://localhost:3000/posts/${id}`)
    return response.json()
}

export async function createPost(newPost){
    const response = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    return response.json()
}

export async function updatePost(upDatedPost){
    const response = await fetch(`http://localhost:3000/posts/${upDatedPost.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(upDatedPost)
    })
    return response.json()
}

export async function deletePost(id){
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        body: JSON.stringify()
    })
    return response.json()
}