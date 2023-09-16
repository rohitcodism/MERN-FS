import React, {useEffect, useState} from "react";
import axios from "axios";

export const Effect = () => {
    const [data, setData] = useState("")


    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            console.log(res.data[0].email);
            setData(() =>res.data[0].email);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            console.log("Promise done !!")
        })

    }, [data, count])
    return (
        <>
            <div>
                <h2>{count}</h2>
                <button onClick={Increment}>Click</button>
                <h2>{data}</h2>
            </div>
        </>
    );
}