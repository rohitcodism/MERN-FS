import { useQuery } from "@tanstack/react-query"
import { fetchPost } from "./API/Posty"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Post = () => {
    const { id } = useParams();
    const {isLoading, isError, data: post, error} = useQuery({
        queryKey: ["posts", id],
        queryFn:() => fetchPost(id)
    })

    const navigate = useNavigate()

    console.log(post);

    if(isLoading) return(<h1>Loading...</h1>)
    if(isError) return(<pre>Error 404!{console.log(error)}</pre>)

    return (
        <div>
            <button onClick={() => navigate(`/`)}>Back to list posts</button>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
};