'use client'
// app/template.js

import React, { useState } from 'react';

const Template = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <div
            className='
                text-center
            '
        >
            <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
            <br />
            <br />
            {children}
        </div>
    );
};

export default Template;
