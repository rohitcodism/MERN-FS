import React from 'react'

const ItemOne = ({params}) => {
    return (
        <div>
            <h1 className='text-4xl pt-8 pl-12 font-bold'>Item No. {params.id}</h1>
        </div>
    )
}

export default ItemOne;