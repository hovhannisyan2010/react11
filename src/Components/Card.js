import React from 'react'

function Card({ arr, id }) {
    return (
        <div className='card'>
            <div className='title'><h3>#{id} {arr.title}</h3></div>
            <div className='text'><h3>{arr.text}</h3></div>
        </div>
    )
}

export default Card