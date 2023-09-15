import React from 'react'
import { PostForm } from './PostForm'
import { useMutation } from '@tanstack/react-query'
import { createPost } from '../API/Posty'

const NewPost = () => {

    const createPostMutation = useMutation({
        mutationFn: createPost,
    });

    const handleAddPost = (post) => {
        createPostMutation.mutate({
            id: 3,
            ...post
        })  
    };

    return (
        <div>
            <h1>Add new post</h1>
            <PostForm onSubmit={handleAddPost} />
        </div>
    )
}

export default NewPost
