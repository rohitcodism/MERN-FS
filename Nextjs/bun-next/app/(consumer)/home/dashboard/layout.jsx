import React, { Suspense } from 'react'
import Loading from '../../loading';

const DashboardLayout = ({children}) => {
    return (
        <div
            className='
                text-center
            '
        >
            <h1>This is the Dashboard Layout</h1>
            <br />
            <Suspense fallback={<Loading />} >
                {children}
            </Suspense>
        </div>
    )
}

export default DashboardLayout;