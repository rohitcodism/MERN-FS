import { useState } from "react";
/**
 * Renders a form field with a label and an input element.
 * @param {string} label - The label for the form field.
 * @returns {JSX.Element} - The rendered form field.
 */

export const PostForm = ({ onSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(post);
        console.log(post);
    };

    const [post, setPost] = useState({ Title: "", Content: "" })
    
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    console.log(post)

    const ContentField = ({ label }) => {
    
        return (
            <div>
                <label htmlFor="title">{label}</label>
                <input onChange={handleChange} type="text" name={label} value={post[label]}/>
            </div>
        );
    };

    return (
        <div>
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <ContentField label={"Title"} />
                <ContentField label={"Content"}/>
                <button>Create</button>
            </form>
        </div>
    )
}
