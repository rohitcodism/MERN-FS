import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='text-2xl font-bold text-center'> 
            This is under Blog Layout
            {children}
        </div>
    )
}

export default Layout;