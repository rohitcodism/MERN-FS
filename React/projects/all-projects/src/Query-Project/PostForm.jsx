import { useState } from "react";

/**
 * Renders a form with input fields for "Title" and "Content".
 * @returns {JSX.Element} The rendered form component.
 */
export const PostForm = () => {
    const [post, setPost] = useState({
        title: '',
        content: '',
    });

    /**
     * Handles changes in the input fields.
     * @param {Event} event - The input change event.
     */
    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    /**
     * Handles form submission.
     * @param {Event} event - The form submit event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(post);
        setPost({
            title: '',
            content: '',
        });
    };

    /**
     * Generates a div element containing a label and an input field.
     * @param {string} label - The label for the input field.
     * @returns {JSX.Element} The generated div element.
     */
    const Field = ({ label }) => (
        <div>
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <input
                onChange={handleChangeInput}
                type="text"
                name={label.toLowerCase()}
                value={post[label.toLowerCase()]}
            />
        </div>
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field label="Title" />
                <Field label="Content" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};