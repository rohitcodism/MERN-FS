'use client'

import React, { useState } from "react";

export default function DashboardLayout({children}){

    const[count, setCount] = useState(0);

    return(
        <div>
            <h1 className="text-2xl text-center mb-4">This is under user layout</h1>
            <button onClick={() => setCount(count + 1)}> Layout Increment Count: {count}</button>
            {children}
        </div>
    );
}