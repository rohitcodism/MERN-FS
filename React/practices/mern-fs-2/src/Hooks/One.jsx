import React, { useState } from "react";

export const One = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    function Increment () {
        setCounter(counter + 1);
    }

    function Decrement () {
        setCounter(counter - 1);
    }

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-around", paddingTop: "8rem"}}>
                <button onClick={Increment} style={{width: "50px", height: "50px"}}> + </button>
                <h3>{counter}</h3>
                <button onClick={Decrement} style={{width: "50px", height: "50px"}}> - </button>
            </div>
            <div>
                <input type="text" value={name} placeholder="Enter your name" onChange={e => setName(e.target.value)} />
                <h2>{name}</h2>
            </div>
        </>
    );
}