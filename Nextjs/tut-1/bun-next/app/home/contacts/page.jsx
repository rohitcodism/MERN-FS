import React from 'react'
import Link from 'next/link'

const Contacts = () => {
    return (
        <div>
            <h1 className='text-2xl text-center'>Contacts</h1>
            <div
                style={{
                    marginTop : "45rem",
                    textAlign : "center",
                    marginBottom : "5rem"
                }}
                id='contacts'
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quo, architecto ducimus sit accusamus eius harum nihil repudiandae itaque dicta, officiis cupiditate.</p>
                <Link href='/home/dashboard' scroll={false} >Go to Dashboard page thorough link</Link>
            </div>
        </div>
    )
}

export default Contacts