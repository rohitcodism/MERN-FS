import { useState } from "react";
/**
 * Renders a form field with a label and an input element.
 * @param {string} label - The label for the form field.
 * @returns {JSX.Element} - The rendered form field.
 */
const ContentField = ({ label }) => {

    const [post, setPost] = useState({ Title: "", Content: "" })

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    console.log(post)

    return (
        <div>
            <label htmlFor="title">{label}</label>
            <input onChange={handleChange} type="text" name={label} value={post[label]}/>
        </div>
    );
};

export const PostForm = ({post, setPost}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post);
        setPost({ Title: "", Content: "" });
    };

    return (
        <div>
            <form style={{ width: "100%" }}>
                <ContentField label={"Title"} />
                <ContentField label={"Content"}/>
                <button onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
}
