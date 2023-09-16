import { PostForm } from './PostForm'
import { QueryClient, useMutation } from '@tanstack/react-query'
import { createPost } from '../API/Posty'

const NewPost = () => {

    const queryClient = new QueryClient();

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            console.log("Success!!");
            queryClient.refetchQueries({queryKey: ["posts"]});
            console.log("Data re-fetched !!")
        },
        refetchOnWindowFocus: true,
    });

    const handleAddPost = (post) => {
        createPostMutation.mutate({
            id: crypto.randomUUID(),
            ...post
        })  
    };

    return (
        <div>
            <h1>Add new post</h1>
            <PostForm onSubmit={handleAddPost} initialValue={{}} />
        </div>
    )
}

export default NewPost
