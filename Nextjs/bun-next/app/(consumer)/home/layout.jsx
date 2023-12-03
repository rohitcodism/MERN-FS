'use client'

import React, { useState } from "react";

export default function DashboardLayout({children}){

    const[count, setCount] = useState(0);

    return(
        <div
            className="
                text-center
            "
        >
            <h1 className="text-2xl text-center mb-4">This is under Home layout</h1>
            <button onClick={() => setCount(count + 1)}> Layout Increment Count: {count}</button>
            <br />
            <br />
            {children}
        </div>
    );
}