import { Routes, Route } from "react-router-dom";
import { PostLists } from "./Query-Project/PostLists";
import { Post } from "./Query-Project/Post";
import { EditPost } from "./Query-Project/EditPost";
export const QueryApp = () => {
    return(
        <div>
            <h1>Awesome Blog</h1>
            <Routes>
                <Route path="/" element={<PostLists />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/post/:id/edit" element={<EditPost />} />
            </Routes>
        </div>
    );
}