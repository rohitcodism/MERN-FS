'use client'
// app/template.js

import React, { useState } from 'react';

const Template = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
            {children}
        </div>
    );
};

export default Template;
