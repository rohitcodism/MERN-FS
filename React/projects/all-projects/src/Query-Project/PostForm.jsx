export const PostForm = () => {

    const Field = (label) =>{
        <div>
            <label>{label}</label>
            <input  type="text" name={label.toLowerCase()} />
        </div>
    };

    return(
        <>
            <form>
                {Field("Title")}
                {Field("Content")}
            </form>
        </>
    );
};