import { useQuery } from "@tanstack/react-query"
import NewPost from "./Components/NewPost"
import { fetchPosts } from "./API/Posty"

export const Postlists = () => {

    const {isLoading, isError, data: posts, error} = useQuery({
        queryKey: ["posts"],
        queryFn :  fetchPosts
    })
    console.log(posts)

    if(isLoading) return(<h1>Loading...</h1>)
    if(isError) return(<pre>{error}</pre>)

    return (
        <div>
            <NewPost />
            {posts.map((post) =>{
                return(
                    <div key={post.id} style={{backgroundColor :"#7F56D9"}}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}