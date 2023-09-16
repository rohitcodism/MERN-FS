import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import NewPost from "./Components/NewPost"
import { fetchPosts } from "./API/Posty"
import { useNavigate } from "react-router-dom"
import { deletePost } from "./API/Posty"

export const Postlists = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const {isLoading, isError, data, error} = useQuery({
        queryKey: ["posts"],
        queryFn :  fetchPosts
    })

    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            console.log("Success!!");
            queryClient.refetchQueries({queryKey: ["posts"]});
            console.log("Data re-fetched !!")
        },
    })

    const handleDeletePost = (id) => {
        deletePostMutation.mutate(id);
    };

    if(isLoading) return(<h1>Loading...</h1>)
    if(isError) return(<pre>Error!!</pre>)

    return (
        <div>
            <NewPost />
            {data.map((post) =>{
                console.log(post.id);
                console.log(post.Title);
                console.log(post.Content);
                return(
                    <div key={post.id} style={{backgroundColor :"#7F56D9"}}>
                        <h4 onClick={() => navigate(`/posts/${post.id}`)} style={{cursor :"pointer"}}>{post.Title}</h4>
                        <p>{post.Content}</p>
                        <button onClick={() => navigate(`/posts/${post.id}/add`)} style={{cursor :"pointer"}}>Edit</button>
                        <button style={{cursor :"pointer"}} onClick={() => {handleDeletePost(post.id)}}>Delete</button>
                    </div>
                );
            })}
        </div>
    )
}