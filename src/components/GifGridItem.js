
import React from 'react'

export const GifGridItem = ({title,url}) => {
    return (
        <div className='card animate__animated animated_fadeIn'>
            <img
                src={ url }
                alt = { title }
            />
            <p>{title}</p>
        </div>
    )
}