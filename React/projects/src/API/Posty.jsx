export async function fetchPosts(){
    const response = await fetch("http://localhost:3000/posts")
    console.log(response.status)
    return response.json()
}