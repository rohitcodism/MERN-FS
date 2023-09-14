import { useState } from "react";

/**
 * Renders a form with input fields for "Title" and "Content".
 * @returns {JSX.Element} The rendered form component.
 */
export const PostForm = () => {

    const[post, setPost] = useState({
        title: "",
        content: "",
    });  
    
    const handleChangeInput = (event) => {
        event.preventDefault()
        setPost({
            ...post,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(post);
        setPost({
            title: "",
            content: "",
        }); // Clear the form
    };

    console.log(post);

    /**
     * Generates a div element containing a label and an input field.
     * @param {string} label - The label for the input field.
     * @returns {JSX.Element} The generated div element.
     */
    const Field = ({ label }) => (
        <div>
            <label htmlFor={label.toLowerCase()}
            >{label}</label>
            <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]}/>
        </div>
    );

    return (
        <div>
            <form>
                <Field label="Title" />
                <Field label="Content" />
                <button type="submit" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
};