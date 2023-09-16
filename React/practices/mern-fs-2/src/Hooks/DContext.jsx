import React, { useState } from "react";
import { createContext, useContext } from "react";
const AppContext = createContext(null);

export const Parent = () => {
    const [userName, setUserName] = useState('Rohit');

    return(
        <AppContext.Provider value={{userName, setUserName}}>
            <div>
                <h2>{userName}</h2>
                <Child />
            </div>
        </AppContext.Provider>
    );
};

export const Child = () => {
    return(
        <div>
            <GrandChild />
        </div>
    );
}

export const GrandChild = () => {
    const {setUserName} = useContext(AppContext);
    return(
        <div>
            <button onClick={() => setUserName('Bob')}>Change Username</button>
        </div>
    );
}