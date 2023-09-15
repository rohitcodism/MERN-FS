import { useQuery } from "@tanstack/react-query"
import NewPost from "./Components/NewPost"
import { fetchPosts } from "./API/Posty"
import { useNavigate } from "react-router-dom"

export const Postlists = () => {

    const navigate = useNavigate()

    const {isLoading, isError, data: posts, error} = useQuery({
        queryKey: ["posts"],
        queryFn :  fetchPosts
    })

    if(isLoading) return(<h1>Loading...</h1>)
    if(isError) return(<pre>Error!!</pre>)

    return (
        <div>
            <NewPost />
            {posts.map((post) =>{
                console.log(post);
                return(
                    <div key={post.id} style={{backgroundColor :"#7F56D9"}}>
                        <h4 onClick={() => navigate(`/posts/${post.id}`)} style={{cursor :"pointer"}}>{post.title}</h4>
                        <p>{post.body}</p>
                        <button onClick={() => navigate(`/posts/${post.id}/add`)} style={{cursor :"pointer"}}>Edit</button>
                        <button style={{cursor :"pointer"}}>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}