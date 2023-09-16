

import { useState } from "react";

/**
 * Renders a form for creating a post.
 * @param {Object} props - The component props.
 * @param {Function} props.onSubmit - A callback function that will be called when the form is submitted. It takes a single argument, which is the post object containing the input values.
 * @returns {JSX.Element} The rendered component.
 */
export const PostForm = ({ onSubmit, initialValue }) => {
    console.log(initialValue);
    const [inputValues, setInputValues] = useState({ Title: initialValue.Title || "", Content: initialValue.Content || "" });

    /**
     * Handles the form submission.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { ...inputValues };
        onSubmit(post);
        setInputValues({ Title: "", Content: "" }); // Reset input values after submission
    };

    /**
     * Handles the input change.
     * @param {Event} e - The input change event.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value,
        }));
    };

    return (
        <div>
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Title">Title</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="Title"
                        value={inputValues.Title}
                    />
                </div>
                <div>
                    <label htmlFor="Content">Content</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="Content"
                        value={inputValues.Content}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};
