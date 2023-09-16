import { PostForm } from "./Components/PostForm";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPost } from "./API/Posty";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost } from "./API/Posty";


export const AddPost = () => {

    const queryClient =useQueryClient();

    const { id } = useParams();
    const {isLoading, isError, data: post, error} = useQuery({
        queryKey: ["posts", id],
        queryFn:() => fetchPost(id)
    });

    const navigate = useNavigate()

    const updateMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            console.log("Success!!");
            queryClient.refetchQueries({queryKey: ["posts"]});
            console.log("Data re-fetched !!")
            navigate("/")
        },
    });

    const handleEditPost = (upDatedPost) => {
        updateMutation.mutate({id, ...upDatedPost})
    }

    console.log(post);

    if(isLoading) return(<h1>Loading...</h1>)
    if(isError) return(<pre>Error 404!{console.log(error)}</pre>)

    return (
        <div>
            <h1>Edit Post</h1>
            <PostForm initialValue={post} onSubmit={handleEditPost} />
        </div>
    )
};