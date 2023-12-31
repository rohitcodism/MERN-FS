'use client'
import ToggleButton from '@/app/components/Toggle';
import { useSelectedLayoutSegments } from 'next/navigation';
import React, { Suspense } from 'react'

const DashboardLayout = ({ children, team, login, analytics }) => {

    const layoutSegments = useSelectedLayoutSegments('team')
    console.log(layoutSegments);

    let loggedIn = true;

    return (
        <div
            className='
                text-center
                flex
                flex-col
                items-center
                justify-center
                w-full
                gap-8
            '
        >
            <h1>This is the Dashboard Layout</h1>
            {children}
            <div
                className='
                    flex
                    items-center
                    justify-center
                    w-full
                    h-full
                '
            >
                {loggedIn ? [team, analytics] : login }
            </div>
        </div>
    )
}

export default DashboardLayout;